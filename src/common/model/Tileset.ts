/**
 * ITileset is used to define the metadata associated to a graphical asset which can be used as map tile
 */
export interface ITileset {
    // Persistent data
    image: string; //Image used for tiles in this set (also used as key)
    blocks: number[]; //Array of codes representing the block attributes
    onTop: number[]; //Array of z-index for over-the-event positioning
    
    // Transient data
    imageData?: HTMLImageElement; //Image loaded as data
    imageWidth?: number; //Width of source image in pixels
    imageHeight?: number; //Height of source image in pixels
    maxGID: number; // Calculated for optimization, = columns * rows -1 
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
    selected?:boolean; //True when this autotileset is selected in AutotilePicker
    //TODO: pre-render everything as transient data
};
