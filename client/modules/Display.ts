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
        halfRows = rows / 2;
        halfColumns = columns / 2;
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

    export function getMinX(focusX: number) {
        var val = Math.floor((focusX / cellW - halfColumns));
        if (val < 0) {
            val = 0;
        }
        return val;
    };
    export function getMinY(focusY: number) {
        var val = Math.floor((focusY / cellH - halfRows));
        if (val < 0) {
            val = 0;
        }
        return val;
    };
    export function getMaxX(focusX: number, limit?: number) {
        var val = Math.ceil((focusX / cellW + halfColumns));
        if (val > limit) {
            val = limit;
        }
        return val;
    };
    export function getMaxY(focusY: number, limit?: number) {
        var val = Math.ceil((focusY / cellH + halfRows));
        if (val > limit) {
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
        return (pointerX + 0.5) * cellW;
    }
    export function getPointerY(pointerY: number) {
        return (pointerY + 0.5) * cellH;
    }
}