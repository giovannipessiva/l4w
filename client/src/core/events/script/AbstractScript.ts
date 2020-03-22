import { DirectionEnum, ICell } from "../../../../../common/src/model/Commons";
import { IEvent } from "../../../../../common/src/model/Event";
import { IConfig } from "../../../../../common/src/model/Save";
import { DynamicScene } from "../../../game/DynamicScene";
import { DialogManager } from "../../manager/DialogManager";
import { EventManager } from "../../manager/EventManager";
import { SaveManager } from "../../manager/SaveManager";
import { IEmptyCallback } from "../../util/Commons";
import { Utils } from "../../util/Utils";

export abstract class AbstractScript {
    
    protected event: IEvent;
    protected hero: IEvent;
    protected scene: DynamicScene;
    
    public static tooltip: string = "(no description provided)";
    public static STATE_VAR: string = "state"  
    
    public constructor(event: IEvent, hero: IEvent, scene: DynamicScene) {
        this.event = event;
        this.hero = hero;
        this.scene = scene;
    }

    getConfig(): IConfig {
        if(this.scene.save !== undefined && this.scene.save.config !== undefined) {
            return this.scene.save.config;
        }
        return SaveManager.getNewConfig();
    }

    protected showSimpleDialog(messageId: number, callback: IEmptyCallback): boolean {
        let cfg = this.getConfig();
        DialogManager.showSimpleDialog(this.scene, this.hero, this.event.name, messageId, cfg, callback);
        return true;
    }

    protected showComplexDialog(messageId: number, callback: IEmptyCallback): boolean {
        let cfg = this.getConfig();
        DialogManager.showComplexDialog(this.scene, this.hero, this.event.name, messageId, cfg, callback);
        return true;
    }
    
    protected moveToTarget(target: ICell): boolean {
        EventManager.startMovement(this.scene.grid, this.event, target.i, target.j);
        return true;  
    }
    
    protected stepToTarget(target: ICell): boolean {
        let direction: DirectionEnum = Utils.getDirection(target, this.event);
        return this.stepToDirection(direction);  
    }
    
    protected stepToDirection(direction: DirectionEnum): boolean {
        let target: ICell = Utils.moveToDirection(this.event, direction);
        return this.moveToTarget(target);
    }
    
    protected stepFromTarget(target: ICell): boolean {
        let direction: DirectionEnum = Utils.getDirection(target, this.event);
        direction = Utils.getOpposedDirections(direction);
        return this.stepToDirection(direction);  
    }
    
    /* im sorry */
    protected wait(seconds: number, countdown: boolean = false): Promise<boolean> {
        let innerFn = function(msec: number, countdown: boolean = false): Promise<boolean> {
            // Check if waiting is already finished
            if (msec <= 0) {
                return new Promise(function(resolve, reject) {
                    resolve(true);
                });
            }
            if(!countdown) {
                // Just wait
                return new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        resolve(true);
                    }, msec);
                });
            } else {
                // Wait and log the timer every 1/10th of second (recursively)
                return new Promise(function(resolve, reject) {
                    innerFn(msec - 100, true).then(function(){
                        setTimeout(function() {
                            console.log("TIMER: " + msec);
                            resolve(true);
                        }, 97); // This timeout should be 100 ms
                        // It is 97 because it takes into account some ms of processing time
                    });
                });
            }
        };
        return innerFn(seconds, countdown);
    };
    
    protected saveMem(key: string, value: string) {
        EventManager.saveMem(this.event, key, value);    
    };
    
    protected loadMem(key: string): string | undefined {
        return EventManager.loadMem(this.event, key);    
    };
    
    protected incrementStateVar(): number {
        let stateVar: string | undefined = this.loadMem(AbstractScript.STATE_VAR);
        let newStateVar: number = 0;
        if(stateVar !== undefined) {
            newStateVar = Number.parseInt(stateVar);
            if(Number.isNaN(newStateVar)) {
                newStateVar = 0;    
            }
        }
        newStateVar++;
        this.saveMem(AbstractScript.STATE_VAR, newStateVar + "");
        return newStateVar;            
    }
    
    protected setStateVar(stateVar: number) {
        this.saveMem(AbstractScript.STATE_VAR, stateVar + "");    
    }
    
    protected goToMap(mapId: string, target: ICell) {
        let scene = this.scene;
        SaveManager.loadMapSave(scene, mapId, target, function() {
            scene.moveFocusToTarget(target);
            EventManager.stopMovement(scene.hero);
        });
    }

    protected changeSkin(newSkin: string) {
        this.scene.save.config.skin = newSkin;
    }
}
