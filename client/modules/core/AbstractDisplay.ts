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
    
    scale: number;

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        this.canvas = cnvs;
        
        (function(display) {
            Resource.loadPropertes("l4w", function(props: Map<string,string>) {
                display.deferredInit(props);
                onCompleted();
            });
        })(this);
    }

    deferredInit(props: Map<string,string>) {
        this.updateSizingDerivates();
        this.refresh();
    }
    
    updateSizingDerivates(){
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
        context.clearRect(0, 0, this.baseW, this.baseH);
    }

    mapPosition(
        x: number,
        y: number) {
        var rect = this.canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / (this.cellW * this.scale));
        var j = Math.floor((y - rect.top) / (this.cellH * this.scale));
        return { x: i, y: j };
    }

    getBoundariesX(focusX: number, limit: number): { min: number; max: number } {
        var focusCell = Math.round(focusX / this.cellW);
        var min = focusCell - this.halfColumns;
        var max = focusCell + this.halfColumns;
        return this.checkBoundariesLimit(min, max, limit);
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

    getPointerX(pointerX: number) {
        return (pointerX + 0.5) * this.cellW;
    }
    getPointerY(pointerY: number) {
        return (pointerY + 0.5) * this.cellH;
    }
}