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

    export function update(a: IActor, time: number) {
        //TODO
    }
    
    export function setSpeed(grid: AbstractGrid, a: IActor, speed: number) {
        //TODO usa due velocita' diverse per le due direzioni
        a.speed = speed;  // cell/sec
        a.mSpeed = a.speed * grid.cellH / 1000; // cell/msec
    }
    
    export function getMSpeed(a: IActor) {
        if(!Utils.isEmpty(a.mSpeed)) {
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

    export function render(grid: AbstractGrid, a: IActor, context: CanvasRenderingContext2D) {
        let image: HTMLImageElement;
        if(!Utils.isEmpty(a.charaset)) {
            image = Resource.loadImageFromCache(a.charaset, Resource.TypeEnum.CHAR); 
        } else if (!Utils.isEmpty(a.gid)) {
            //TODO gestisci actor con grafica da tile
        }
    
        if(Utils.isEmpty(image)){
            image = Resource.loadDefaultImage(Resource.TypeEnum.CHAR);     
        }

        if(!Utils.isEmpty(image)){       
            let charaWidth: number = Math.floor(image.width / 4);
            let charaHeight: number = Math.floor(image.height / 4);

            let charaX: number = 0;
            if(!Utils.isEmpty(a.target)) {
                //If it's moving, change animation
                if(a.animationStartTime === null) {
                    a.animationStartTime = Utils.now();
                }
                let animationTime = Utils.now() - a.animationStartTime;
                let frequency = DEFAULT_FREQUENCY;
                if(!Utils.isEmpty(a.frequency)) {
                    frequency = a.frequency;
                }
                let position = Math.floor((animationTime * frequency) % 4);                
                switch(position) {
                    case 1: charaX = charaWidth; break;
                    case 2: charaX = charaWidth * 2; break;
                    case 3: charaX = charaWidth * 3; break;
                }
            } else {
                a.animationStartTime = null;    
            }
            // Face the right direction
            let charaY: number = 0;
            switch (a.direction) {
                case DirectionEnum.LEFT: charaY = charaHeight; break;
                case DirectionEnum.RIGHT: charaY = charaHeight * 2; break;
                case DirectionEnum.UP: charaY = charaHeight * 3; break;
            };
            
            let x = a.position.x + Math.floor((grid.cellW - charaWidth) / 2); //In the middle
            let y = a.position.y + Math.floor(- charaHeight + charaWidth * 2 / 3); //Foots on the ground
            
            let globalAlpha = context.globalAlpha;
            if (!Utils.isEmpty(a.opacity)) {
                context.globalAlpha = a.opacity;
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
            
            context.globalAlpha = globalAlpha;
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
    
    export function isVisible(a: IActor, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        if(!Utils.isEmpty(a.visible) && !a.visible) {
            return false;    
        }
        if(!Utils.isEmpty(a.opacity) && a.opacity === 0) {
            return false;    
        }
        return a.i >= minColumn && a.i <= maxColumn && a.j >= minRow && a.j <=maxRow;
    }
    
    /**
     * Move max 1 step at a time, and use the time left for a recursive call
     */
    export function manageMovements(map: IMap, grid: AbstractGrid, a: IActor, onCoordinatesChange, onCellChange, timeToMove: number = 0) {
        // If I am moving 
        if (!Utils.isEmpty(a.movementStartTime)) {

            if (timeToMove === 0) {
                // Check how much time do I have
                timeToMove = Utils.now() - a.movementStartTime;
            }
            let distX = a.target.x - (a.i * grid.cellW);
            let distY = a.target.y - (a.j * grid.cellH);
            if (distX === 0 && distY === 0) {
                // Stop movement
                a.movementStartTime = null;
                a.target = null;
            } else {
                //TODO pathfinding ftw
                let movementX = 0;
                let movementY = 0;
                let absMovement;
                if (Math.abs(distX) > Math.abs(distY)) {
                    // Move horizontally (max 1 cell)
                    movementX = Math.min(grid.cellW, Math.floor(getMSpeed(a) * timeToMove));
                    absMovement = movementX;
                    if (distX < 0) {
                        movementX *= -1;
                        a.direction = DirectionEnum.LEFT;
                    } else {
                        a.direction = DirectionEnum.RIGHT;
                    }
                    
                    if(MapManager.isDirectionBlocked(map, a.i, a.j, a.direction)) {
                        movementX = 0;
                    }
                }
                if(movementX === 0) {
                    // Move vertically (max 1 cell)
                    movementY = Math.min(grid.cellH, Math.floor(getMSpeed(a) * timeToMove));
                    absMovement = movementY;
                    if (distY < 0) {
                        movementY *= -1;
                        a.direction = DirectionEnum.UP;
                    } else {
                        a.direction = DirectionEnum.DOWN;
                    }
                    
                    if(MapManager.isDirectionBlocked(map, a.i, a.j, a.direction)) {
                        movementY = 0;
                        // Blocked: stop the movement
                        a.movementStartTime = null;
                        a.target = null;
                    }
                } 

                // Move the hero
                a.position.x = a.i * grid.cellW + movementX;
                a.position.y = a.j * grid.cellH + movementY;
                onCoordinatesChange(movementX, movementY);
                
                // If I have finished one step
                if (absMovement === grid.cellW) {
  
                    a.movementStartTime = Utils.now();
                    // Find out how much time is left after the movement
                    timeToMove -= absMovement / getMSpeed(a);

                    // Update  position
                    let cell = grid.mapCanvasToCell(a.position);
                    a.i = cell.i;
                    a.j = cell.j;
                    onCellChange(movementX, movementY);         

                    // Check If I am arrived, or a new target has been requested
                    if (!Utils.isEmpty(a.newTarget) || (a.position.x === a.target.x && a.position.y === a.target.y)) {
                        // Reset current movement
                        a.movementStartTime = null;
                        a.target = null;
                    }
                }
            }
        }

        // If I can start a new movement
        if (!Utils.isEmpty(a.newTarget) && Utils.isEmpty(a.movementStartTime)) {
            // Configure new movement
            a.target = a.newTarget;
            a.newTarget = null;
            a.movementStartTime = Utils.now();

            // If I have some time left, use it to move
            manageMovements(map, grid, a, onCoordinatesChange, onCellChange, timeToMove);
        }
    }
    
    export function initTransientData(grid: AbstractGrid, a: IActor) : IActor {
        if(Utils.isEmpty(a.position)) {
            a.position = {
                x: a.i * grid.cellW,
                y: a.j * grid.cellH
            };
        }
        if(!Utils.isEmpty(a.speed)) {
            this.setSpeed(a, a.speed);
        }
        
        return a;
    }
    
};
