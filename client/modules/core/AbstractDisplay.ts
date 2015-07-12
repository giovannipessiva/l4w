/// <reference path="util/Resource.ts" />

/**
 * Module for managing canvas autosizing
 */
class AbstractDisplay {

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

        (function(display) {
            Resource.loadPropertes("l4w", function(props: Map<string, string>) {
                display.deferredInit(props);
                onCompleted();
            });
        })(this);
    }

    deferredInit(props: Map<string, string>) {
        this.updateSizingDerivates();
        this.refresh();
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

    mapPosition(
        x: number,
        y: number) {
        var rect = this.canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left + this.currentTranslation.x) / (this.cellW * this.scale));
        var j = Math.floor((y - rect.top + this.currentTranslation.y) / (this.cellH * this.scale));
        return { x: i, y: j };
    }

    getTranslation(focusX: number, focusY: number, maxColumns: number, maxRows: number) {
        var x = focusX - (this.halfColumns * this.cellW);
        if (x < 0) {
            x = 0;
        } else {
            var maxTranslationX = (maxColumns - this.columns) * this.cellW;
            if (x > maxTranslationX) {
                x = maxTranslationX;
            }
        }
        var y = focusY - (this.halfRows * this.cellH);
        if (y < 0) {
            y = 0;
        } else {
            var maxTranslationY = (maxRows - this.rows) * this.cellH;
            if (y > maxTranslationY) {
                y = maxTranslationY;
            }
        }
        var newTranslation = { x: x, y: y };
        x = this.currentTranslation.x - x;
        y = this.currentTranslation.y - y;
        this.currentTranslation = newTranslation;
        return { x: x, y: y };
    }

    getBoundariesX(focusX: number, limit: number): { min: number; max: number } {
        var focusCell = Math.round(focusX / this.cellW);
        var min = focusCell - this.halfColumns;
        var max = focusCell + this.halfColumns;
        //console.log(min + " " + max);
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

    mapCoordinateX(pointerX: number) {
        return (pointerX + 0.5) * this.cellW;
    }
    mapCoordinateY(pointerY: number) {
        return (pointerY + 0.5) * this.cellH;
    }
}