import { ICoordinatesCallback, ICellCallback } from "../util/Commons"
import { Constant } from "../util/Constant"
import { Resource } from "../util/Resource"
import { AbstractGrid } from "../AbstractGrid"
import { ClientUtils } from "../util/Utils"
import { IEvent } from "../../../common/model/Event"
import { ICell, ActionTriggerEnum, BlockDirection, DirectionEnum, RotationEnum } from "../../../common/model/Commons"
import { IMap } from "../../../common/model/Map"
import { CharacterManager } from "../manager/CharacterManager"
import { MapManager } from "../manager/MapManager"
import { Condition } from "../events/Conditions"
import { DynamicScene } from "../../game/DynamicScene"
import { ResourceType } from "../../../common/Constants";
import { Utils } from "../../../common/Utils"

/**
 * Module to handle events
 */
export namespace EventManager {
    
    const NO_STATE = -1;
    
    export function update(event: IEvent, scene: DynamicScene, hero: IEvent, actionCell: ICell | undefined, time: number, pauseTimeOffset: number = 0): number | undefined {
        if (!Utils.isEmpty(event.movementStartTime)) {
            // If the Character was moving, and there has been a pause,
            // correct the movementStartTime
            event.movementStartTime! += pauseTimeOffset;
        }
        if(!Utils.isEmpty(event.states)) {
            // Check if there are activable states; the state with higher index wins, and get activated
            let newState: number = NO_STATE;
            for(let s = event.states.length - 1; s >= 0; s--) {
                // Check activation action and condition
                if(isStateActivable(event, s)) {
                    newState = s;
                    break;
                }
            }
            event.currentState = newState;

            if(event === hero) {
                // For the hero, don't trigger actions
                return;    
            }
            // Check if an action has been triggered
            if(isActionTriggered(event, event.currentState, hero, actionCell)) {
                return event.currentState;
            }
        }
        return;
    }
    
    function isStateActivable(event: IEvent, s: number): boolean {
        let condition = event.states[s].condition;
        if(!(condition in Condition)) {
            console.error("Condition not found: \"" + condition + "\", on event: " + event.name);
            return false;    
        }
        return Condition[condition](event);
    }
    
    function isActionTriggered(event: IEvent, s: number, hero: IEvent, actionCell?: ICell) {
        switch(event.states[s].trigger) {
            case ActionTriggerEnum.CLICK:
                // If action is not on the event, exit
                if(actionCell === undefined || actionCell.i !== event.i || actionCell.j !== event.j) {
                    return false;
                }
                // else, continue as "TOUCH" case
            case ActionTriggerEnum.TOUCH:
                let i_diff = Math.abs(event.i - hero.i);
                let j_diff = Math.abs(event.j - hero.j);
                return (i_diff === 0 && j_diff <= 1) || (i_diff <= 1 && j_diff === 0);
            case ActionTriggerEnum.OVER:
                return event.i === hero.i && event.j === hero.j;                     
            case ActionTriggerEnum.AUTO:
                return true;
            default:
                console.error("Unexpected case: " + event.states[s].trigger);
                return false;
        }
    }
    
    export function startMovement(grid: AbstractGrid, e: IEvent, i: number, j: number): boolean {
        e.newTarget = grid.mapCellToCanvas({
            i: i,
            j: j
        });
        return true;
    }
    
    export function stopMovement(e: IEvent) {
        e.path = undefined;
        e.movementStartTime = undefined;
        e.movementDirection = undefined;
        e.target = undefined;
    }
    
    /**
     * Move max 1 step at a time, return true if a step has been made
     */
    export function manageMovements(map: IMap, grid: AbstractGrid, e: IEvent, onCoordinatesChange: ICoordinatesCallback, onCellChange: ICoordinatesCallback, onTargetReached: ICellCallback, timeToMove: number = 0): boolean {
        let stepCompleted: boolean = false;
        // If I am moving 
        if (!Utils.isEmpty(e.movementStartTime)) {

            if (timeToMove === 0) {
                // Check how much time do I have
                timeToMove = Utils.now() - e.movementStartTime!;
            }

            if(e.target === undefined) {
                console.error("No target set for movement");
                return true;
            }
            let target: ICell = {
                i: Math.floor(e.target.x / grid.cellW),
                j: Math.floor(e.target.y / grid.cellH)
            };

            let direction;
            // Check if target can be reached
            let targetGui = ClientUtils.cellToGid(target, map.width);
            let cellStaticBlock = ClientUtils.getMapStaticBlock(map,targetGui);
            let cellDynamicBlock = ClientUtils.getMapDynamicBlock(map,targetGui);
            if((ClientUtils.isBlockDirectionBlocked(cellStaticBlock, BlockDirection.ALL) && !ClientUtils.isBlockDirectionBlocked(cellDynamicBlock, BlockDirection.ALL))
                || (targetGui < 0 || targetGui >= map.width * map.height)) {
                // Target is blocked and does not contain and event, or it is invalid, so no movement needed
                direction = DirectionEnum.NONE;
            } else {
                // Check if I am currently moving a step
                direction = e.movementDirection;
                if (Utils.isEmpty(direction) || direction === DirectionEnum.NONE) {
                    // Decide next step
                    try {
                        direction = MapManager.pathFinder(map, e, target);
                    } catch(e) {
                        console.error(e);    
                    }
                    let stepTarget = ClientUtils.getDirectionTarget(e, direction);
                    // Check if target contains an event
                    let stepTargetGID = ClientUtils.cellToGid(stepTarget, map.width);
                    let stepTargetBlock = ClientUtils.getMapDynamicBlock(map,stepTargetGID);
                    if(ClientUtils.isDirectionEnumBlocked(stepTargetBlock, ClientUtils.getOpposedDirections(direction))) {
                        // I cant go further, stop now
                        direction = DirectionEnum.NONE;
                        if(stepTargetGID === targetGui) {
                            // Reached target
                            onTargetReached(target);
                        }
                    }
                }
            }
            let movementX = 0;
            let movementY = 0;
            let absMovement;
            switch (direction) {
                case DirectionEnum.LEFT:
                    // Move horizontally (max 1 cell)
                    movementX = Math.min(grid.cellW, Math.floor(getMSpeed(e) * timeToMove));
                    absMovement = movementX;
                    movementX *= -1;
                    break;
                case DirectionEnum.RIGHT:
                    // Move horizontally (max 1 cell)
                    movementX = Math.min(grid.cellW, Math.floor(getMSpeed(e) * timeToMove));
                    absMovement = movementX;
                    break;
                case DirectionEnum.UP:
                    // Move vertically (max 1 cell)
                    movementY = Math.min(grid.cellH, Math.floor(getMSpeed(e) * timeToMove));
                    absMovement = movementY;
                    movementY *= -1;
                    break;
                case DirectionEnum.DOWN:
                    // Move vertically (max 1 cell)
                    movementY = Math.min(grid.cellH, Math.floor(getMSpeed(e) * timeToMove));
                    absMovement = movementY;
                    break;
                case DirectionEnum.NONE:
                    // Stop movement
                    stopMovement(e);
                    onTargetReached(target);
                    break;
            };

            if (direction !== DirectionEnum.NONE) {
                // Move the event
                if(e.states[e.currentState] !== undefined) {
                    e.states[e.currentState].direction = direction;
                }
                e.movementDirection = direction;
                e.position = {
                    x: e.i * grid.cellW + movementX,
                    y: e.j * grid.cellH + movementY
                };
                onCoordinatesChange(movementX, movementY);

                // If I have finished one step
                if (absMovement === grid.cellW) {
                    stepCompleted = true;
                    e.movementDirection = undefined;
                    e.movementStartTime = Utils.now();
                    // Find out how much time is left after the movement
                    timeToMove -= Math.floor(absMovement / getMSpeed(e));

                    // Update position
                    let cell = grid.mapCanvasToCell(e.position);
                    e.i = cell.i;
                    e.j = cell.j;
                    onCellChange(movementX, movementY);
                    
                    // Check If I am arrived, or a new target has been requested
                    if (!Utils.isEmpty(e.newTarget) || (e.position.x === e.target.x && e.position.y === e.target.y)) {
                        // Reset current movement
                        stopMovement(e);
                    }
                }
            }
        }

        // If I can start a new movement
        if (!Utils.isEmpty(e.newTarget) && Utils.isEmpty(e.movementStartTime)) {
            // Configure new movement
            e.target = e.newTarget;
            e.newTarget = undefined;
            e.movementStartTime = Utils.now();

            // If I have some time left, use it to move
            stepCompleted = stepCompleted || manageMovements(map, grid, e, onCoordinatesChange, onCellChange, onTargetReached, timeToMove);
        }
        return stepCompleted;
    }
    
    function getMSpeed(e: IEvent): number {
        let state = getState(e);
        if(state !== undefined) {
            let mSpeed = state.mSpeed;
            if (!Utils.isEmpty(mSpeed)) {
                return mSpeed!;
            }
        }
        return Constant.MEDIUM_MSPEED;
    }

    export function addDirectionToPath(e: IEvent, direction: DirectionEnum, stackLimit?: number) {
        if (e.path === undefined) {
            e.path = [];
        }
        // Salva solo i cambi di direzione
        if (e.path[e.path.length - 1] !== direction) {
            e.path.push(direction);
        }
        if (!Utils.isEmpty(stackLimit) && e.path.length > stackLimit!) {
            e.path.shift();
        }
    }
    
    export function render(grid: AbstractGrid, e: IEvent, context: CanvasRenderingContext2D, dynamic: boolean, pointer?: ICell) {
        let currentState = getState(e);
        if(currentState === undefined) {
            return;    
        }
        let image: HTMLImageElement | undefined;
        if (!Utils.isEmpty(currentState.charaset)) {
            image = Resource.loadImageFromCache(currentState.charaset!, ResourceType.CHAR);
        } else if (!Utils.isEmpty(currentState.gid)) {
            //TODO Manage Event with tile grafic
        }

        if(e.position === undefined) {
            console.error("Event position undefined: " + e);
            return;
        }
                      
        if(!dynamic) {
            // Draw a border
            context.save();
            context.strokeStyle = Constant.Color.GREEN;
            context.lineWidth = 2;
            context.strokeRect(e.position.x, e.position.y, grid.cellW, grid.cellH);
        }
        
        if (image !== undefined) {
            let charaWidth: number = Math.floor(image.width / 4);
            let charaHeight: number = Math.floor(image.height / 4);
            let charaWidthResized: number = charaWidth;
            let charaHeightResized: number = charaHeight;
            
            if(!dynamic) {   
                // Resize chara (proportionally) to fit in one cell
                if(charaHeight > charaWidth) {
                    charaWidthResized = Math.floor(charaWidth * grid.cellH / charaHeight);
                    charaHeightResized = grid.cellH;  
                } else {
                    charaHeightResized = Math.floor(charaHeight * grid.cellW / charaWidth);
                    charaWidthResized = grid.cellW;
                } 
            }
            
            let charaX: number = 0;
            let frequency: number;
            if(!Utils.isEmpty(currentState.frequencyVal)) {
                frequency = currentState.frequencyVal!;
            } else {
                frequency = Constant.MEDIUM_FREQUENCY;    
            }
            if (!Utils.isEmpty(e.target)) {
                //If it's moving, change animation
                if (Utils.isEmpty(currentState.animationStartTime)) {
                    currentState.animationStartTime = Utils.now();
                }
                let animationTime = Utils.now() - currentState.animationStartTime!;
                let position = Math.floor((animationTime * frequency) % 4);
                switch (position) {
                    case 1: charaX = charaWidth; break;
                    case 2: charaX = charaWidth * 2; break;
                    case 3: charaX = charaWidth * 3; break;
                }
            } else if (currentState.rotation === RotationEnum.CLOCKWISE || currentState.rotation === RotationEnum.COUNTERCLOCKWISE) {
                // Rotate
                if (Utils.isEmpty(currentState.animationStartTime)) {
                    currentState.animationStartTime = Utils.now();
                }
                let animationTimeDelta = Utils.now() - currentState.animationStartTime!;
                // Rotation frequency is a forth of movement rotation
                frequency /= 4;
                let direction = Math.floor((animationTimeDelta * frequency) % 4);
                if (currentState.rotation === RotationEnum.COUNTERCLOCKWISE) {
                    if(direction === DirectionEnum.LEFT) {
                        direction = DirectionEnum.RIGHT;
                    } else if(direction === DirectionEnum.RIGHT) {
                        direction = DirectionEnum.LEFT;
                    }
                }
                currentState.direction = direction;  
            } else {
                currentState.animationStartTime = undefined;
            }
            // Face the right direction
            let charaY: number = 0;
            switch (currentState.direction) {
                case DirectionEnum.LEFT: charaY = charaHeight; break;
                case DirectionEnum.RIGHT: charaY = charaHeight * 2; break;
                case DirectionEnum.UP: charaY = charaHeight * 3; break;
            };

            let x = e.position.x + Math.floor((grid.cellW - charaWidthResized) / 2); //In the middle
            let y = e.position.y + Math.floor(- charaHeightResized + grid.cellH); //Foots on the ground
            
            context.save();
            if (!Utils.isEmpty(currentState.opacity) && currentState.opacity !== 100) {
                context.globalAlpha = currentState.opacity! / 100;
            }
            if (pointer !== undefined) {
                let isHighlighted: boolean = pointer.i === e.i && pointer.j === e.j;
                if (isHighlighted) {
                    // Add highlight effect 
                    context.shadowColor = Constant.Color.YELLOW;
                    context.shadowBlur = 8;
                }
            }

            context.drawImage(
                image, // Specifies the image, canvas, or video element to use
                charaX, // The x coordinate where to start clipping
                charaY, // The y coordinate where to start clipping
                charaWidth, // The width of the clipped image
                charaHeight, // The height of the clipped image
                x, // The x coordinate where to place the image on the canvas
                y, // The y coordinate where to place the image on the canvas
                charaWidthResized, // The width of the image to use (stretch or reduce the image)
                charaHeightResized // The height of the image to use (stretch or reduce the image)
            );
            context.restore();
        }
    }
    
    export function isVisible(e: IEvent, minRow: number, maxRow: number, minColumn: number, maxColumn: number,  i: number, j: number, onTop: boolean) {
        // Check if the posizion is correct
        if(e.i !== i || e.j !== j) {
            return false;
        }
        // Check if Character is visible
        if(!CharacterManager.isVisible(getState(e), onTop)) {
            return false;
        }
        return e.i >= minColumn && e.i <= maxColumn && e.j >= minRow && e.j <= maxRow;
    }

    export function saveMem(event: IEvent, key: string, value: string): void {
        if(Utils.isEmpty(event.memory)) {
            event.memory = {};
        }
        event.memory[key] = value;    
    };
    
    export function loadMem(event: IEvent, key: string): string | undefined {
        if(Utils.isEmpty(event.memory)) {
            return undefined;
        }
        return event.memory[key];    
    };
        
    export function deleteMem(event: IEvent, key: string): void {
        if(!Utils.isEmpty(event.memory)) {
            delete event.memory[key];
        }  
    };
    
    export function initTransientData(map: IMap, grid: AbstractGrid, e?: IEvent): IEvent | undefined {
        CharacterManager.initTransientData(grid, EventManager.getState(e));
        if(e !== undefined) {
            stopMovement(e);
            e.position = {
                x: e.i * grid.cellW,
                y: e.j * grid.cellH
            };
            return e;
        }
        return undefined;
    }
    
    export function getState(event?: IEvent) {
        if(event === undefined || event.currentState === undefined || event.states === undefined) {
            return undefined;
        }
        return event.states[event.currentState];    
    }
}