import { DirectionEnum, ICell, ICellCallback } from "../../../../common/Commons";
import { IEvent } from "../../../../common/model/Event";
import { IConfig } from "../../../../common/model/Save";
import { DynamicScene } from "../../../game/DynamicScene";
import { DialogManager } from "../../manager/DialogManager";
import { EventManager } from "../../manager/EventManager";
import { SaveManager } from "../../manager/SaveManager";
import { IEmptyCallback } from "../../../../common/Commons";
import { ClientUtils } from "../../util/ClientUtils";
import { DataDefaults } from "../../../../common/DataDefaults";
import { EVENT_STATE_VAR } from "../../../../common/Constants";

/**
 * In order to create a new script:
 * - Create a class extending AbstratScript
 * - Add it to ScriptRegister
 * - (optional) add a custom "tooltip" field to the class
 * In order to create a new action:
 * - Add a new public method
 * - It can return a Promise if it is necessary to wait for it
 */
export abstract class AbstractScript {
    
    protected event: IEvent;
    protected hero: IEvent;
    protected scene: DynamicScene;
    
    public static tooltip: string = "no description provided";
    
    public constructor(event: IEvent, hero: IEvent, scene: DynamicScene) {
        this.event = event;
        this.hero = hero;
        this.scene = scene;
    }

    getConfig(): IConfig {
        if(this.scene.save !== undefined && this.scene.save.config !== undefined) {
            return this.scene.save.config;
        }
        return DataDefaults.getConfig();
    }

    protected showSimpleDialog(messageId: string, callback: IEmptyCallback): boolean {
        let cfg = this.getConfig();
        DialogManager.showSimpleDialog(this.event, this.scene, this.hero, messageId, cfg, callback);
        return true;
    }

    protected showComplexDialog(dialogId: number, callback: IEmptyCallback): boolean {
        let cfg = this.getConfig();
        DialogManager.showComplexDialog(this.event, this.scene, this.hero, dialogId, cfg, this.scene.dialogScriptLauncher, callback);
        return true;
    }
    
    protected moveToTarget(evt: IEvent, target: ICell, onTargetReached?: ICellCallback) {
        EventManager.startMovement(evt, target.i, target.j, onTargetReached);
    }
    
    protected stepToTarget(evt: IEvent, target: ICell, onTargetReached?: ICellCallback) {
        let direction: DirectionEnum = ClientUtils.getDirection(target, this.event);
        this.stepToDirection(evt, direction, onTargetReached);  
    }
    
    protected stepToDirection(evt: IEvent, direction: DirectionEnum, onTargetReached?: ICellCallback) {
        let target: ICell = ClientUtils.moveToDirection(evt, direction);
        this.moveToTarget(evt, target, onTargetReached);
    }
    
    protected stepFromTarget(evt: IEvent, target: ICell, onTargetReached?: ICellCallback) {
        let direction: DirectionEnum = ClientUtils.getDirection(target, evt);
        direction = ClientUtils.getOpposedDirections(direction);
        this.stepToDirection(evt, direction, onTargetReached);  
    }

    protected getEventById(eventId: number) {
        return this.scene.map.events.find((event: IEvent, index: number, obj: IEvent[]) => {
            return event.id === eventId;
        });
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
        let stateVar: string | undefined = this.loadMem(EVENT_STATE_VAR);
        let newStateVar: number = 0;
        if(stateVar !== undefined) {
            newStateVar = Number.parseInt(stateVar);
            if(Number.isNaN(newStateVar)) {
                newStateVar = 0;    
            }
        }
        newStateVar++;
        this.saveMem(EVENT_STATE_VAR, newStateVar + "");
        return newStateVar;            
    }
    
    protected setStateVar(stateVar: number) {
        this.saveMem(EVENT_STATE_VAR, stateVar + "");    
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
