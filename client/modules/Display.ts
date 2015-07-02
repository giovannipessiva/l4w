/// <reference path="Resource.ts" />
 
/**
 * Module for canvas abstraction
 */
module Display {

    var canvas: HTMLCanvasElement;
    var canvasH: number;
    var canvasW: number;
    var rows: number;
    var columns: number;
    var cellH: number;
    var cellW: number;

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
    };
}