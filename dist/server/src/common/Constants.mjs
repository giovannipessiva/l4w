export const EVENT_STATE_VAR = "state";
export var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
    HttpStatus[HttpStatus["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
})(HttpStatus || (HttpStatus = {}));
export var HttpResponseHeader;
(function (HttpResponseHeader) {
    HttpResponseHeader["LOCATION"] = "Location";
})(HttpResponseHeader || (HttpResponseHeader = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["AUTOTILE"] = "autotile";
    ResourceType["CHAR"] = "charset";
    ResourceType["FACE"] = "faceset";
    ResourceType["FAVICON"] = "favicon";
    ResourceType["SKIN"] = "skin";
    ResourceType["TILE"] = "tile";
    ResourceType["PICTURE"] = "picture";
    ResourceType["POINTER"] = "pointer";
    ResourceType["AUTOTILESET"] = "autotileset";
    ResourceType["MAP"] = "map";
    ResourceType["TREE"] = "tree";
    ResourceType["STRING"] = "string";
    ResourceType["TILESET"] = "tileset";
    ResourceType["DIALOG"] = "dialog";
    ResourceType["GENERIC_MESSAGE"] = "generic-message";
    ResourceType["CONFIGURATION"] = "configuration";
    ResourceType["SAVE"] = "save";
})(ResourceType || (ResourceType = {}));
