import { IEvent } from "./Event"
import { LanguageEnum } from "../Commons"

/**
 * ISava is used to store the game state in order to restore it without loosing the progress and the choices made
 */

export interface ISave {
    id: number; // Id of the user save
    timestamp: number; // Save time
    hero: IEvent; // Hero state
    currentMap: string; // Id of the current map
    maps: IMapSave[]; // List of customized maps, indexed by map.id
    config: IConfig; // User configuration
}

export interface IMapSave {
    events: IEventSave[]; // Events dynamic data  
}

export interface IEventSave {
    id: number; // ID of this event (unique in its map)
    memory: {}; // Map of generic key -> value pairs (override the default memory of this event)  
}

/* Does not include a flag for fullscreen, since it cannot be activated without user input */
export interface IConfig {
    lang: LanguageEnum; // Language chosen by the user
    skin: string; // Current window skin
    flagNatural: boolean; // Natural size (scale=1)
    flagDouble: boolean; // Natural size x2 (scale=2)
    flagAntialiasing: boolean; // Antialiasing flag
}