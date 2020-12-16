import { ICell, IPoint, DirectionEnum, BlockDirection, SelectionAreaEnum, IRectangle, RelativeDirectionEnum } from "../../../common/Commons"
import { IMap } from "../../../common/model/Map"
import { Constant } from "./Constant"
import { Utils } from "../../../common/Utils";

/**
 * Utility methods for client-side logics
 */
export namespace ClientUtils {

    /**
     * Return the bigger rectangle which contains both input rectangles
     */
    export function mergeRectangles(r1: IRectangle, r2: IRectangle): IRectangle {
        if(r1 === undefined) {
            return r2;
        } else if(r2 === undefined) {
            return r1;
        }
        let x, y, h, w;
        if(r1.x < r2.x) {
            x = r1.x;
        } else {
            x = r2.x;
        }
        if(r1.y < r2.y) {
            y = r1.y;
        } else {
            y = r2.y;
        }
        if(r1.x + r1.w > r2.x + r2.w) {
            w = r1.x + r1.w - x;
        } else {
            w = r2.x + r2.w - x;
        }
        if(r1.y + r1.h > r2.y + r2.h) {
            h = r1.y + r1.h - y;
        } else {
            h = r2.y + r2.h - y;
        }
        return {
            x: x,
            y: y,
            w: w,
            h: h
        }
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
    
    export function getDirectionTarget(start: ICell, direction?: DirectionEnum): ICell {
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
        // (always ignore dynamic blocks in current cell)
        gid = cellToGid({ i: i, j: j }, map.width);
        let blockInCurrent = ClientUtils.getMapStaticBlock(map,gid);
        
        // Check inverse direction in target cell
        let target: ICell = getDirectionTarget({ i: i, j: j }, direction); 
        let targetGID = cellToGid(target, map.width);
        let blockInTarget: number;
        if(ignoreDynamicBlocks) {
            blockInTarget = ClientUtils.getMapStaticBlock(map,targetGID);
        } else {
            blockInTarget = ClientUtils.getMapBlocks(map,targetGID);
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
        if(staticBlocks && map.blocks !== undefined && gid < map.blocks.length) {
            block |= map.blocks[gid];
        }
        if(dynamicBlocks && map.dynamicBlocks !== undefined  && gid < map.dynamicBlocks.length) {
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

    export function getOpposedDirections(direction?: DirectionEnum): DirectionEnum {
        switch (direction) {
            case DirectionEnum.UP:
                return DirectionEnum.DOWN;
            case DirectionEnum.DOWN:
                return DirectionEnum.UP;
            case DirectionEnum.LEFT:
                return DirectionEnum.RIGHT;
            case DirectionEnum.RIGHT:
                return DirectionEnum.LEFT;
            default:
                return DirectionEnum.NONE;
        }
    }

    /**
     * Given current absolute direction and the relative direction of next movement, return next absolute direction 
     */
    export function getNextAbsoluteDirection(currentDirection: DirectionEnum, newRelativeDirection: RelativeDirectionEnum): DirectionEnum {
        if(newRelativeDirection === RelativeDirectionEnum.STRAIGHT || currentDirection === DirectionEnum.NONE) {
            return currentDirection;
        }
        let directions = [ DirectionEnum.UP, DirectionEnum.RIGHT, DirectionEnum.DOWN, DirectionEnum.LEFT ];
        let index = 0;
        for(let tmp of directions) {
            if(currentDirection === tmp) {
                break;
            }
            index++;
        }
        switch(newRelativeDirection) {
            case RelativeDirectionEnum.LEFT:
                index--;
                break;
            case RelativeDirectionEnum.RIGHT:
                index++;
                break;
            case RelativeDirectionEnum.BACK:
                index+=2;
                break;
        }
        if(index < 0) {
            index = directions.length - 1;
        } else if(index >= directions.length) {
            index -= directions.length;
        }
        return directions[index];
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

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     */
    export function getRandomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export function normalizeZIndex(zindex: number | undefined): number {
        if(!Utils.isEmpty(zindex) && !Number.isNaN(zindex!) && zindex! >= Constant.ZIndex.LV0 && zindex! <= Constant.ZIndex.LV4) {
            return zindex!;
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