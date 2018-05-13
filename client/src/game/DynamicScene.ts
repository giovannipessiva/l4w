/// <reference path="../core/AbstractScene.ts" />
/// <reference path="../core/manager/CharacterManager.ts" />
/*
 * Scene implementation for managing dynamic rendering
 */
class DynamicScene extends AbstractScene {

    FPS = 20;
    refreshInterval = 1000 / this.FPS;

    autoFPS = true;
    secondFPS = 0;
    countFPS = 0;
    lastFPS = 0;
    fpsPerformance = [22, 21, 20];

    hero: IEvent;   
    action: ICell;
    save: ISave;
    
    dialogName: string;
    dialogText: string;
    dialogSkin: HTMLImageElement;
    dialogAction: (input?: string)=>void;

    constructor(grid: DynamicGrid, canvas: HTMLCanvasElement) {
        super(grid);
        this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }
        
        let movements: boolean = false;
        let scene = this;
        let time = Utils.now();
        let context: DynamicScene = this;
        if (!Utils.isEmpty(this.hero)) {
            EventManager.update(this.hero, this, this.hero, this.action, time, this.pauseDuration);
            movements = EventManager.manageMovements(this.map, this.grid, this.hero, function(w: number, h: number) {
                // Move the focus
                scene.grid.changeTranslation(scene.focus.x + w, scene.focus.y + h, scene.map.width, scene.map.height);
            }, function(w: number, h: number) {
                // Update focus
                scene.focus.x += w;
                scene.focus.y += h;
            }, function(target: ICell) {
                context.registerAction(target.i, target.j);   
            });
        }
        if (!Utils.isEmpty(this.map.events)) {
            for (let event of this.map.events) {
                EventManager.update(event, this, this.hero, this.action, time, this.pauseDuration);
                movements = movements || EventManager.manageMovements(this.map, this.grid, event, emptyFz, emptyFz, emptyFz);
            }
            // Reset the action
            this.action = undefined;
        }
        
        if(movements) {
            // Update map transient data (only when events move)
            MapManager.updateDynamicData(scene.hero, this.map);        
        }
        
        // Reset pause duration
        if (!this.paused) {
            this.pauseDuration = undefined;
        }

        // Events logic
        //this.manageMovements();

        return true;
    }

    protected mainGameLoop_post(boundariesX: IRange, boundariesY: IRange) {
        super.mainGameLoop_post(boundariesX, boundariesY);

        //TODO rimuovere a regime
        this.context.fillStyle = "#000000";
        this.context.font = "bold 30px Oldenburg";
        this.context.fillText("(it's not ready yet)", this.grid.getCurrentTranslation().x + 20, this.grid.getCurrentTranslation().y + 40);

        this.renderFPS();
    }

    toggleFPS(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showFPS = enable;
        } else {
            this.renderingConfiguration.showFPS = !this.renderingConfiguration.showFPS;
        }
    }

    private renderFPS() {
        var seconds = Math.floor(Utils.now() / 1000);
        if (seconds === this.secondFPS) {
            this.countFPS++;
        } else {
            this.lastFPS = this.countFPS;
            this.countFPS = 1;
            this.secondFPS = seconds;
            if (this.autoFPS === true) {
                this.fpsPerformance.shift();
                this.fpsPerformance[2] = this.lastFPS;
                let avg: number = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;
                this.FPS = Math.ceil(avg) + 2;
            }
        }

        if (this.renderingConfiguration.showFPS) {
            this.context.fillStyle = Constant.Color.RED;
            this.context.font = "bold 18px Arial";
            this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20);
        }
    }

    protected renderDynamicElements(minRow, maxRow, minColumn, maxColumn, i, j, onTop) {
        try {
            if (EventManager.isVisible(this.hero, minRow, maxRow, minColumn, maxColumn, i, j, onTop)) {
                EventManager.render(this.grid, this.hero, this.context, true);
            }
        } catch(e) {
            console.error(e);    
        }

        if (!Utils.isEmpty(this.map.events)) {
            for (let event of this.map.events) {
                try {
                    if (EventManager.isVisible(event, minRow, maxRow, minColumn, maxColumn, i, j, onTop)) {
                        EventManager.render(this.grid, event, this.context, true, this.pointer);
                    }
                } catch(e) {
                    console.error(e);    
                }
            }
        }
        
        if(onTop && this.isDialogOpen()) {
            DialogManager.renderDialog(<DynamicGrid> this.grid, this.context, this.dialogName, this.dialogText, this.dialogSkin);    
        }
    }
    
    public loadSave(save: ISave, callback: IBooleanCallback) {
        let mapId;
        let hero: IEvent;
        if (Utils.isEmpty(save)) {
            // Nothing to load
            if (Utils.isEmpty(this.map)) {
                mapId = "0"; // Load first map
                hero = EventManager.getNewHero();
            } else {
                // Leave current map
                callback(false);
                return;
            }
        } else {
            this.save= save;
            // Load map from save
            mapId = save.currentMap;
            hero = save.hero;
        }
        this.hero = EventManager.initTransientData(this.map, this.grid, hero);

        SaveManager.loadMapSave(this, mapId, hero, callback);
    }

    startMovement(i: number, j: number): boolean {
        if(i < 0 || i >= this.map.width || j < 0 || j >= this.map.height) {
            return false;    
        }
        return EventManager.startMovement(this.grid, this.hero, i, j);
    }
    
    registerAction(i: number, j: number) {
        this.action = { i:i, j:j };
    }
    
    isDialogOpen() {
        return this.dialogName !== undefined && this.dialogSkin !== undefined;
    }
    
    closeDialog(scene: DynamicScene) {
        scene.dialogAction();
        scene.dialogName = undefined;
        scene.dialogText = undefined;
        scene.dialogSkin = undefined;
        scene.dialogAction = undefined;    
    }
    
    showSimpleDialog(name: string, message: string, skin: HTMLImageElement, callback: ()=>void): void {     
        this.dialogName = name;
        this.dialogText = message;
        this.dialogSkin = skin;
        this.dialogAction = callback;
        //TODO manage closing condition: as of now, use temporized closing
        let scene = this;
        setTimeout(function() {
            scene.closeDialog(scene);
        }, 3000);
    }
}