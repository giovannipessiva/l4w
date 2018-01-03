/// <reference path="../model/Save.ts" />
/// <reference path="CharacterManager.ts" />

/**
 * Module to handle save
 */
namespace SaveManager {

    export function getNewSave(name: string): ISave {
        var save: ISave = {
            id: 0,
            map: 0,
            hero: EventManager.getNewHero()
        };
        return save;
    }
    
}