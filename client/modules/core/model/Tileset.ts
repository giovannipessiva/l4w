interface ITileset {
    firstgid: number; //GID corresponding to the first tile in the set
    image: string; //Image used for tiles in this set
    name: string; //Name given to this tileset
    imagewidth: number; //Width of source image in pixels
    imageheight: number; //Height of source image in pixels
    autotiles?: [IAutoTile]; //Array of Terrains (optional)
    block: [number]; //Array of codes representing the block attributes
    over: [boolean]; //Array of flag for over-the-event positioning
};

interface IAutoTile {
    name: string; //Name of terrain
    tile: number; //Local ID of tile representing terrain
};
