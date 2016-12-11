/// <reference path="manager/ActorManager.ts" />
/// <reference path="manager/MapManager.ts" />
/// <reference path="AbstractGrid.ts" />
/// <reference path="util/Constant.ts" />
/// <reference path="util/Commons.ts" />
/// <reference path="util/Time.ts" />

var nextAnimationFrame =
    window.requestAnimationFrame ||
    function(callback) {
        window.setTimeout(this.mainGameLoop, 40);
    };

/**
 * Abstract class for handling rendering operations
 */
abstract class AbstractScene {

    map: IMap;
    tileImage: HTMLImageElement;

    focus: IPoint;
    targetFocus: IPoint;
    speed: number;  // cell/sec
    mSpeed: number; // pixel/msec
    movementTimer: Time.Timer;

    flagRequestNewMovement;
    requestedFocus: IPoint;

    pointer: IPoint;

    renderingConfiguration: RenderConfiguration;
    layers: number;

    context: CanvasRenderingContext2D;
    protected grid: AbstractGrid;

    paused: boolean;

    constructor(grid: AbstractGrid) {
        this.renderingConfiguration = new RenderConfiguration();
        this.grid = grid;
        this.flagRequestNewMovement = false;
        this.paused = false;

        this.setSpeed(6);
        this.focus = this.grid.mapCellToCanvas({
            x: 0, y: 0
        });
        this.pointer = {
            x: 0, y: 0
        };
    }

    setSpeed(speed: number) {
        //TODO usa due velocita' diverse per le due direzioni
        this.speed = speed;  // cell/sec
        this.mSpeed = this.speed * this.grid.cellH / 1000; // cell/msec
    }

    start(canvas: HTMLCanvasElement) {
        this.changeScale(canvas);
        this.mainGameLoop();
    }

    mainGameLoop() {
        var scene = this;
        nextAnimationFrame(function() {
            scene.mainGameLoop();
        });

        if (this.paused) {
            return;
        }

        if (this.mainGameLoop_pre() === false) {
            return;
        }

        // Events logic
        this.manageMovements();

        let boundariesY = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
        let minRow = boundariesY.min;
        let maxRow = boundariesY.max;
        let boundariesX = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth());
        let minColumn = boundariesX.min;
        let maxColumn = boundariesX.max;

        // Rendering
        this.renderLayers(this.map, this.tileImage, this.context, minRow, maxRow, minColumn, maxColumn);
        MapManager.renderGlobalEffects(this.grid, this.context, minRow, maxRow, minColumn, maxColumn);
        this.renderTopLayerElements(minRow, maxRow, minColumn, maxColumn);
        MapManager.renderGlobalUI(this.grid, this.context, this.renderingConfiguration);
        this.renderFocus();
        this.renderPointer();

        this.mainGameLoop_post(boundariesX, boundariesY);
    }

    protected mainGameLoop_pre(): boolean {
        this.grid.clear(this.context); //TODO rimuovere a regime
        return true;
    }

    protected mainGameLoop_post(boundariesX: IRange, boundariesY: IRange) {
    }

    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            var mappedPointer: IPoint = this.grid.mapCellToCanvas(this.pointer);
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.arc(
                mappedPointer.x + Math.floor(this.grid.cellW / 2),
                mappedPointer.y + Math.floor(this.grid.cellH / 2),
                18,
                0,
                Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.globalAlpha = 0.4;
            this.context.fill();
            this.context.restore();
        }
    }

    protected renderFocus() {
        if (this.focus.x != null && this.focus.y != null && this.renderingConfiguration.showFocus) {
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.BLACK;
            this.context.arc(
                this.focus.x + Math.floor(this.grid.cellW / 2),
                this.focus.y + Math.floor(this.grid.cellH / 2),
                15,
                0,
                Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.fill();
            this.context.restore();
        }
    }

    toggleGrid(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showGrid = enable;
        } else {
            this.renderingConfiguration.showGrid = !this.renderingConfiguration.showGrid;
        }

    }

    toggleCellNumbering(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showCellNumbers = enable;
        } else {
            this.renderingConfiguration.showCellNumbers = !this.renderingConfiguration.showCellNumbers;
        }
    }

    toggleFocus(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showFocus = enable;
        } else {
            this.renderingConfiguration.showFocus = !this.renderingConfiguration.showFocus;
        }
    }

    updatePointer(x: number, y: number) {
        this.pointer = {
            x: x,
            y: y
        };
    }

    moveFocus(direction: Constant.Direction) {
        //TODO class Movable
        switch (direction) {
            case Constant.Direction.UP: this.focus.y -= +this.grid.cellH; break;
            case Constant.Direction.DOWN: this.focus.y += +this.grid.cellH; break;
            case Constant.Direction.LEFT: this.focus.x -= +this.grid.cellW; break;
            case Constant.Direction.RIGHT: this.focus.x += +this.grid.cellW; break;
            case Constant.Direction.NONE: break;
        }
        this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
    }

    resetTranslation() {
        this.grid.resetTranslation();
    }

    changeScale(canvas: HTMLCanvasElement) {
        //TODO sposta l'inizializzazione del context
        this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
        this.context.scale(this.grid.scaleX, this.grid.scaleY);
    }

    setMap(map: IMap, callback: { (scene: AbstractScene): void }) {
        (function(scene: AbstractScene) {

            if (Utils.isEmpty(map)) {
                console.error("initialized map");
                console.trace();
            }

            scene.map = map;
            scene.setTile(map.tileset.image, function(scene) {
                callback(scene);
            });
        })(this);
    }

    setTile(tile: string, callback: { (scene: AbstractScene): void }) {
        //TODO gestisci il caricamento dei metadati del tile
        (function(scene: AbstractScene) {
            Resource.load(tile, Resource.TypeEnum.TILE, function(image) {
                scene.tileImage = image[0];
                scene.map.tileset.image = tile;
                callback(scene);
            });
        })(this);
    }

    getSceneHeight() {
        return this.map.height;
    }

    getSceneWidth() {
        return this.map.width;
    }
    
    protected renderLayers(map: IMap, tileImage: HTMLImageElement, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        if (!Utils.isEmpty(map)) {
            for (var i = Constant.MapLayer.LOW; i <= Constant.MapLayer.EVENTS; i++) {
                                
                var layer = map.layers[i];
                if (!Utils.isEmpty(layer.data)) {

                    if (!Utils.isEmpty(layer.opacity)) {
                        context.globalAlpha = layer.opacity;
                    }

                    this.renderLayer(map, i, tileImage, context, minRow, maxRow, minColumn, maxColumn);

                    context.globalAlpha = 1;
                }
            }
        }
    }

    protected renderLayer(map: IMap, layerIndex: number, tileImage: HTMLImageElement, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        this.renderInterLayerElements(layerIndex, minRow, maxRow, minColumn, maxColumn);
        var layer = map.layers[layerIndex];
        MapManager.renderLayer(this.grid, map, layer, tileImage, context, minRow, maxRow, minColumn, maxColumn);
    }

    protected abstract renderInterLayerElements(layerIndex: number, minRow: number, maxRow: number, minColumn: number, maxColumn: number);

    protected abstract renderTopLayerElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number);

    togglePause(pause?: boolean) {
        if (pause != null) {
            this.paused = pause;
        } else {
            this.paused = !this.paused;
        }
    }

    startMovement(i: number, j: number) {
        this.requestedFocus = this.grid.mapCellToCanvas({
            x: i,
            y: j
        });
        this.flagRequestNewMovement = true;
    }

    /**
     * Move max 1 step at a time, and use the time left for a recursive call
     * TODO manage speed > 1?
     */
    manageMovements(timeToMove: number = 0) {
        // If I am moving 
        if (!Utils.isEmpty(this.movementTimer)) {

            if (timeToMove == 0) {
                // Check how much time do I have
                timeToMove = this.movementTimer.lapse();
            }

            let distX = this.targetFocus.x - this.focus.x;
            let distY = this.targetFocus.y - this.focus.y;
            if (distX == 0 && distY == 0) {
                // Stop movement
                this.movementTimer = null;
                this.targetFocus = null;
            } else {
                //TODO pathfinding ftw
                let movementX = 0;
                let movementY = 0;
                let absMovement;
                if (Math.abs(distX) > Math.abs(distY)) {
                    // Move horizontally (max 1 cell)
                    movementX = Math.min(this.grid.cellW, this.mSpeed * timeToMove);
                    absMovement = movementX;
                    if (distX < 0) {
                        movementX *= -1;
                    }
                } else {
                    // Move vertically (max 1 cell)
                    movementY = Math.min(this.grid.cellH, this.mSpeed * timeToMove);
                    absMovement = movementY;
                    if (distY < 0) {
                        movementY *= -1;
                    }
                }

                // Move the focus
                this.grid.changeTranslation(this.focus.x + movementX, this.focus.y + movementY, this.map.width, this.map.height);

                // Move the hero
                //TODO

                // If I have finished one step
                if (absMovement == this.grid.cellW) {
                    this.movementTimer = new Time.Timer();
                    // Find out how much time is left after the movement
                    timeToMove -= absMovement / this.mSpeed;

                    // Update focus
                    this.focus.x += movementX;
                    this.focus.y += movementY;
                    
                    // Update hero position
                    this.onFocusChange();

                    // Check If I am arrived, or a new target has been requested
                    if (this.flagRequestNewMovement || this.focus.x == this.targetFocus.x && this.focus.y == this.targetFocus.y) {
                        // Reset current movement
                        this.movementTimer = null;
                        this.targetFocus = null;
                    }
                }
            }
        }

        // If I can start a new movement
        if (this.flagRequestNewMovement && Utils.isEmpty(this.movementTimer)) {
            // Configure new movement
            this.flagRequestNewMovement = false;
            this.targetFocus = this.requestedFocus;
            this.movementTimer = new Time.Timer();

            // If I have some time left, use it to move
            this.manageMovements(timeToMove);
        }
    }
    
    protected onFocusChange() {
    }
}