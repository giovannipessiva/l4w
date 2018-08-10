/// <reference path="../../../../common/src/model/Save.ts" />
/// <reference path="CharacterManager.ts" />

/**
 * Module to handle save
 */
namespace SaveManager {

    export function getNewSave(): ISave {
        let save: ISave = {
            id: 0,
            timestamp: Utils.now(),
            currentMap: 0,
            hero: EventManager.getNewHero(),
            maps: [],
            config: {
                lang: LanguageEnum.EN,
                skin: "ld3skin.png"
            }
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
            id: e.id,  
            memory: e.memory
        };
        return es;        
    }
    
    export function loadMapSave(scene: DynamicScene, mapId: number, target: ICell, callback) {
        MapManager.loadMap(mapId, scene.context.canvas, function(map: IMap) {
            applySave(scene.save, map);       
            scene.changeMap(map, function() {
                scene.resetTranslation();
                scene.hero.i = target.i;
                scene.hero.j = target.j;
                EventManager.initTransientData(map, scene.grid, scene.hero);
                scene.focus = scene.grid.mapCellToCanvas(target);
                // Initialize every Event in the map
                if (!Utils.isEmpty(scene.map.events)) {
                    for (let i = 0; i < scene.map.events.length; i++) {
                        scene.map.events[i] = EventManager.initTransientData(scene.map, scene.grid, scene.map.events[i]);
                    }
                }
                callback(true);
            });
        });      
    }
    
    function applySave(save: ISave, map: IMap): void {
        if(Utils.isEmpty(save) || Utils.isEmpty(map.events) || Utils.isEmpty(save.maps[map.id])) {
            return;
        }
        let saveEvents = save.maps[map.id].events;
        if(Utils.isEmpty(saveEvents)) {
            return;    
        }
        for(let se of saveEvents) {
            for(let e of map.events) {
                if(se.id === e.id) {    
                    // Override event with saved data
                    e.memory = se.memory;
                }
            }
        }
    }
}