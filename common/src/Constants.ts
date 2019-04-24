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
    INTERNAL_SERVER_ERROR = 500
}

export enum HttpResponseHeader {
    LOCATION = "Location"
}

export const enum ResourceType {
    CHAR = "charset",
    FACE = "faceset",
    SKIN = "skin",
    TILE = "tile",
    MAP = "map",
    SAVE = "save",
    STRING = "string",
    DIALOG = "dialog",
    GENERIC_MESSAGE = "generic-message",
    TILESET = "tileset",
    PROPERTIES = "properties",
    PICTURE = "picture"
}
