import { ICell, LanguageEnum, IRectangle, IBooleanCallback } from "../../common/Commons";
import { gameConfig } from "../../common/GameConfig";
import { IEvent } from "../../common/model/Event";
import { ISave } from "../../common/model/Save";
import { AbstractScene } from "../core/AbstractScene";
import { EventManager } from "../core/manager/EventManager";
import { MapManager } from "../core/manager/MapManager";
import { SaveManager } from "../core/manager/SaveManager";
import { emptyFz } from "../core/util/Commons";
import { Constant } from "../core/util/Constant";
import { DynamicGrid } from "./DynamicGrid";
import { Utils } from "../../common/Utils";
import { DataDefaults } from "../../common/DataDefaults";

export interface ILauncher {
    (event: IEvent, scene: DynamicScene, hero: IEvent, state: number, parameters?: any): boolean
};

/*
 * Scene implementation for managing dynamic rendering
 */
export class DynamicScene extends AbstractScene {

    FPS = 20;
    refreshInterval = 1000 / this.FPS;

    autoFPS = true;
    secondFPS = 0;
    countFPS = 0;
    lastFPS = 0;
    fpsPerformance = [22, 21, 20];

    hero: IEvent;   
    action: ICell | undefined;
    save: ISave;

    launcher: ILauncher;
    
    dialogName: string;
    dialogText: string;
    dialogSkin: HTMLImageElement;
    dialogAction: (input?: string)=>void;

    constructor(grid: DynamicGrid, launcher: ILauncher) {
        super(grid);
        // Launcher method needs to be injected to avoid circular references
        // (which cause this: "TypeError: Class extends value undefined is not a constructor or null")
        this.launcher = launcher;
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
            let launchableState = EventManager.update(this.hero, this, this.hero, this.action, time, this.pauseDuration);
            if(launchableState !== undefined) {
                this.launcher(this.hero, this, this.hero, launchableState);
            }
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
                let launchableState = EventManager.update(<IEvent> event, this, this.hero, this.action, time, this.pauseDuration);
                if(launchableState !== undefined) {
                    this.launcher(<IEvent> event, this, this.hero, launchableState);
                }
                movements = movements || EventManager.manageMovements(this.map, this.grid, <IEvent> event, emptyFz, emptyFz, emptyFz);
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

        this.redrawArea = this.getRedrawArea();
        return true;
    }

    protected mainGameLoop_post() {
        super.mainGameLoop_post();
        this.renderFPS();
    }

    protected getRedrawArea(redrawAll?: boolean): IRectangle {
        let boundariesX = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth());
        let boundariesY = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
        return {
            x: boundariesX.min,
            y: boundariesY.min,
            h: boundariesY.max - boundariesY.min,
            w: boundariesX.max - boundariesX.min
        }
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
            this.context.font = "bold 18px Oldenburg";
            this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20);
        }
    }

    protected renderDynamicElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number, i: number, j: number, onTop: boolean) {
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
                    if (EventManager.isVisible(<IEvent> event, minRow, maxRow, minColumn, maxColumn, i, j, onTop)) {
                        EventManager.render(this.grid, <IEvent> event, this.context, true, this.pointer);
                    }
                } catch(e) {
                    console.error(e);    
                }
            }
        }
    }
    
    public loadSave(save: ISave | undefined, callback: IBooleanCallback) {
        let mapId: string;
        let hero: IEvent;
        if (save === undefined) {
            // Nothing to load
            if (Utils.isEmpty(this.map)) {
                mapId = gameConfig.maps.start.map; // Load first map
                hero = DataDefaults.getHero();
            } else {
                // Leave current map
                callback(false);
                return;
            }
        } else {
            this.save= save;
            // Load map from save
            mapId = save.currentMap;
            hero = <IEvent> save.hero;
        }
        let tmpEvt = EventManager.initTransientData(this.map, this.grid, hero);
        if(tmpEvt === undefined) {
            console.error("Cannot initialize hero event");
        } else {
            this.hero = tmpEvt;
        }
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

    setLanguage(lang: LanguageEnum) {
        if(this.save === undefined) {
            this.save = DataDefaults.getSave();
        }
        this.save.config.lang = lang;
    }

    toggleNaturalScale(enabled?: boolean, double?: boolean) {
        (<DynamicGrid> this.grid).toggleNaturalScale(enabled, double);
        this.grid.refreshCanvasSize();
        this.changeScale();
        this.reapplyTranslation();
    }
}