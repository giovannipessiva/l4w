/// <reference path="../model/Save.ts" />
/// <reference path="ActorManager.ts" />

/**
 * Module to handle save
 */
namespace SaveManager {

	export function getNewSave(name: string): ISave {
        var save: ISave = {
            id: 0,
            map: 0,
            hero: ActorManager.getNewHero()
        };
        return save;
    }
    
}