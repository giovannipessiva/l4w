/**
 * Module for constants values
 */
namespace Constant {

    export const DOUBLE_PI = Math.PI * 2;

    /*
    //TODO usa enum ts 2.6
    
    export enum Color {
        YELLOW = "yellow",
        RED = "red",
        WHITE = "white",
        GREY = "grey",
        BLACK = "black"
    }
    
    export enum RequestType {
        GET = "GET",
        POST = "POST"
    }
    */
    
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
        NONE,
        BLOCKS
    }
}