export namespace Utils {

    export function isEmpty(obj: any): boolean {
        if (obj === undefined || obj === null || typeof obj === "undefined") {
            return true;
        } else if (typeof obj === "string") {
            return obj === "";
        } else if (typeof obj === "object" && "size" in obj) {
            return obj.size === 0;
        } else if (obj.constructor === Array || obj.constructor === String) {
            return obj.length === 0;
        } else if(obj.constructor === Object && Object.keys(obj).length === 0) {
            return true;
        }
        return false;
    }

    /**
     * Unit test for the Utils.isEmpty method
     */
    export function unitTestIsEmpty(): void {
        // ES6 map
        let test: any = new Map<string,string>();
        console.assert(isEmpty(test), "empty ES6 map");
        (<Map<string,string>> test).set("a","a");
        console.assert(!isEmpty(test), "not empty ES6 map");
        (<Map<string,string>> test).delete("a");
        console.assert(isEmpty(test), "empty ES6 map (deleted key)");
        
        // array
        test = []
        console.assert(isEmpty(test), "empty array");
        test[0] = 1;
        console.assert(!isEmpty(test), "not empty array");
        
        // Array
        test = new Array<string>();
        console.assert(isEmpty(test), "empty Array");
        test = (<Array<string>> test).push("1");
        console.assert(!isEmpty(test), "not empty Array");
        
        // string
        test = "";
        console.assert(isEmpty(test), "empty string");
        test = "a"
        console.assert(!isEmpty(test), "not empty string");
       
        // Object
        test = new Object();
        console.assert(isEmpty(test), "empty Object");
        test["a"] = 1;
        console.assert(!isEmpty(test), "not empty Object");
        delete test["a"];
        console.assert(isEmpty(test), "empty Object (deleted property)");
        
        // {}
        test = {};
        console.assert(isEmpty(test), "empty {}");
        test["a"] = 1;
        console.assert(!isEmpty(test), "not empty {}");
        delete test["a"];
        console.assert(isEmpty(test), "empty {} (deleted property)");
        
        // basic types
        console.assert(!isEmpty(true), "not empty boolean (true)");
        console.assert(!isEmpty(false), "not empty boolean (false)");
        console.assert(!isEmpty(0), "not empty number");
        console.assert(!isEmpty(0.0), "not empty float");
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

    export function isNumeric(n: any): boolean {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    export const convertStringToEnum = function <T>(enumObj: any, value: string): T {
        return enumObj[Object.keys(enumObj).filter(k => enumObj[k] === value)[0]];
    }

    const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
    export function getRandomString(length?: number): string {
        if(length === undefined) {
            length = 8;
        }
        return [...Array(length)].map(_ => CHARS[~~(Math.random()*CHARS.length)]).join("");
    }

    export function now(): number {
        return (new Date()).getTime();
    }
}
