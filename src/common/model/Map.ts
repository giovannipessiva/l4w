import { IEvent } from "./Event"
import { ICell } from "../Commons"
import { IAutoTileset, ITileset } from "./Tileset"

/**
 * IMap is used to define a game map
 */

export interface IMap {
    // Persistent data
    id: string; //Id of the map
    width: number; //Number of tile columns
    height: number; //Number of tile rows
    layers: IMapLayer[]; //Array of Layers
    events: IEvent[]; //Events
    tileset: ITileset; //Tileset object for this map
    autotilesets?: { [key: string] : IAutoTileset }; //Contains all the Autotilesets used in this map, with theirs gid (optional)

    // Transient data
    blocks?: number[]; //Array of codes representing the block attributes from layers
    dynamicBlocks?: number[]; //Array of codes representing the block attributes from events
    maxEventId?: number; // Max id of events in this map
};

export interface IVertex {
    cell: ICell,
    key?: number[]
}

export interface IMapLayer {
    // Persistent data
    type: "tilelayer" | "imagelayer"; //TODO implement "imagelayer"
    x?: number; //Horizontal layer offset.
    y?: number; //Vertical layer offset.
    data?: (number | null)[]; //Array of GIDs. tilelayer only.
    image?: string; //Image name. imagelayer only.
    opacity?: number; //Value between 0 and 1
    speedX?: number;
    speedY?: number;

    // Transient data
    autotileData?: (number | null)[]; // Precomputed  proximity value for every autotile cell
};

export interface IMapTile {
    terrain: number[]; //Index of terrain for each corner of tile
};
