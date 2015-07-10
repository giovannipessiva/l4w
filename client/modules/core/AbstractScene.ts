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

    constructor() {
        this.map = new World.Map();
        this.focus = {
            x: 0, y: 0
        };
        this.pointer = {
            x: 0, y: 0
        };
        this.renderingOptions = new World.Options();
        this.layers = this.map.getLayers();
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

        var boundaries = Display.getBoundariesY(this.focus.y, this.map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        for (var y = minRow; y <= maxRow; y++) {
            this.renderRow(y);
            this.renderEventRow(y);
        }

        this.renderPointer();
        this.mainGameLoop_post();
    }

    protected mainGameLoop_pre(): boolean {
        Display.clear(this.context); //TODO rimuovere a regime
        return true;
    }

    protected mainGameLoop_post() {
    }

    private renderRow(y: number) {
        var boundaries = Display.getBoundariesX(this.focus.x, this.map.columns);
        var minColumn = boundaries.min;
        var maxColumn = boundaries.max;
        for (var x = minColumn; x <= maxColumn; x++) {
            this.map.render(this.context, x, y, this.renderingOptions);
        }
    }

    private renderEventRow(row: number) {

    }

    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.arc(
                Display.getPointerX(this.pointer.x),
                Display.getPointerY(this.pointer.y),
                18,
                0,
                Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.globalAlpha = 0.4;
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

    updatePointer(x: number, y: number) {
        this.pointer.x = x;
        this.pointer.y = y;
    }

    updateContext(canvas: HTMLCanvasElement) {
        this.context = canvas.getContext("2d");
        this.context.scale(Display.scale, Display.scale);
    }
}