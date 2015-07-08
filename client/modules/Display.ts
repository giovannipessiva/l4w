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
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        canvas = cnvs;

        Resource.loadPropertes("l4w", function(props) {
            deferredInit(props);
            onCompleted();
        });
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

    export function clear(context: CanvasRenderingContext2D) {
        context.clearRect(0, 0, baseW, baseH);
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
        var i = Math.floor((x - rect.left) / (cellW * scale));
        var j = Math.floor((y - rect.top) / (cellH * scale));
        return { x: i, y: j };
    };

    export function getBoundariesX(focusX: number, limit: number): { min: number; max: number } {
        var focusCell = Math.round(focusX / cellW);
        var min = focusCell - halfColumns;
        var max = focusCell + halfColumns;
        return checkBoundariesLimit(min, max, limit);
    };

    export function getBoundariesY(focusY: number, limit: number): { min: number; max: number } {
        var focusCell = Math.round(focusY / cellH);
        var min = focusCell - halfRows;
        var max = focusCell + halfRows;
        return checkBoundariesLimit(min, max, limit - 1);
    };

    function checkBoundariesLimit(min: number, max: number, maxLimit: number): { min: number; max: number } {
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