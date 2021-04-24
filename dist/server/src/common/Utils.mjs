export var Utils;
(function (Utils) {
    function isEmpty(obj) {
        if (obj === undefined || obj === null || typeof obj === "undefined") {
            return true;
        }
        else if (typeof obj === "string") {
            return obj === "";
        }
        else if (typeof obj === "object" && "size" in obj) {
            return obj.size === 0;
        }
        else if (obj.constructor === Array || obj.constructor === String) {
            return obj.length === 0;
        }
        else if (obj.constructor === Object && Object.keys(obj).length === 0) {
            return true;
        }
        return false;
    }
    Utils.isEmpty = isEmpty;
    function unitTestIsEmpty() {
        let test = new Map();
        console.assert(isEmpty(test), "empty ES6 map");
        test.set("a", "a");
        console.assert(!isEmpty(test), "not empty ES6 map");
        test.delete("a");
        console.assert(isEmpty(test), "empty ES6 map (deleted key)");
        test = [];
        console.assert(isEmpty(test), "empty array");
        test[0] = 1;
        console.assert(!isEmpty(test), "not empty array");
        test = new Array();
        console.assert(isEmpty(test), "empty Array");
        test = test.push("1");
        console.assert(!isEmpty(test), "not empty Array");
        test = "";
        console.assert(isEmpty(test), "empty string");
        test = "a";
        console.assert(!isEmpty(test), "not empty string");
        test = new Object();
        console.assert(isEmpty(test), "empty Object");
        test["a"] = 1;
        console.assert(!isEmpty(test), "not empty Object");
        delete test["a"];
        console.assert(isEmpty(test), "empty Object (deleted property)");
        test = {};
        console.assert(isEmpty(test), "empty {}");
        test["a"] = 1;
        console.assert(!isEmpty(test), "not empty {}");
        delete test["a"];
        console.assert(isEmpty(test), "empty {} (deleted property)");
        console.assert(!isEmpty(true), "not empty boolean (true)");
        console.assert(!isEmpty(false), "not empty boolean (false)");
        console.assert(!isEmpty(0), "not empty number");
        console.assert(!isEmpty(0.0), "not empty float");
    }
    Utils.unitTestIsEmpty = unitTestIsEmpty;
    function mergeMaps(primary, secondary) {
        var newMap = new Map();
        function addToNewMap(value, index, map) {
            newMap.set(index, value);
        }
        secondary.forEach(addToNewMap);
        primary.forEach(addToNewMap);
        return newMap;
    }
    Utils.mergeMaps = mergeMaps;
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    Utils.isNumeric = isNumeric;
    Utils.convertStringToEnum = function (enumObj, value) {
        return enumObj[Object.keys(enumObj).filter(k => enumObj[k] === value)[0]];
    };
    const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
    function getRandomString(length) {
        if (length === undefined) {
            length = 8;
        }
        return [...Array(length)].map(_ => CHARS[~~(Math.random() * CHARS.length)]).join("");
    }
    Utils.getRandomString = getRandomString;
    function now() {
        return (new Date()).getTime();
    }
    Utils.now = now;
})(Utils || (Utils = {}));
export const enumFromValue = (_enum, val) => {
    const enumName = Object.keys(_enum).find(k => _enum[k] === val);
    if (!enumName || val === undefined) {
        return undefined;
    }
    else {
        return _enum[enumName];
    }
};
