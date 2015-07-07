/// <reference path="Resource.ts" />
 
/**
 * Module for canvas abstraction
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
        var bestRatio = canvasRatio / (ratioH < ratioW ? ratioH : ratioW);
        canvas.getContext("2d").scale(bestRatio, bestRatio);
        canvas.height = baseH;
        canvas.width = baseW;   
        console.log(canvas.height + " x " + canvas.width + ", scale=" + bestRatio);
    };

    export function clear() {
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    }

    function width() {
        return document.body.clientWidth;
    }

    function height() {
        return document.body.clientHeight;
    }

    export function mapPosition(
        x: number,
        y: number) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / cellH);
        var j = Math.floor((y - rect.top) / cellW);
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