/// <reference path="manager/EventManager.ts" />
/// <reference path="MapEngine.ts" />
/// <reference path="AbstractGrid.ts" />
/// <reference path="util/Constant.ts" />
/// <reference path="util/Commons.ts" />
/// <reference path="util/Time.ts" />

var nextAnimationFrame =
    window.requestAnimationFrame ||
    //window.mozRequestAnimationFrame ||
    //window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(this.mainGameLoop, this.refreshInterval);
    };

/**
 * Abstract class for handling rendering operations
 */
class AbstractScene {

    map: IMap;
    tileImage: HTMLImageElement;
    
    focus: IPoint;
    pointer: IPoint;

    renderingConfiguration: RenderConfiguration;
    layers: number;

    context: CanvasRenderingContext2D;
    grid: AbstractGrid;
    mapEngine: MapEngine;

    constructor(grid: AbstractGrid) {
        this.mapEngine = new MapEngine(grid);
        this.focus = {
            x: 0, y: 0
        };
        this.pointer = {
            x: 0, y: 0
        };
        this.renderingConfiguration = new RenderConfiguration();
        this.grid = grid;
    }

    start(canvas: HTMLCanvasElement) {
        this.updateContext(canvas);
        this.mainGameLoop();
    }

    mainGameLoop() {
        var scene = this;
        nextAnimationFrame(function() {
            scene.mainGameLoop();
        });

        if (this.mainGameLoop_pre() === false) {
            return;
        }

        var boundariesY = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
        var minRow = boundariesY.min;
        var maxRow = boundariesY.max;
        var boundariesX = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth());
        var minColumn = boundariesX.min;
        var maxColumn = boundariesX.max;

        // Base rendering
        this.mapEngine.render(this.map, this.tileImage, this.context, minRow, maxRow, minColumn, maxColumn);
        // Effects rendering
        this.mapEngine.renderGlobalEffects(this.context, minRow, maxRow, minColumn, maxColumn);
        // UI rendering
        this.mapEngine.renderUI(this.context, this.renderingConfiguration, minRow, maxRow, minColumn, maxColumn);
        
        this.mapEngine.renderGlobalUI(this.context, this.renderingConfiguration);

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
                mappedPointer.x,
                mappedPointer.y,
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
                this.focus.x,
                this.focus.y,
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
        }
        var translationPoint: IPoint = this.grid.getTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
        this.context.translate(translationPoint.x, translationPoint.y);
    }

    updateContext(canvas: HTMLCanvasElement) {
        this.context = <CanvasRenderingContext2D> canvas.getContext("2d");
        this.context.scale(this.grid.scale, this.grid.scale);
    }
       
    setMap(map: IMap, callback: { (scene: AbstractScene): void }) {
        (function(scene: AbstractScene) {
            
            if(Utils.isEmpty(map)) {
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
            Resource.load(tile,Resource.TypeEnum.TILE,function(image) {
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
}