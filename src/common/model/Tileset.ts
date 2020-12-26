/**
 * ITileset is used to define the metadata associated to a graphical asset which can be used as map tile
 */
export interface ITileset {
    // Persistent data
    firstgid: number; //GID corresponding to the first tile in the set
    image: string; //Image used for tiles in this set (also used as key)
    autotiles?: IAutoTileset[]; //Array of Terrains (optional)
    blocks: number[]; //Array of codes representing the block attributes
    onTop: number[]; //Array of z-index for over-the-event positioning
    
    // Transient data
    imageData?: HTMLImageElement; //Image loaded as data
    imageWidth?: number; //Width of source image in pixels
    imageHeight?: number; //Height of source image in pixels
};

/**
 * IAutoTile represent an automatic map tile, which will render accordingly to its shape and can be animated
 */
export interface IAutoTileset {
    // Persistent data
    image: string; //Image used for this autotile (also used as key)
    blocked: boolean; //Define if this autotile is walkable

    // Transient data
    imageData?: HTMLImageElement; //Image loaded as data
    //TODO: pre-render everything as transient data
};
