/// <reference path="Tileset.ts" />
/// <reference path="Actor.ts" />

//Map core model (only persistent data)
interface IMapData {
    id: number; //Id of the map
    tile: string; //Image of the tileset
    name: string; //Name of the map
    width: number; //Number of tile columns
    height: number; //Number of tile rows
    layers: IMapLayer[]; //Array of Layers 
    nextobjectid: number; //Auto-increments for each placed 
};

//Map extended model (include transient data)
interface IMap extends IMapData {
    blocks?: number[]; //Array of codes representing the block attributes
    tileset?: ITileset; //Tileset object for this map
};

interface IMapLayer {
    type: "tilelayer" | "objectgroup" | "imagelayer"; //TODO remove
    x?: number; //Horizontal layer offset.
    y?: number; //Vertical layer offset.
    data?: number[]; //Array of GIDs. tilelayer only.
    objects?: IActorData[]; //Array of Objects. objectgroup only.
    image?: string; //Image name. imagelayer only.
    opacity?: number; //Value between 0 and 1
    speedX?: number;
    speedY?: number;
};

interface IMapTile {
    terrain: number[]; //Index of terrain for each corner of tile
};
