/// <reference path="../model/Actor.ts" />

/**
 * Module to handle an actor
 */
namespace ActorManager {

    export function update(event: IActor, time: number) {
        //TODO
    }

    export function render(x: number, y: number) {
        //TODO
    }

    export function getNewActor(): IActor {
        let actor: IActor = {
            id: 0,
            name: "",
            i: 0,
            j: 0
        };
        return actor;
    }
    
    export function getNewHero(): IActor {
        let actor: IActor = getNewActor();
        actor.name = "Hero";
        return actor;
    }
    
    export function isVisible(e: IActor, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        if(!Utils.isEmpty(e.visible) && !e.visible) {
            return false;    
        }
        if(!Utils.isEmpty(e.opacity) && e.opacity === 0) {
            return false;    
        }
        return e.i >= minColumn && e.i <= maxColumn && e.j >= minRow && e.i <=maxRow;
    }

};
