/// <reference path="Tileset.ts" />
/// <reference path="Event.ts" />

interface IMap {
    name: string; //Name of the map
    width: number; //Number of tile columns
    height: number; //Number of tile rows
    layers: IMapLayer[]; //Array of Layers 
    tileset: ITileset; //Tileset
    nextobjectid: number; //Auto-increments for each placed 
};

interface IMapLayer {
    type: string; //"tilelayer", "objectgroup", or "imagelayer"
    x?: number; //Horizontal layer offset.
    y?: number; //Vertical layer offset.
    data?: number[]; //Array of GIDs. tilelayer only.
    objects?: IEvent[]; //Array of Objects. objectgroup only.
    image?: string; //Image name. imagelayer only.
    opacity?: number; //Value between 0 and 1
    speedX?:number;
    speedY?:number;
};

interface IMapTile {
    terrain: number[]; //Index of terrain for each corner of tile
};
