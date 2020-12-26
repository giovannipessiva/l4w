export enum HttpStatus {
    OK = 200,
    NO_CONTENT = 204,
    MOVED_PERMANENTLY = 301,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    REQUEST_TOO_LONG = 413,
    IM_A_TEAPOT = 418,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501
}

export enum HttpResponseHeader {
    LOCATION = "Location"
}

export enum ResourceType {
    // Assets (graphic/audio resources)
    AUTOTILE = "autotile",
    CHAR = "charset",
    FACE = "faceset",
    FAVICON = "favicon",
    SKIN = "skin",
    TILE = "tile",
    PICTURE = "picture",
    POINTER = "pointer",

    // Static data (game data that cannot change during gameplay)
    AUTOTILESET = "autotileset",
    MAP = "map",
    TREE = "tree",
    STRING = "string",
    TILESET = "tileset",
    DIALOG = "dialog",
    GENERIC_MESSAGE = "generic-message",
    CONFIGURATION = "configuration",

    // Dynamic data (user-bound data that can change during gameplay)
    SAVE = "save"
}

export const enum ScreenSize {
    ADAPTIVE = "apt",
    NATURAL = "nat",
    NATURAL_X2 = "nat2"
}

export const enum Tree {
    MAPS = "maps"
}