/// <reference path="../../../core/model/Commons.ts" />
/// <reference path="../../../core/AbstractGrid.ts" />

namespace Script {

    export abstract class AbstractScript {
        
        protected event: IEvent;
        protected grid: AbstractGrid;
        
        AbstractScript(event: IEvent, grid: AbstractGrid) {
            this.event = event;
            this.grid = grid;
        }
    
        protected dialog(message: string) {
            // TODO dialogs
            console.log(this.event.name + "> " + message); 
        }
        
        protected moveToTarget(target: ICell) {
            ActorManager.startMovement(this.grid, this.event, target.i, target.j);    
        }
        
        protected stepToDirection(direction: DirectionEnum) {
            let target: ICell = Utils.moveToDirection(this.event, direction);
            this.moveToTarget(target);
        }
        
        protected moveToHero(hero: ICell) {
            ActorManager.startMovement(this.grid, this.event,hero.i, hero.j);    
        }
    }
    
}