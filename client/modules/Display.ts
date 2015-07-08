/// <reference path="Resource.ts" />
 
/**
 * Module for managing canvas autosizing
 */
module Display {

    var canvas: HTMLCanvasElement;
    var baseH: number;
    var baseW: number;
    var rows: number;
    var columns: number;
    export var cellH: number;
    export var cellW: number;
    var halfRows: number;
    var halfColumns: number;
    var canvasRatio: number;
    export var scale: number;

    export function init(
        cnvs: HTMLCanvasElement) {
        canvas = cnvs;
        Resource.loadPropertes("l4w", deferredInit);
    };

    function deferredInit(props) {
        cellH = props["cellHeight"];
        cellW = props["cellWidth"];
        rows = props["rows"];
        columns = props["columns"];
        canvasRatio = props["canvasRatio"];
        baseH = cellH * rows;
        baseW = cellW * columns;
        halfRows = Math.floor(rows / 2);
        halfColumns = Math.floor(columns / 2);
        refresh();
    };

    export function refresh() {
        var ratioH = baseH / height();
        var ratioW = baseW / width();
        scale = canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        canvas.height = baseH * scale;
        canvas.width = baseW * scale; 
    };

    export function clear() {
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    }

    function width() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    }

    function height() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    }

    export function mapPosition(
        x: number,
        y: number) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / (cellW  * scale));
        var j = Math.floor((y - rect.top) / (cellH * scale));
        return { x: i, y: j };
    };
    
    export function getBoundariesX(focusX: number, limit: number) : { min: number; max: number }  {
        var min = Math.floor(focusX / cellW) - halfColumns;
        var max = Math.ceil(focusX / cellW) + halfColumns;
        return checkBoundariesLimit(min,max,limit);
    };
    
    export function getBoundariesY(focusY: number, limit: number) : { min: number; max: number }  {
        var min = Math.floor(focusY / cellH) - halfRows;
        var max = Math.ceil(focusY / cellH) + halfRows;
        return checkBoundariesLimit(min,max,limit);
    };
    
    function checkBoundariesLimit(min: number, max: number, limit: number)  : { min: number; max: number } {
        if (min < 0) {
            max -= min;
            min = 0;
        }
        if (max > limit) {
            min -= (max - limit);
            max = limit;
        }
        return {
            min:min,
            max:max
        };
    }

    export function getOffsetX(focusX: number) {
        return focusX % cellW;
    }
    export function getOffsetY(focusY: number) {
        return focusY % cellH;
    }

    export function getPointerX(pointerX: number) {
        return (pointerX + 0.5) * cellW;
    }
    export function getPointerY(pointerY: number) {
        return (pointerY + 0.5) * cellH;
    }
}