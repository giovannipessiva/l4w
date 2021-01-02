import { ICoordinatesCallback } from "../util/Commons"
import { Constant } from "../util/Constant"
import { Resource } from "../util/Resource"
import { AbstractGrid } from "../AbstractGrid"
import { ClientUtils } from "../util/ClientUtils"
import { IEvent } from "../../../common/model/Event"
import { ICell, ActionTriggerEnum, BlockDirection, DirectionEnum, RotationEnum, RelativeDirectionEnum, ICellCallback, IPoint } from "../../../common/Commons"
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
                // For the hero there is nothing to do
                return;    
            }
            // Check if a predetermined movement needs to be started
            if(event.currentState !== NO_STATE && event.states[event.currentState].movement !== undefined && event.movementStartTime === undefined) {
                startPredeterminatedMovement(scene.getMap(), event);
            }
            // Check if an action has been triggered
            if(isActionTriggered(event, event.currentState, hero, actionCell)) {
                // Return a launchable state
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
    
    export function startMovement(e: IEvent, i: number, j: number, onTargetReached?: ICellCallback): boolean {
        e.newTarget = {
            i: i,
            j: j
        };
        e.newOnTargetReached = onTargetReached;
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
    export function manageMovements(map: IMap, grid: AbstractGrid, e: IEvent, onCoordinatesChange: ICoordinatesCallback, onCellChange: ICoordinatesCallback, timeToMove: number = 0): boolean {
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
            let target = e.target;
            let direction = determineNextStepDirection(map, e, target);

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
                    if(e.onTargetReached !== undefined) {
                        e.onTargetReached(target);
                    }
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
                    
                    // Check if I am arrived, or a new target has been requested
                    let targetPosition = grid.mapCellToCanvas(e.target);
                    if (!Utils.isEmpty(e.newTarget) || (e.position.x === targetPosition.x && e.position.y === targetPosition.y)) {
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
            e.onTargetReached = e.newOnTargetReached;
            e.newTarget = undefined;
            e.newOnTargetReached = undefined;
            e.movementStartTime = Utils.now();

            // If I have some time left, use it to move
            stepCompleted = stepCompleted || manageMovements(map, grid, e, onCoordinatesChange, onCellChange, timeToMove);
        }
        return stepCompleted;
    }
    
    /**
     * Return the direction of next step to reach target.
     * If no more steps are necessary, return DirectionEnum.NONE and call e.onTargetReached
     * If no more steps are possible, return DirectionEnum.NONE
     */
    function determineNextStepDirection(map: IMap, e: IEvent, target: ICell): DirectionEnum {
        let direction = DirectionEnum.NONE;
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
            if (!Utils.isEmpty(e.movementDirection) && e.movementDirection === DirectionEnum.NONE) {
                direction = e.movementDirection!;
            } else {
                try {
                    direction = MapManager.pathFinder(map, e, target)
                } catch (e) {
                    console.error(e)
                }
                let stepTarget = ClientUtils.getDirectionTarget(e, direction)
                // Check if target contains an event
                let stepTargetGID = ClientUtils.cellToGid(stepTarget, map.width)
                let stepTargetBlock = ClientUtils.getMapDynamicBlock(map, stepTargetGID)
                if (ClientUtils.isDirectionEnumBlocked(stepTargetBlock, ClientUtils.getOpposedDirections(direction))) {
                    // I can't go further, stop now
                    direction = DirectionEnum.NONE
                    if (stepTargetGID === targetGui) {
                        // Reached target
                        if(e.onTargetReached !== undefined) {
                            e.onTargetReached(target);
                        }
                    }
                }
            }
        }
        return direction;
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
            console.warn("Not implemented");
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
                charaX = charaWidth * position;
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
                    // Render yellow oval
                    let mappedPointer: IPoint = grid.mapCellToCanvas(pointer);
                    context.save();
                    context.beginPath();
                    context.fillStyle = Constant.Color.YELLOW;
                    context.scale(2, 1);
                    context.arc(
                        Math.floor((mappedPointer.x + grid.cellW / 2) / 2),
                        mappedPointer.y + grid.cellH - 4,
                        8,
                        0,
                        Constant.DOUBLE_PI);
                    context.closePath();
                    context.globalAlpha = 0.4;
                    context.fill();
                    context.restore();
                    // Add highlight effect to character
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

    function startPredeterminatedMovement(map: IMap, event: IEvent) {
        let movement = event.states[event.currentState].movement!;
        let target;
        let onTargetReached: ICellCallback | undefined;
        switch(movement.strategy) {
            case "target":
                // Reach movement.target
                if(movement.target === undefined) {
                    console.warn("event: " + event.id + " has strategy=target, but target is undefined. Will fallback to random");
                    movement.target = getRandomStepTarget(map, event);
                } 
                target = movement.target;
                break;
            case "event":
                // Make a single step towards movement.eventId using movement.pathfinder
                let targetEvent: IEvent | undefined;
                for(let tmp of map.events) {
                    if(tmp.id === movement.eventId) {
                        targetEvent = tmp;
                    }
                }
                if(targetEvent === undefined) {
                    console.error("Cannot find event: " + movement.eventId);
                    return;
                }
                let newDirection = MapManager.pathFinder(map, event, targetEvent, movement.pathfinder);
                target = ClientUtils.getDirectionTarget(event, newDirection);
                onTargetReached = function(cell) {
                    // Keep doing steps towards the event, if reached then pause
                    let newDirection = MapManager.pathFinder(map, event, targetEvent!, movement.pathfinder);
                    if(newDirection !== DirectionEnum.NONE) {
                        let nextTarget = ClientUtils.getDirectionTarget(event, newDirection);
                        startMovement(event, nextTarget.i, nextTarget.j, onTargetReached);
                    } else {
                        // Pause a bit, then starts again
                        setTimeout(() => { onTargetReached!(cell); }, 1000);
                    }
                }
                break;
            case "random":
                // Make a single step in a random direction
                target = getRandomStepTarget(map, event);
                onTargetReached = function() {
                    // Take a pause, then keep doing random steps
                    setTimeout(function() {
                        let nextTarget = getRandomStepTarget(map, event);
                        startMovement(event, nextTarget.i, nextTarget.j, onTargetReached);
                    }, movement.pause);
                }
                break;
            default:
                console.error("Unexpected movement strategy: " + movement.strategy + " for event: " + event.id);
                return;
        }
        if(target !== undefined) {
            startMovement(event, target.i, target.j, onTargetReached);
        }
    }

    function getRandomStepTarget(map: IMap, event: IEvent): ICell {
        let currentDirection = event.states[event.currentState].direction;
        if(currentDirection === undefined) {
            currentDirection = DirectionEnum.NONE;
        }
        let straightDirection = ClientUtils.getNextAbsoluteDirection(currentDirection, RelativeDirectionEnum.STRAIGHT);
        let leftDirection = DirectionEnum.NONE;
        let rightDirection = DirectionEnum.NONE;
        let backDirection = DirectionEnum.NONE;

        // Decide next pseudo-random direction, excluding blocked directions
        let straightScore = MapManager.isMovementTowardsTargetBlocked(map, event.i, event.j, straightDirection)? 0 : 3; // Probabily keep current direction
        let leftScore = MapManager.isMovementTowardsTargetBlocked(map, event.i, event.j, leftDirection)? 0 : 2; // Same probability of turning left or right
        let rightScore = MapManager.isMovementTowardsTargetBlocked(map, event.i, event.j, rightDirection)? 0 : 2; // Same probability of turning left or right
        let backScore = MapManager.isMovementTowardsTargetBlocked(map, event.i, event.j, backDirection)? 0 : 1; // Rarely turn back
        let tot = straightScore + leftScore + rightScore + backScore;

        let newDirection = DirectionEnum.NONE;
        if(tot > 0) {
            let random = ClientUtils.getRandomInteger(1, tot);
            // Check in which interval falls the random value, and use it to decide the new direction
            random -= straightScore;
            if(random <= 0) {
                newDirection = straightDirection;
            } else {
                random -= leftScore;
                if(random <= 0) {
                    newDirection = leftDirection;
                } else {
                    random -= rightScore;
                    if(random <= 0) {
                        newDirection = rightDirection;
                    } else {
                        newDirection = backDirection;
                    }
                }
            }
        }
        return ClientUtils.getDirectionTarget(event, newDirection);
    }
}