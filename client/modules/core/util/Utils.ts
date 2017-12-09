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
        }
        return false;
    }

    export function now() {
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

    export function gidToCell(gid: number, width: number): ICell {
        return {
            i: gid % width,
            j: Math.floor(gid / width)
        };
    }

    export function cellToGid(cell: ICell, width: number): number {
        return cell.i + cell.j * width;
    }

    export function isBlocked(block: number, blockDirection: number): boolean {
        return (block & blockDirection) === blockDirection;
    }

    export function getBlock(up: boolean, down: boolean, left: boolean, right: boolean): number {
        let block: number = 0;
        block |= up ? BlockDirection.UP : 0;
        block |= down ? BlockDirection.DOWN : 0;
        block |= left ? BlockDirection.LEFT : 0;
        block |= right ? BlockDirection.RIGHT : 0;
        return block;
    }

    export function isDirectionsOpposed(d1: DirectionEnum, d2: DirectionEnum) {
        return getOpposedDirections(d1) === d2;
    }

    export function getOpposedDirections(d: DirectionEnum): DirectionEnum {
        switch (d) {
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
                direction = DirectionEnum.NONE;
            }
        }
        return direction;
    }
    
    /** Move a cell in the direction */
    export function moveToDirection(cell: ICell, direction: DirectionEnum) {
        switch(direction) {
            case DirectionEnum.UP: cell.j -= 1; break;
            case DirectionEnum.DOWN: cell.j += 1; break;
            case DirectionEnum.LEFT: cell.i -= 1; break;
            case DirectionEnum.RIGHT: cell.i += 1; break;
        }
        return cell;
    }

    export function getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }
    
    export function isOnTop(tileGID: number, map: IMap): boolean {
        let isOnTop = 0;
        if(!Utils.isEmpty(map.tileset.onTop) &&  !Utils.isEmpty(map.tileset.onTop[tileGID]) && !Number.isNaN(map.tileset.onTop[tileGID])) {
            isOnTop = map.tileset.onTop[tileGID];
        }
        return isOnTop > Constant.ZIndex.MIN;
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
        let name = "FREE!";
        if(isBlocked(block, BlockDirection.UP)) {
            name = getDirectionName(DirectionEnum.UP);    
        }
        if(isBlocked(block, BlockDirection.DOWN)) {
            name += getDirectionName(DirectionEnum.DOWN);    
        }
        if(isBlocked(block, BlockDirection.LEFT)) {
            name += getDirectionName(DirectionEnum.LEFT);    
        }
        if(isBlocked(block, BlockDirection.RIGHT)) {
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