//Tileset core model (only persistent data)
interface ITilesetData {
    firstgid: number; //GID corresponding to the first tile in the set
    image: string; //Image used for tiles in this set (also used as key)
    name: string; //Name given to this tileset
    imagewidth: number; //Width of source image in pixels
    imageheight: number; //Height of source image in pixels
    autotiles?: IAutoTile[]; //Array of Terrains (optional)
    blocks: number[]; //Array of codes representing the block attributes
    onTop: number[]; //Array of z-index for over-the-event positioning
};

//Tileset extended model (include transient data)
interface ITileset extends ITilesetData {
    imageData?: HTMLImageElement; //Image loaded as data
};

interface IAutoTile {
    name: string; //Name of terrain
    tile: number; //Local ID of tile representing terrain
};
