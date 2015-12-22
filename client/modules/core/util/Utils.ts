///<reference path="../../interfaces/collections.es6.d.ts" />

/**
 * Module for generic utility methods
 */
module Utils {

    export function isEmpty<K, V>(map: Map<K, V>): boolean {
//        return isUndefined(map) || (map.size === 0);
        return isUndefined(map); //FIXME Map.size doesnt compile
    }

    export function isUndefined(obj: any): boolean {
        return (obj === null) || (typeof obj === "undefined");
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
}