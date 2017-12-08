/**
 * Module for constants values
 */
namespace Constant {

    export const DOUBLE_PI = Math.PI * 2;

    export class Color {
        static YELLOW = "yellow";
        static RED = "red";
        static WHITE = "white";
        static GREY = "grey";
        static BLACK = "black";
        static AQUA = "aqua";
    }
    
    export class RequestType {
        static GET = "GET";
        static POST = "POST";
    }
    
    export class MimeType {
        static JSON = "application/json";
    }
    
    export const enum MapLayer {
        LOW,
        MID,
        TOP,
        EVENTS
    }
    
    export enum EditMode {
        APPLY,
        ERASE
    }
    
    export enum TileEditMode {
        BLOCKS,
        ONTOP
    }
    
    export const enum Bool {
        NO,
        YES
    }
}