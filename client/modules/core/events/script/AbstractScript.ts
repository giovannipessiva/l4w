/// <reference path="../../../core/model/Commons.ts" />
/// <reference path="../../../core/AbstractGrid.ts" />

namespace Script {

    export abstract class AbstractScript {
        
        protected event: IEvent;
        protected hero: IActor;
        protected grid: AbstractGrid;
        
        public static tooltip: string = "(no description provided)";  
        
        constructor(event: IEvent, hero: IActor, grid: AbstractGrid) {
            this.event = event;
            this.hero = hero;
            this.grid = grid;
        }
    
        protected dialog(message: string): boolean {
            // TODO dialogs
            if(Utils.isEmpty(message)) {
                message = "";
            }
            console.log(this.event.name + "> " + message);
            return true;
        }
        
        protected moveToTarget(target: ICell): boolean {
            ActorManager.startMovement(this.grid, this.event, target.i, target.j);
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
        
        protected loadMem(key: string): string {
            return EventManager.loadMem(this.event, key);    
        };
    }  
}