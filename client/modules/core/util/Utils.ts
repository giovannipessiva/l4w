///<reference path="../../interfaces/collections.es6.d.ts" />

/**
 * Module for generic utility methods
 */
module Utils {

    export function isEmpty(obj: any): boolean {
        if (obj === null || typeof obj === "undefined") {
            return true;
        } else if (typeof obj === "string") {
            return obj === "";
        } else if (typeof obj === "object" && "size" in obj) {
            return obj.size === 0;
        } else if (obj.constructor === Array || obj.constructor === String) {
            return obj.length === 0;
        }
        return false;
    }
    
    export function mergeMaps<T>(primary: Map<string, T>, secondary: Map<string, T>): Map<string, T> {
        var newMap: Map<string, T> = new Map<string, T>();
        function addToNewMap(value: T, index: string, map: Map<string, T>) {
            newMap.set(index, value);
        }
        secondary.forEach(addToNewMap);
        primary.forEach(addToNewMap);
        return newMap;
    }
    
    export function gIDToPoint(gid: number, width: number): IPoint {
        return {
            x: gid % width,
            y: Math.floor(gid / width)
        };
    }
}