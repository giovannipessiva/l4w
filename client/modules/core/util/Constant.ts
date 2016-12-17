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
    }
    
    export class RequestType {
        static GET = "GET";
        static POST = "POST";
    }

    //Deprecated, use DirectionEnum
    export const enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        NONE
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
}