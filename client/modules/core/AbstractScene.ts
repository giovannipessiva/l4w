/// <reference path="Actor.ts" />
/// <reference path="World.ts" />
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

    map: World.Map;

    focus: IPoint;
    pointer: IPoint;

    renderingOptions: World.Options;
    layers: number;

    context: CanvasRenderingContext2D;
    grid: AbstractGrid;

    constructor(grid: AbstractGrid) {
        this.map = new World.Map(grid);
        this.focus = {
            x: 6 * 32, y: 6 * 32
        };
        this.pointer = {
            x: 0, y: 0
        };
        this.renderingOptions = new World.Options();
        this.layers = this.map.getLayers();
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

        var boundaries = this.grid.getBoundariesY(this.focus.y, this.map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        boundaries = this.grid.getBoundariesX(this.focus.x, this.map.columns);
        var minColumn = boundaries.min;
        var maxColumn = boundaries.max;
        for (var y = minRow; y <= maxRow; y++) {
            this.renderRow(y,minColumn,maxColumn);
        }

        this.renderFocus();
        this.renderPointer();
        
        this.mainGameLoop_post();
    }

    protected mainGameLoop_pre(): boolean {
        this.grid.clear(this.context); //TODO rimuovere a regime
        return true;
    }

    protected mainGameLoop_post() {
    }

    private renderRow(y: number,minColumn: number,maxColumn: number) {
        for (var x = minColumn; x <= maxColumn; x++) {
            this.map.render(this.context, x, y, this.renderingOptions);
        }
    }

    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            var mappedPointer = this.grid.mapCellToCanvas(this.pointer);
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
        if (this.focus.x != null && this.focus.y != null && this.renderingOptions.showFocus) {
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
            this.renderingOptions.showGrid = enable;
        } else {
            this.renderingOptions.showGrid = !this.renderingOptions.showGrid;
        }

    }

    toggleCellNumbering(enable?: boolean) {
        if (enable != null) {
            this.renderingOptions.showCellNumbers = enable;
        } else {
            this.renderingOptions.showCellNumbers = !this.renderingOptions.showCellNumbers;
        }
    }

    toggleFocus(enable?: boolean) {
        if (enable != null) {
            this.renderingOptions.showFocus = enable;
        } else {
            this.renderingOptions.showFocus = !this.renderingOptions.showFocus;
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
        var translationPoint: IPoint = this.grid.getTranslation(this.focus.x, this.focus.y, this.map.columns, this.map.rows);
        this.context.translate(translationPoint.x, translationPoint.y);
    }

    updateContext(canvas: HTMLCanvasElement) {
        this.context = <CanvasRenderingContext2D> canvas.getContext("2d");
        this.context.scale(this.grid.scale, this.grid.scale);
    }
}