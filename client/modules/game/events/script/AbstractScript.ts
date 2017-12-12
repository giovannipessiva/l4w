/// <reference path="../../../core/model/Commons.ts" />
/// <reference path="../../../core/AbstractGrid.ts" />

namespace Script {

    export abstract class AbstractScript {
        
        protected event: IEvent;
        protected hero: IActor;
        protected grid: AbstractGrid;
        
        constructor(event: IEvent, hero: IActor, grid: AbstractGrid) {
            this.event = event;
            this.hero = hero;
            this.grid = grid;
        }
    
        protected dialog(message: string): boolean {
            // TODO dialogs
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
        
        protected wait(seconds: number, timer?: boolean): Promise<any> {
            if(Utils.isEmpty(timer) || !timer) {
                // Simple wait
                return new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        resolve();
                    }, seconds * 1000);
                });
            } else {
                // Wait and log the timer every 1/10th of second
                let timer = 0;
                let timeout = seconds * 1000;
                setTimeout(function() {
                    timer += 100;
                    console.log("TIMER: " + timer);
                    if (100 >= timeout) {
                        // Timeout reached!
                        return new Promise(function(resolve, reject) {
                            resolve();
                        });
                    }
                }, 100);
            }
        }
    }  
}