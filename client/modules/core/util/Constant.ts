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
        static DARKBLUE = "darkblue";
        static GREEN = "green";
    }
    
    export class RequestType {
        static GET = "GET";
        static POST = "POST";
    }
    
    export class MimeType {
        static JSON = "application/json";
    }
    
    export enum MapLayer {
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
    
    export class ZIndex {
        public static MIN = 0;
        public static MAX = 4;
    }
    
    export const enum Bool {
        NO,
        YES
    }
}