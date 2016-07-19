/**
 * Module fon constants values
 */
namespace Constant {

    export var DOUBLE_PI = Math.PI * 2;

    export class Color {
        static YELLOW = "yellow";
        static RED = "red";
        static WHITE = "white";
        static GREY = "grey";
        static BLACK = "black";
    }

    export enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT
    }
    
    export enum MapLayer {
        LOW,
        MID,
        TOP,
        EVENTS
    }
}