import { ISave, IConfig } from "../../../../common/src/model/Save"
import { LanguageEnum, ICell } from "../../../../common/src/model/Commons"
import { IMap } from "../../../../common/src/model/Map"
import { IEvent } from "../../../../common/src/model/Event"
import { IEventSave } from "../../../../common/src/model/Save"
import { EventManager } from "./EventManager"
import { MapManager } from "./MapManager"
import { Utils } from "../util/Utils"
import { DynamicScene } from "../../game/DynamicScene"
import { IBooleanCallback } from "../util/Commons";

/**
 * Module to handle save
 */
export namespace SaveManager {

    export function getNewSave(): ISave {
        return {
            id: 0,
            timestamp: Utils.now(),
            currentMap: 0,
            hero: EventManager.getNewHero(),
            maps: [],
            config: getNewConfig()
        };
    }

    export function getNewConfig(): IConfig {
        return {
            lang: LanguageEnum.EN,
            skin: "ld3-webskin1.png",
            flagAntialiasing: true,
            flagDouble: false,
            flagNatural: false
        };
    }
    
    export function getSave(map: IMap, hero: IEvent): ISave {
        if (Utils.isEmpty(map) || Utils.isEmpty(hero)) {
            return getNewSave();
        }
        let events: IEventSave[] = new Array<IEventSave>();
        if(!Utils.isEmpty(map.events)) {
            for(let e of map.events) {
                events.push(getEventSave(<IEvent> e));   
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
    
    export function loadMapSave(scene: DynamicScene, mapId: number, target: ICell, callback: IBooleanCallback) {
        MapManager.loadMap(mapId, scene.context.canvas, function(loaded) {
            let map = <IMap> loaded;
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
                        let e = EventManager.initTransientData(scene.map, scene.grid, <IEvent> scene.map.events[i]);
                        if(e !== undefined) {
                            scene.map.events[i] = e;
                        }
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