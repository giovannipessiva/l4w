/// <reference path="../util/Commons.ts" />
/// <reference path="../util/Utils.ts" />
/// <reference path="../model/Actor.ts" />
/// <reference path="../manager/MapManager.ts" />

/**
 * Module to handle an actor
 */
namespace ActorManager {

    const DEFAULT_MSPEED: number = 4 * 32 / 1000;
    const DEFAULT_FREQUENCY: number = 6 / 1000;

    export function update(a: IActor, time: number, pauseTimeOffset: number = 0) {
        //TODO
        if (!Utils.isEmpty(a.movementStartTime)) {
            // If the actor was moving, and there has been a pause,
            // correct the movementStartTime
            a.movementStartTime += pauseTimeOffset;
        }
    }

    export function setSpeed(grid: AbstractGrid, a: IActor, speed: number) {
        //TODO usa due velocita' diverse per le due direzioni
        a.speed = speed;  // cell/sec
        a.mSpeed = a.speed * grid.cellH / 1000; // cell/msec
    }

    export function getMSpeed(a: IActor) {
        if (!Utils.isEmpty(a.mSpeed)) {
            return a.mSpeed;
        } else {
            return DEFAULT_MSPEED;
        }
    }

    export function startMovement(grid: AbstractGrid, a: IActor, i: number, j: number) {
        a.newTarget = grid.mapCellToCanvas({
            i: i,
            j: j
        });
    }

    export function render(grid: AbstractGrid, a: IActor, context: CanvasRenderingContext2D, pointer?: ICell) {
        let image: HTMLImageElement;
        if (!Utils.isEmpty(a.charaset)) {
            image = Resource.loadImageFromCache(a.charaset, Resource.TypeEnum.CHAR);
        } else if (!Utils.isEmpty(a.gid)) {
            //TODO gestisci actor con grafica da tile
        }

        if (Utils.isEmpty(image)) {
            image = Resource.loadDefaultImage(Resource.TypeEnum.CHAR);
        }

        if (!Utils.isEmpty(image)) {
            let charaWidth: number = Math.floor(image.width / 4);
            let charaHeight: number = Math.floor(image.height / 4);

            let charaX: number = 0;
            if (!Utils.isEmpty(a.target)) {
                //If it's moving, change animation
                if (Utils.isEmpty(a.animationStartTime)) {
                    a.animationStartTime = Utils.now();
                }
                let animationTime = Utils.now() - a.animationStartTime;
                let frequency: number = DEFAULT_FREQUENCY;
                if (!Utils.isEmpty(a.frequency)) {
                    frequency = parseFloat(a.frequency + "");
                }
                let position = Math.floor((animationTime * frequency) % 4);
                switch (position) {
                    case 1: charaX = charaWidth; break;
                    case 2: charaX = charaWidth * 2; break;
                    case 3: charaX = charaWidth * 3; break;
                }
            } else {
                a.animationStartTime = undefined;
            }
            // Face the right direction
            let charaY: number = 0;
            switch (a.direction) {
                case DirectionEnum.LEFT: charaY = charaHeight; break;
                case DirectionEnum.RIGHT: charaY = charaHeight * 2; break;
                case DirectionEnum.UP: charaY = charaHeight * 3; break;
            };

            let x = a.position.x + Math.floor((grid.cellW - charaWidth) / 2); //In the middle
            let y = a.position.y + Math.floor(- charaHeight + grid.cellH); //Foots on the ground

            context.save();
            if (!Utils.isEmpty(a.opacity)) {
                context.globalAlpha = a.opacity;
            }
            if(pointer !== undefined) {
            	let isHighlighted: boolean = pointer.i === a.i && pointer.j === a.j;
                if (isHighlighted) {
                    // Add highlight effect 
                    context.shadowColor = Constant.Color.YELLOW;
                    context.shadowBlur = 8;
                }
            }

            context.drawImage(
                image, //     Specifies the image, canvas, or video element to use     
                charaX, //  Optional. The x coordinate where to start clipping  
                charaY, //  Optional. The y coordinate where to start clipping  
                charaWidth, //  Optional. The width of the clipped image    
                charaHeight, //     Optional. The height of the clipped image   
                x, //   The x coordinate where to place the image on the canvas     
                y, //   The y coordinate where to place the image on the canvas
                charaWidth,
                charaHeight
            );

            context.restore();
        }
    }

    export function getNewActor(): IActor {
        let actor: IActor = {
            id: 0,
            name: "",
            i: 0,
            j: 0
        };
        return actor;
    }

    export function getNewHero(): IActor {
        let actor: IActor = getNewActor();
        actor.name = "Hero";
        actor.charaset = "fart.png";
        actor.i = 0;
        actor.j = 1;
        return actor;
    }

    export function isVisible(a: IActor, minRow: number, maxRow: number, minColumn: number, maxColumn: number,  i: number, j: number, onTop: boolean) {
        // Check if the posizion is correct
        if(a.i !== i || a.j !== j) {
            return false
        }
        // Check if it is the right time to render this actor, based on its zindex
        if(onTop !== (Utils.normalizeZIndex(a.onTop) !== Constant.ZIndex.MIN)) {
            return false
        }
        if (!Utils.isEmpty(a.visible) && !a.visible) {
            return false;
        }
        if (!Utils.isEmpty(a.opacity) && a.opacity === 0) {
            return false;
        }
        return a.i >= minColumn && a.i <= maxColumn && a.j >= minRow && a.j <= maxRow;
    }

    /**
     * Move max 1 step at a time, return true if a step has been made
     */
    export function manageMovements(map: IMap, grid: AbstractGrid, a: IActor, onCoordinatesChange, onCellChange, onTargetReached, timeToMove: number = 0): boolean {
        let stepCompleted: boolean = false;
        // If I am moving 
        if (!Utils.isEmpty(a.movementStartTime)) {

            if (timeToMove === 0) {
                // Check how much time do I have
                timeToMove = Utils.now() - a.movementStartTime;
            }

            let target: ICell = {
                i: Math.floor(a.target.x / grid.cellW),
                j: Math.floor(a.target.y / grid.cellH)
            };

            let direction;
            // Check if target can be reached
            let targetGui = Utils.cellToGid(target, map.width);
            let cellStaticBlock = Utils.getMapStaticBlock(map,targetGui);
            let cellDynamicBlock = Utils.getMapDynamicBlock(map,targetGui);
            if(Utils.isBlockDirectionBlocked(cellStaticBlock, BlockDirection.ALL) && !Utils.isBlockDirectionBlocked(cellDynamicBlock, BlockDirection.ALL)) {
                // Target is blocked, and does not contain and event, so no movement needed
                direction = DirectionEnum.NONE;
            } else {
                // Check if I am currently moving a step
                direction = a.movementDirection;
                if (Utils.isEmpty(direction) || direction === DirectionEnum.NONE) {
                    // Decide next step
                    direction = MapManager.pathFinder(map, a, target);
                    let stepTarget = Utils.getDirectionTarget(a, direction);
                    // Check if target contains an event
                    let stepTargetGID = Utils.cellToGid(stepTarget, map.width);
                    let stepTargetBlock = Utils.getMapDynamicBlock(map,stepTargetGID);
                    if(Utils.isDirectionEnumBlocked(stepTargetBlock, Utils.getOpposedDirections(direction))) {
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
                    movementX = Math.min(grid.cellW, Math.floor(getMSpeed(a) * timeToMove));
                    absMovement = movementX;
                    movementX *= -1;
                    break;
                case DirectionEnum.RIGHT:
                    // Move horizontally (max 1 cell)
                    movementX = Math.min(grid.cellW, Math.floor(getMSpeed(a) * timeToMove));
                    absMovement = movementX;
                    break;
                case DirectionEnum.UP:
                    // Move vertically (max 1 cell)
                    movementY = Math.min(grid.cellH, Math.floor(getMSpeed(a) * timeToMove));
                    absMovement = movementY;
                    movementY *= -1;
                    break;
                case DirectionEnum.DOWN:
                    // Move vertically (max 1 cell)
                    movementY = Math.min(grid.cellH, Math.floor(getMSpeed(a) * timeToMove));
                    absMovement = movementY;
                    break;
                case DirectionEnum.NONE:
                    // Stop movement
                    stopMovement(a);
                    onTargetReached(target);
                    break;
            };

            if (direction !== DirectionEnum.NONE) {
                // Move the hero
                a.direction = direction;
                a.movementDirection = direction;
                a.position.x = a.i * grid.cellW + movementX;
                a.position.y = a.j * grid.cellH + movementY;
                onCoordinatesChange(movementX, movementY);

                // If I have finished one step
                if (absMovement === grid.cellW) {
                    stepCompleted = true;
                    a.movementDirection = undefined;
                    a.movementStartTime = Utils.now();
                    // Find out how much time is left after the movement
                    timeToMove -= Math.floor(absMovement / getMSpeed(a));

                    // Update position
                    let cell = grid.mapCanvasToCell(a.position);
                    a.i = cell.i;
                    a.j = cell.j;
                    onCellChange(movementX, movementY);

                    // Check If I am arrived, or a new target has been requested
                    if (!Utils.isEmpty(a.newTarget) || (a.position.x === a.target.x && a.position.y === a.target.y)) {
                        // Reset current movement
                        stopMovement(a);
                    }
                }
            }
        }

        // If I can start a new movement
        if (!Utils.isEmpty(a.newTarget) && Utils.isEmpty(a.movementStartTime)) {
            // Configure new movement
            a.target = a.newTarget;
            a.newTarget = undefined;
            a.movementStartTime = Utils.now();

            // If I have some time left, use it to move
            stepCompleted = stepCompleted || manageMovements(map, grid, a, onCoordinatesChange, onCellChange, onTargetReached, timeToMove);
        }
        return stepCompleted;
    }

    function stopMovement(actor: IActor) {
        actor.path = undefined;
        actor.movementStartTime = undefined;
        actor.target = undefined;
    }

    export function initTransientData(grid: AbstractGrid, a: IActor): IActor {
        if (Utils.isEmpty(a.position)) {
            a.position = {
                x: a.i * grid.cellW,
                y: a.j * grid.cellH
            };
        }
        if (!Utils.isEmpty(a.speed)) {
            this.setSpeed(a, a.speed);
        }

        return a;
    }

    export function addDirectionToPath(a: IActor, direction: DirectionEnum, stackLimit?: number) {
        if (a.path === undefined) {
            a.path = [];
        }
        // Salva solo i cambi di direzione
        if (a.path[a.path.length - 1] !== direction) {
            a.path.push(direction);
        }
        if (!Utils.isEmpty(stackLimit) && a.path.length > stackLimit) {
            a.path.shift();
        }
    }
};
