/// <reference path="Actor.ts" />
/// <reference path="World.ts" />
/// <reference path="util/Constant.ts" />
/// <reference path="util/Time.ts" />

interface Point {
    x: number;
    y: number;
};

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

    focus: Point;
    pointer: Point;

    renderingOptions: World.Options;
    layers: number;

    context: CanvasRenderingContext2D;
    display: AbstractDisplay;

    constructor(display: AbstractDisplay) {
        this.map = new World.Map(display);
        this.focus = {
            x: 6 * 32, y: 6 * 32
        };
        this.pointer = {
            x: 0, y: 0
        };
        this.renderingOptions = new World.Options();
        this.layers = this.map.getLayers();
        this.display = display;
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

        if (this.mainGameLoop_pre() == false) {
            return;
        }

        var boundaries = this.display.getBoundariesY(this.focus.y, this.map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        boundaries = this.display.getBoundariesX(this.focus.x, this.map.columns);
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
        this.display.clear(this.context); //TODO rimuovere a regime
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
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.arc(
                this.display.mapCoordinateX(this.pointer.x),
                this.display.mapCoordinateY(this.pointer.y),
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
        this.pointer.x = x;
        this.pointer.y = y;
    }

    moveFocus(direction: Constant.Direction) {
        //TODO class Movable
        switch (direction) {
            case Constant.Direction.UP: this.focus.y -= +this.display.cellH; break;
            case Constant.Direction.DOWN: this.focus.y += +this.display.cellH; break;
            case Constant.Direction.LEFT: this.focus.x -= +this.display.cellW; break;
            case Constant.Direction.RIGHT: this.focus.x += +this.display.cellW; break;
        }
        var translationPoint: Point = this.display.getTranslation(this.focus.x, this.focus.y, this.map.columns, this.map.rows);
        this.context.translate(translationPoint.x, translationPoint.y);
    }

    updateContext(canvas: HTMLCanvasElement) {
        this.context = <CanvasRenderingContext2D> canvas.getContext("2d");
        this.context.scale(this.display.scale, this.display.scale);
    }
}