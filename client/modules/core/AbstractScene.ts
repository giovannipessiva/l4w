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

    focus: ICoordinates;

    pointer: ICell;

    renderingConfiguration: RenderConfiguration;
    layers: number;

    context: CanvasRenderingContext2D;
    protected grid: AbstractGrid;

    paused: boolean;

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
        if (this.pointer.i != null && this.pointer.j != null) {
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

    updatePointer(i: number, j: number) {
        this.pointer = {
            i: i,
            j: j
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
                if (!Utils.isEmpty(layer.opacity)) {
                    context.globalAlpha = layer.opacity;
                }

                this.renderLayer(map, i, tileImage, context, minRow, maxRow, minColumn, maxColumn);

                context.globalAlpha = 1;
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
    
    protected onFocusCellChange() {
    }
    
    protected onFocusPixelChange(x: number, y: number) {
    }
}