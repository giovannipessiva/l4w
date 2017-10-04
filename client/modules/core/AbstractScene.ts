/// <reference path="manager/ActorManager.ts" />
/// <reference path="manager/MapManager.ts" />
/// <reference path="AbstractGrid.ts" />
/// <reference path="model/Commons.ts" />
/// <reference path="util/Constant.ts" />
/// <reference path="util/Commons.ts" />
/// <reference path="util/Utils.ts" />

var nextAnimationFrame =
    window.requestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 40);
    };

/**
 * Abstract class for handling rendering operations
 */
abstract class AbstractScene {

    map: IMap;

    focus: IPoint;

    pointer: ICell;

    renderingConfiguration: RenderConfiguration;
    layers: number;

    context: CanvasRenderingContext2D;
    protected grid: AbstractGrid;

    paused: boolean;
    pauseStartTime: number;
    pauseDuration: number;

    constructor(grid: AbstractGrid) {
        this.renderingConfiguration = new RenderConfiguration();
        this.grid = grid;
        this.paused = false;

        this.focus = this.grid.mapCellToCanvas({
            i: 0, j: 0
        });
        this.pointer = {
            i: 0, j: 0
        };
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

        let boundariesY = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
        let minRow = boundariesY.min;
        let maxRow = boundariesY.max;
        let boundariesX = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth());
        let minColumn = boundariesX.min;
        let maxColumn = boundariesX.max;

        // Rendering
        if (!Utils.isEmpty(this.map) && !Utils.isEmpty(this.map.tileset) && !Utils.isEmpty(this.map.tileset.imageData)) {
            // Dont render if data is not initialized
            this.renderLayers(this.map, this.map.tileset.imageData, this.context, minRow, maxRow, minColumn, maxColumn);
        }
        MapManager.renderGlobalEffects(this.grid, this.context, minRow, maxRow, minColumn, maxColumn);
        this.renderTopLayerElements(minRow, maxRow, minColumn, maxColumn);
        MapManager.renderGlobalUI(this.grid, this.context, this.renderingConfiguration);
        this.renderFocus();
        this.renderPointer();

        this.mainGameLoop_post(boundariesX, boundariesY);
    }

    protected mainGameLoop_pre(): boolean {
        this.grid.clear(this.context);
        return true;
    }

    protected mainGameLoop_post(boundariesX: IRange, boundariesY: IRange) {
    }

    protected renderPointer() {
        if (this.pointer.i != null && this.pointer.j != null) {
            let mappedPointer: IPoint = this.grid.mapCellToCanvas(this.pointer);
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

    toggleGridMode() {
        if (!this.renderingConfiguration.showGrid) {
            this.toggleGrid();
        } else if (!this.renderingConfiguration.showBlocks) {
            this.toggleBlocks();
        } else {
            this.toggleGrid();
            this.toggleBlocks();
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

    toggleBlocks(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showBlocks = enable;
        } else {
            this.renderingConfiguration.showBlocks = !this.renderingConfiguration.showBlocks;
        }
    }

    toggleAntialiasing(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.enableAntialiasing = enable;
        } else {
            this.renderingConfiguration.enableAntialiasing = !this.renderingConfiguration.enableAntialiasing;
        }
        if ("webkitImageSmoothingEnabled" in this.context) {
            this.context["webkitImageSmoothingEnabled"] = this.renderingConfiguration.enableAntialiasing;
        }
        if ("msImageSmoothingEnabled" in this.context) {
            this.context["msImageSmoothingEnabled"] = this.renderingConfiguration.enableAntialiasing;
        }
        if ("imageSmoothingEnabled" in this.context) {
            this.context["imageSmoothingEnabled"] = this.renderingConfiguration.enableAntialiasing;
        }
    }

    updatePointer(i: number, j: number) {
        this.pointer = {
            i: i,
            j: j
        };
    }

    moveFocus(direction: DirectionEnum = null) {
        if (direction != null) {
            switch (direction) {
                case DirectionEnum.UP: this.focus.y -= +this.grid.cellH; break;
                case DirectionEnum.DOWN: this.focus.y += +this.grid.cellH; break;
                case DirectionEnum.LEFT: this.focus.x -= +this.grid.cellW; break;
                case DirectionEnum.RIGHT: this.focus.x += +this.grid.cellW; break;
            }
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

    changeMap(map: IMap, callback: { (scene: AbstractScene): void }) {
        var scene: AbstractScene = this;
        if (Utils.isEmpty(map)) {
            console.error("initialized map");
            console.trace();
        }
        scene.map = map;
        scene.changeTile(map.tile, function(scene) {
            setTimeout(function() {
                MapManager.loadBlocks(scene.map);
            });
            callback(scene);
        });
    }

    changeTile(tile: string, callback: { (scene: AbstractScene): void }) {
        var scene: AbstractScene = this;
        TilesetManager.loadTileset(tile, this.context, function(json) {
            scene.map.tileset = json;
            Resource.load(tile, Resource.TypeEnum.TILE, function(image: HTMLImageElement) {
                scene.map.tileset.imageData = image;
                callback(scene);
            });
        });
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
                if (!Utils.isEmpty(layer.opacity)) {
                    context.globalAlpha = layer.opacity;
                }

                this.renderLayer(i, tileImage, context, minRow, maxRow, minColumn, maxColumn);

                context.globalAlpha = 1;
            }
        }
    }

    protected renderLayer(layerIndex: number, tileImage: HTMLImageElement, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        this.renderInterLayerElements(layerIndex, minRow, maxRow, minColumn, maxColumn);
        let layer = this.map.layers[layerIndex];
        MapManager.renderLayer(this.grid, this.map, layer, tileImage, context, minRow, maxRow, minColumn, maxColumn);
    }

    protected abstract renderInterLayerElements(layerIndex: number, minRow: number, maxRow: number, minColumn: number, maxColumn: number);

    protected abstract renderTopLayerElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number);

    togglePause(pause?: boolean) {
        if (pause != null) {
            this.paused = pause;
        } else {
            this.paused = !this.paused;
        }
        if (this.paused) {
            // Save the pause start time
            this.pauseStartTime = Utils.now();
        } else {
            // Save the pause total duration
            this.pauseDuration = Utils.now() - this.pauseStartTime;
            this.pauseStartTime = undefined;
        }
    }

    protected onFocusCellChange() {
    }

    protected onFocusPixelChange(x: number, y: number) {
    }
}