/// <reference path="../../../core/model/Commons.ts" />
/// <reference path="../../../core/AbstractGrid.ts" />

namespace Script {

    export abstract class AbstractScript {
        
        protected event: IEvent;
        protected grid: AbstractGrid;
        
        constructor(event: IEvent, grid: AbstractGrid) {
            this.event = event;
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
        
        protected stepToDirection(direction: DirectionEnum): boolean {
            let target: ICell = Utils.moveToDirection(this.event, direction);
            return this.moveToTarget(target);
        }
    }
    
}