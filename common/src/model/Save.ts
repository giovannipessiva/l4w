interface ISave {
    id: number; // Id of the user save
    timestamp: number; // Save time
    hero: IEvent; // Hero state
    currentMap: number; // Id of the current map
    maps: IMapSave[]; // List of customized maps, indexed by map.id
    config: IConfig; // User configuration
}

interface IMapSave {
    events: IEventSave[]; // Memory of the events  
}

interface IEventSave {
    id: number; // ID of this event (unique in its map)
    memory: {}; // Map of generic key -> value pairs (override the default memory of this event)  
}

interface IConfig {
    lang: LanguageEnum; // Language chosen by the user
    skin: string; // Current window skin
}