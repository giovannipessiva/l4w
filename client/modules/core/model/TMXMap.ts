/**
 * TypeScript data structure definition for TMX JSON map
 * https://github.com/bjorn/tiled/wiki/JSON-Map-Format
 */

interface TMXMap {
    width: number; //Number of tile columns
    height: number; //Number of tile rows
    tilewidth: number; //Map grid width.
    tileheight: number; //Map grid height.
    orientation: string; //Orthogonal, isometric, or staggered
    layers: [TMXLayer]; //Array of Layers 
    tilesets: [TMXTileset]; //Array of Tilesets 
    backgroundcolor?: string; //Hex-formatted color (#RRGGBB) (Optional)
    renderorder?: string; //Rendering direction (orthogonal maps only)
    properties: Object; //String key-value pairs
    nextobjectid: number; //Auto-increments for each placed 
};

interface TMXLayer {
    width: number; //Column count. Same as map width in Tiled Qt.
    height: number; //Row count. Same as map height in Tiled Qt.
    name: string; //Name assigned to this layer
    type: string; //"tilelayer", "objectgroup", or "imagelayer"
    visible: boolean; //Whether layer is shown or hidden in editor
    x: number; //Horizontal layer offset. Always 0 in Tiled Qt.
    y: number; //Vertical layer offset. Always 0 in Tiled Qt.
    data?: [number]; //Array of GIDs. tilelayer only.
    objects?: [TMXObject]; //Array of Objects. objectgroup only.
    properties: Object; //string key-value pairs.
    opacity: number; //Value between 0 and 1
    draworder?: string; //"topdown" (default) or "index". objectgroup only.
};

interface TMXObject {
    id: number; //Incremental id - unique across all objects
    width: number; //Width in pixels. Ignored if using a gid.
    height: number; //Height in pixels. Ignored if using a gid.
    name: string; //String assigned to name field in editor
    type: string; //String assigned to type field in editor
    properties: Object; //String key-value pairs
    visible: boolean; //Whether object is shown in editor.
    x: number; //x coordinate in pixels
    y: number; //y coordinate in pixels
    rotation: number; //Angle in degrees clockwise
    gid: number; //GID, only if object comes from a Tilemap
};

interface TMXTileset {
    firstgid: number; //GID corresponding to the first tile in the set
    image: string; //Image used for tiles in this set
    name: string; //Name given to this tileset
    tilewidth: number; //Maximum width of tiles in this set
    tileheight: number; //Maximum height of tiles in this set
    imagewidth: number; //Width of source image in pixels
    imageheight: number; //Height of source image in pixels
    properties: Object; //String key-value pairs
    margin: number; //Buffer between image edge and first tile (pixels)
    spacing: number; //Spacing between adjacent tiles in image (pixels)
    tileproperties: Object; //Per-tile properties, indexed by gid as string
    terrains?: [TMXTerrain]; //Array of Terrains (optional)
    tiles?: [{ [k: string] : TMXTile }]; //Gid-indexed Tiles (optional)
};

interface TMXTerrain {
    name: string; //Name of terrain
    tile: number; //Local ID of tile representing terrain
};

interface TMXTile {
    terrain: [number]; //Index of terrain for each corner of tile
};
