///<reference path="../model/Commons.ts" />

/**
 * Module for generic utility methods
 */
namespace Utils {

    export function isEmpty(obj: any): boolean {
        if (obj === null || typeof obj === "undefined") {
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
        console.assert(Utils.isEmpty(test), "empty ES6 map");
        (<Map<string,string>> test).set("a","a");
        console.assert(!Utils.isEmpty(test), "not empty ES6 map");
        (<Map<string,string>> test).delete("a");
        console.assert(Utils.isEmpty(test), "empty ES6 map (deleted key)");
        
        // array
        test = []
        console.assert(Utils.isEmpty(test), "empty array");
        test[0] = 1;
        console.assert(!Utils.isEmpty(test), "not empty array");
        
        // Array
        test = new Array<string>();
        console.assert(Utils.isEmpty(test), "empty Array");
        test = (<Array<string>> test).push("1");
        console.assert(!Utils.isEmpty(test), "not empty Array");
        
        // string
        test = "";
        console.assert(Utils.isEmpty(test), "empty string");
        test = "a"
        console.assert(!Utils.isEmpty(test), "not empty string");
       
        // Object
        test = new Object();
        console.assert(Utils.isEmpty(test), "empty Object");
        test["a"] = 1;
        console.assert(!Utils.isEmpty(test), "not empty Object");
        delete test["a"];
        console.assert(Utils.isEmpty(test), "empty Object (deleted property)");
        
        // {}
        test = {};
        console.assert(Utils.isEmpty(test), "empty {}");
        test["a"] = 1;
        console.assert(!Utils.isEmpty(test), "not empty {}");
        delete test["a"];
        console.assert(Utils.isEmpty(test), "empty {} (deleted property)");
        
        // basic types
        console.assert(!Utils.isEmpty(true), "not empty boolean (true)");
        console.assert(!Utils.isEmpty(false), "not empty boolean (false)");
        console.assert(!Utils.isEmpty(0), "not empty number");
        console.assert(!Utils.isEmpty(0.0), "not empty float");
    }

    export function now(): number {
        return (new Date()).getTime();
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

    export function resetSelect(select: HTMLSelectElement) {
        for(let i = select.length - 1; i >= 0; i--) {
            select.remove(i);
        }
    }

    export function gidToCell(gid: number, width: number): ICell {
        return {
            i: gid % width,
            j: Math.floor(gid / width)
        };
    }

    export function cellToGid(cell: ICell, width: number): number {
        return cell.i + cell.j * width;
    }
    
    export function getDirectionTarget(start: ICell, direction: DirectionEnum) {
        let target: ICell = {
            i: start.i,
            j: start.j
        }; 
        switch (direction) {
            case DirectionEnum.UP:
                target.j -= 1;
                break;
            case DirectionEnum.DOWN:
                target.j += 1;
                break;
            case DirectionEnum.LEFT:
                target.i -= 1;
                break;
            case DirectionEnum.RIGHT:
                target.i += 1;
                break;
            case DirectionEnum.NONE:
                break;
            default:
                console.error("Unexpected case: " + direction);
        };
        return target;
    }

    /** check if block permit movement to directions */
    export function isBlockDirectionBlocked(block: number, blockDirection: number): boolean {
        return (block & blockDirection) === blockDirection && blockDirection !== BlockDirection.NONE;
    }
    
    /** check if block permit movement to directions */
    export function isDirectionEnumBlocked(block: number, directionEnum: DirectionEnum): boolean {
        let blockDirection = BlockDirection.NONE;
        switch(directionEnum) {
            case DirectionEnum.UP: blockDirection = BlockDirection.UP; break;
            case DirectionEnum.DOWN: blockDirection = BlockDirection.DOWN; break;
            case DirectionEnum.LEFT: blockDirection = BlockDirection.LEFT; break;
            case DirectionEnum.RIGHT: blockDirection = BlockDirection.RIGHT; break;
        }
        return isBlockDirectionBlocked(block, blockDirection);
    }
    
    /** check if movement from (i,j) to direction is blocked */
    export function isMovementBlocked(map: IMap, i: number, j: number, direction: DirectionEnum, ignoreDynamicBlocks: boolean = false): boolean {
        let gid: number;
        
        // Check direction in current cell
        gid = cellToGid({ i: i, j: j }, map.width);
        let blockInCurrent: number;
        if(ignoreDynamicBlocks) {
            blockInCurrent = Utils.getMapStaticBlock(map,gid);
        } else {
            blockInCurrent = Utils.getMapBlocks(map,gid);
        }
        
        // Check inverse direction in target cell
        let target: ICell = getDirectionTarget({ i: i, j: j }, direction); 
        let targetGID = cellToGid(target, map.width);
        let blockInTarget: number;
        if(ignoreDynamicBlocks) {
            blockInTarget = Utils.getMapStaticBlock(map,targetGID);
        } else {
            blockInTarget = Utils.getMapBlocks(map,targetGID);
        }
        // Check both movements from start to target, and from target to start
        return isDirectionEnumBlocked(blockInCurrent, direction) || isDirectionEnumBlocked(blockInTarget, getOpposedDirections(direction));
    }

    export function getBlock(up: boolean, down: boolean, left: boolean, right: boolean): number {
        let block: number = 0;
        block |= up ? BlockDirection.UP : 0;
        block |= down ? BlockDirection.DOWN : 0;
        block |= left ? BlockDirection.LEFT : 0;
        block |= right ? BlockDirection.RIGHT : 0;
        return block;
    }
        
    /** return block value for static and dynamic blocks on gid */
    function getMapBlocksSelective(map: IMap, gid: number, staticBlocks: boolean, dynamicBlocks: boolean): number {
        let block: number = BlockDirection.NONE;
        if(staticBlocks && !Utils.isEmpty(map.blocks) && gid < map.blocks.length) {
            block |= map.blocks[gid];
        }
        if(dynamicBlocks && !Utils.isEmpty(map.dynamicBlocks) && gid < map.dynamicBlocks.length) {
            block |= map.dynamicBlocks[gid];
        }
        return block;
    }
    
    /** return block value for static and dynamic blocks on gid */
    export function getMapBlocks(map: IMap, gid: number): number {
        return getMapBlocksSelective(map, gid, true, true);
    }
    
    /** return block value for only static blocks (ignore events) */
    export function getMapStaticBlock(map: IMap, gid: number): number {
        return getMapBlocksSelective(map, gid, true, false);
    }
    
    /** return block value for only dynamic blocks (ignore environment) */
    export function getMapDynamicBlock(map: IMap, gid: number): number {
        return getMapBlocksSelective(map, gid, false, true);
    }

    export function isDirectionsOpposed(d1: DirectionEnum, d2: DirectionEnum) {
        return getOpposedDirections(d1) === d2;
    }

    export function getOpposedDirections(direction: DirectionEnum): DirectionEnum {
        switch (direction) {
            case DirectionEnum.UP: return DirectionEnum.DOWN;
            case DirectionEnum.DOWN: return DirectionEnum.UP;
            case DirectionEnum.LEFT: return DirectionEnum.RIGHT;
            case DirectionEnum.RIGHT: return DirectionEnum.LEFT;
        }
        return DirectionEnum.NONE;
    }

    /** Return the direction from start to target */
    export function getDirection(target: ICell, start: ICell) {
        let distI = target.i - start.i;
        let distJ = target.j - start.j;
        let direction: DirectionEnum;
        if (Math.abs(distI) > Math.abs(distJ)) {
            if (distI > 0) {
                direction = DirectionEnum.RIGHT;
            } else {
                direction = DirectionEnum.LEFT;
            }
        } else {
            if (distJ > 0) {
                direction = DirectionEnum.DOWN;
            } else if (distJ < 0) {
                direction = DirectionEnum.UP;
            } else {
                // target === start
                direction = DirectionEnum.NONE;
            }
        }
        return direction;
    }
    
    /** Move a cell in the direction */
    export function moveToDirection(cell: ICell, direction: DirectionEnum): ICell {
        let target = {
            i: cell.i,
            j: cell.j
        };
        switch(direction) {
            case DirectionEnum.UP: target.j -= 1; break;
            case DirectionEnum.DOWN: target.j += 1; break;
            case DirectionEnum.LEFT: target.i -= 1; break;
            case DirectionEnum.RIGHT: target.i += 1; break;
        }
        return target;
    }
    
    export function getCellDistance(s1: ICell, s2: ICell): number {
        let di: number = Math.abs(s1.i - s2.i);
        let dj: number = Math.abs(s1.j - s2.j);
        return di + dj;        
    }
    
    export function getPointDistance(s1: IPoint, s2: IPoint): number {
        let dx: number = Math.abs(s1.x - s2.x);
        let dy: number = Math.abs(s1.y - s2.y);
        return dx + dy;        
    }

    export function getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    export function normalizeZIndex(zindex: number): number {
        if(!Utils.isEmpty(zindex) && !Number.isNaN(zindex) && zindex >= Constant.ZIndex.LV0 && zindex <= Constant.ZIndex.LV4) {
            return zindex;
        }
        return Constant.ZIndex.LV0;
    }

    export function getDirectionName(direction: DirectionEnum): string {
        switch (direction) {
            case DirectionEnum.UP: return "\u02C4 up";
            case DirectionEnum.DOWN: return "\u02C5 down";
            case DirectionEnum.LEFT: return "\u02C2 left";
            case DirectionEnum.RIGHT: return "\u02C3 right";
            default: return "  none";
        };
    }
    
    export function getBlockName(block: number): string {
        let name = "free";
        if(isBlockDirectionBlocked(block, BlockDirection.UP)) {
            name = getDirectionName(DirectionEnum.UP);    
        }
        if(isBlockDirectionBlocked(block, BlockDirection.DOWN)) {
            name += getDirectionName(DirectionEnum.DOWN);    
        }
        if(isBlockDirectionBlocked(block, BlockDirection.LEFT)) {
            name += getDirectionName(DirectionEnum.LEFT);    
        }
        if(isBlockDirectionBlocked(block, BlockDirection.RIGHT)) {
            name += getDirectionName(DirectionEnum.RIGHT);    
        }
        return name;
    }
    
    export function getSelectionAreaName(area: SelectionAreaEnum): string {
        switch (area) {
            case SelectionAreaEnum.TOP: return "\u2B12 up";
            case SelectionAreaEnum.BOTTOM: return "\u2B13 down";
            case SelectionAreaEnum.LEFT: return "\u25E7 left";
            case SelectionAreaEnum.RIGHT: return "\u25E8 right";
            case SelectionAreaEnum.CENTER: return "\u25A3 center";
            default: return "  none";
        };
    }
}