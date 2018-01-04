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
        let events: IEventSave[] = new Array<IEventSave>();
        if(!Utils.isEmpty(map.events)) {
            for(let e of map.events) {
                events.push(getEventSave(e));   
            }
        }
        let save: ISave = SaveManager.getNewSave();
        save.currentMap = map.id;
        save.hero = hero;
        save.maps[map.id] = {
            events: events    
        };
        return save;
    }
    
    function getEventSave(e: IEvent): IEventSave {
        let es: IEventSave = {
            index: e.id,  
            memory: e.memory
        };
        return es;        
    }
    
}