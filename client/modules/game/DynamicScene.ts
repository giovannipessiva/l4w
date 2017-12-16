/// <reference path="../core/AbstractScene.ts" />
/// <reference path="../core/manager/ActorManager.ts" />
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

    hero: IActor;   
    action: ICell;

    constructor(grid: DynamicGrid, canvas: HTMLCanvasElement) {
        super(grid);
        this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }

        let scene = this;
        let time = Utils.now();
        let context: DynamicScene = this;
        if (!Utils.isEmpty(this.hero)) {
            ActorManager.update(this.hero, time, this.pauseDuration);
            ActorManager.manageMovements(this.map, this.grid, this.hero, function(w: number, h: number) {
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
                EventManager.update(event, this.grid, this.hero, this.action);
                ActorManager.update(event, time, this.pauseDuration);
                ActorManager.manageMovements(this.map, this.grid, event, emptyFz, emptyFz, emptyFz);
            }
            // Reset the action
            this.action = undefined;
        }
        
        // Update map transient data (TODO: call this method only when needed)
        MapManager.updateDynamicData(this.map);        
        
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
        this.context.font = "bold 30px Arial";
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
                var avg: number = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;
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
        // TODO render by position
        if (ActorManager.isVisible(this.hero, minRow, maxRow, minColumn, maxColumn, i, j, onTop)) {
            ActorManager.render(this.grid, this.hero, this.context);
        }
        
        if (!Utils.isEmpty(this.map.events)) {
            for (let actor of this.map.events) {
                if (ActorManager.isVisible(actor, minRow, maxRow, minColumn, maxColumn, i, j, onTop)) {
                    ActorManager.render(this.grid, actor, this.context);
                }
            }
        }
    }
    
    public loadSave(save: ISave, callback: IBooleanCallback) {
        var scene = this;

        let callback2: IBooleanCallback = function(result) {
            // Initialize every actor in the map
            if (result && !Utils.isEmpty(scene.map.events)) {
                for (let i = 0; i < scene.map.events.length; i++) {
                    scene.map.events[i] = <IEvent> ActorManager.initTransientData(scene.grid, scene.map.events[i]);
                }
            }
            callback(result);
        };

        let mapId;
        let hero: IActor;
        if (Utils.isEmpty(save)) {
            // Nothing to load
            if (Utils.isEmpty(this.map)) {
                mapId = "0"; // Load first map
                hero = ActorManager.getNewHero();
            } else {
                // Leave current map
                callback(false);
                return;
            }
        } else {
            // Load map from save
            mapId = save.map;
            hero = save.hero;
        }

        this.hero = ActorManager.initTransientData(this.grid, hero);

        MapManager.loadMap(mapId, this.context.canvas, function(map: IMap) {
            scene.changeMap(map, function() {
                scene.resetTranslation();
                scene.focus = scene.grid.mapCellToCanvas(hero);
                callback2(true);
            });
        });
    }

    //TODO move to SaveManager
    public getSave(): ISave {
        if (Utils.isEmpty(this.map) || Utils.isEmpty(this.focus)) {
            return null;
        } else {
            return {
                id: 0,
                map: this.map.id,
                hero: this.hero
            };
        }
    }

    startMovement(i: number, j: number) {
        ActorManager.startMovement(this.grid, this.hero, i, j);
    }
    
    registerAction(i: number, j: number) {
        this.action = { i:i, j:j };
    }
}