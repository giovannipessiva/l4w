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
            x: 0,
            y: 0
        };
        return actor;
    }
    
    export function getNewHero(): IActor {
        let actor: IActor = getNewActor();
        actor.name = "Hero";
        return actor;
    }

};
