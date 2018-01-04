interface ISave {
    id: number; // Id of the user save
    timestamp: number; // Save time
    hero: IEvent; // Hero state
    currentMap: number; // Id of the current map
    maps: IMapSave[]; // List of customized maps, indexed by map.id
}

interface IMapSave {
    events: IEventSave[]; // Memory of the events  
}

interface IEventSave {
    index: number; // Index of the event
    memory: {}; // Map of generic key -> value pairs (override the default memory of this event)  
}