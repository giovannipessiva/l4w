/**
 * ITileset is used to define the metadata associated to a graphical asset which can be used as map tile
 */

//Tileset model
export interface ITileset {
    // Persistent data
    firstgid: number; //GID corresponding to the first tile in the set
    image: string; //Image used for tiles in this set (also used as key)
    autotiles?: IAutoTile[]; //Array of Terrains (optional)
    blocks: number[]; //Array of codes representing the block attributes
    onTop: number[]; //Array of z-index for over-the-event positioning
    
    // Transient data
    imageData?: HTMLImageElement; //Image loaded as data
    imageWidth?: number; //Width of source image in pixels
    imageHeight?: number; //Height of source image in pixels
};

export interface IAutoTile {
    name: string; //Name of terrain
    tile: number; //Local ID of tile representing terrain
};
