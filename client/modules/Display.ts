/// <reference path="Resource.ts" />
 
/**
 * Module for canvas abstraction
 */
module Display {

    var canvas: HTMLCanvasElement;
    export var canvasH: number; //TODO rimuovere export
    export var canvasW: number; //TODO rimuovere export
    var rows: number;
    var columns: number;
    var cellH: number;
    var cellW: number;
    var halfRows: number;
    var halfColumns: number;

    export function init(
        cnvs: HTMLCanvasElement) {
        canvas = cnvs;
        Resource.loadPropertes("l4w", deferredInit);
    };

    function deferredInit(props) {
        cellH = props["cellHeight"];
        cellW = props["cellWidth"];
        refresh();
    };

    export function mapPosition(
        x: number,
        y: number) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / cellH);
        var j = Math.floor((y - rect.top) / cellW);
        return { x: i, y: j };
    };

    export function refresh() {
        canvasH = canvas.height;
        canvasW = canvas.width;
        rows = Math.floor(canvasH / cellH);
        columns = Math.floor(canvasW / cellW);
        halfRows = rows/2;
        halfColumns = columns/2;
    };
    
    export function getMinX(focusX: number) {
        var val = Math.floor((focusX/cellW - halfColumns));
        if(val < 0) {
           val = 0; 
        }
        return val;
    };
    export function getMinY(focusY: number) {
        var val = Math.floor((focusY/cellH - halfRows));
        if(val < 0) {
           val = 0; 
        }
        return val;
    };
    export function getMaxX(focusX: number,limit?: number) {
        var val = Math.ceil((focusX/cellW + halfColumns));
        if(val > limit) {
           val = limit; 
        }
        return val;
    };
    export function getMaxY(focusY: number,limit?: number) {
        var val = Math.ceil((focusY/cellH + halfRows));
        if(val > limit) {
           val = limit; 
        }
        return val;
    };
    export function getOffsetX(focusX: number) {
       return focusX % cellW;
    }
    export function getOffsetY(focusY: number) {
       return focusY % cellH;
    }
    
    export function getPointerX(pointerX: number) {
        return (pointerX+0.5)*cellW;
    }
    export function getPointerY(pointerY: number) {
        return (pointerY+0.5)*cellH;
    }
}