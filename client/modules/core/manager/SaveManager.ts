/// <reference path="../model/Save.ts" />
/// <reference path="CharacterManager.ts" />

/**
 * Module to handle save
 */
namespace SaveManager {

    export function getNewSave(): ISave {
        var save: ISave = {
            id: 0,
            timestamp: Utils.now(),
            currentMap: 0,
            hero: EventManager.getNewHero(),
            maps: []
        };
        return save;
    }
    
    export function getSave(map: IMap, hero: IEvent): ISave {
        if (Utils.isEmpty(map) || Utils.isEmpty(hero)) {
            return null;
        }
        let save: ISave = SaveManager.getNewSave();
        save.currentMap = map.id;
        save.hero = hero;
        return save;
    }
    
}