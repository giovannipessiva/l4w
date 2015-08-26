/// <reference path="util/Resource.ts" />
/// <reference path="util/Commons.ts" />

/**
 * Module for managing canvas autosizing
 */
class AbstractGrid {

    protected canvas: HTMLCanvasElement;
    protected baseH: number;
    protected baseW: number;
    protected rows: number;
    protected columns: number;
    cellH: number;
    cellW: number;
    protected halfRows: number;
    protected halfColumns: number;
    private currentTranslation: Point;

    scale: number;

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        this.canvas = cnvs;
        this.currentTranslation = { x: 0, y: 0 };

        (function(grid) {
            Resource.loadProperties(function(props: Map<string, string>) {
                grid.deferredInit(props);
                grid.updateSizingDerivates();
                grid.refresh();
                onCompleted();
            });
        })(this);
    }

    deferredInit(props: Map<string, string>) {
        this.cellH = props["cellHeight"];
        this.cellW = props["cellWidth"];
    }

    updateSizingDerivates() {
        this.baseH = this.cellH * this.rows;
        this.baseW = this.cellW * this.columns;
        this.halfRows = Math.floor(this.rows / 2);
        this.halfColumns = Math.floor(this.columns / 2);
    }

    refresh() {
        this.canvas.height = this.baseH * this.scale;
        this.canvas.width = this.baseW * this.scale;
    }

    clear(context: CanvasRenderingContext2D) {
        context.clearRect(
            this.currentTranslation.x,
            this.currentTranslation.y,
            this.baseW + this.currentTranslation.x,
            this.baseH + this.currentTranslation.y);
    }

    /**
     * Convert a position in the webpage to a position on the grid (cell coordinates)
     * @param position : position in pixels (absolute coordinates in the page)
     */
    mapPositionToGrid(position: Point) : Point {
        var rect = this.canvas.getBoundingClientRect(); //TODO puo' essere recuperato una volta sola
        var i = Math.floor((position.x - rect.left) / (this.cellW  * this.scale) + this.currentTranslation.x / this.cellW); //TODO precalcola le cell scalate
        var j = Math.floor((position.y - rect.top) / (this.cellH * this.scale) + this.currentTranslation.y / this.cellH);
        return { x: i, y: j };
    }
    
    /**
     * Convert a position on the grid to a position on the canvas (relative coordinates in pixels)
     * @param position : position in cell coordinates
     */
    mapCellToCanvas(position: Point) : Point {
        var rect = this.canvas.getBoundingClientRect(); //TODO puo' essere recuperato una volta sola
        var x = (position.x + 0.5) * this.cellW;
        var y = (position.y + 0.5) * this.cellH;
        return { x: x, y: y };
    }

    /**
     * Returns the translation (as cell numbers) applied to the canvas
     */
    getTranslation(focusX: number, focusY: number, maxColumns: number, maxRows: number): Point {
        var leftTopX = focusX - (this.halfColumns * this.cellW);
        if (leftTopX < 0) {
            leftTopX = 0;
        } else {
            var maxTranslationX = (maxColumns - this.columns) * this.cellW;
            if (leftTopX > maxTranslationX) {
                leftTopX = maxTranslationX;
            }
        }
        var leftTopY = focusY - (this.halfRows * this.cellH);
        if (leftTopY < 0) {
            leftTopY = 0;
        } else {
            var maxTranslationY = (maxRows - this.rows) * this.cellH;
            if (leftTopY > maxTranslationY) {
                leftTopY = maxTranslationY;
            }
        }
        var newTranslation = { x: leftTopX, y: leftTopY };
        leftTopX = this.currentTranslation.x - leftTopX;
        leftTopY = this.currentTranslation.y - leftTopY;
        this.currentTranslation = newTranslation;
        return { x: leftTopX, y: leftTopY };
    }

    getBoundariesX(focusX: number, limit: number): { min: number; max: number } {
        var focusCell = Math.round(focusX / this.cellW);
        var min = focusCell - this.halfColumns;
        var max = focusCell + this.halfColumns;
        return this.checkBoundariesLimit(min, max, limit - 1);
    }

    getBoundariesY(focusY: number, limit: number): { min: number; max: number } {
        var focusCell = Math.round(focusY / this.cellH);
        var min = focusCell - this.halfRows;
        var max = focusCell + this.halfRows;
        return this.checkBoundariesLimit(min, max, limit - 1);
    }

    private checkBoundariesLimit(min: number, max: number, maxLimit: number): { min: number; max: number } {
        if (min < 0) {
            max -= min;
            min = 0;
        }
        if (max > maxLimit) {
            min -= (max - maxLimit);
            max = maxLimit;
        }
        return {
            min: min,
            max: max
        };
    }

    getOffsetX(focusX: number) {
        return focusX % this.cellW;
    }
    getOffsetY(focusY: number) {
        return focusY % this.cellH;
    }
}