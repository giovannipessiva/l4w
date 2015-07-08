var Display;
(function (Display) {
    var canvas;
    var baseH;
    var baseW;
    var rows;
    var columns;
    Display.cellH;
    Display.cellW;
    var halfRows;
    var halfColumns;
    var canvasRatio;
    Display.scale;
    function init(cnvs) {
        canvas = cnvs;
        Resource.loadPropertes("l4w", deferredInit);
    }
    Display.init = init;
    ;
    function deferredInit(props) {
        Display.cellH = props["cellHeight"];
        Display.cellW = props["cellWidth"];
        rows = props["rows"];
        columns = props["columns"];
        canvasRatio = props["canvasRatio"];
        baseH = Display.cellH * rows;
        baseW = Display.cellW * columns;
        halfRows = Math.floor(rows / 2);
        halfColumns = Math.floor(columns / 2);
        refresh();
    }
    ;
    function refresh() {
        var ratioH = baseH / height();
        var ratioW = baseW / width();
        Display.scale = canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        canvas.height = baseH * Display.scale;
        canvas.width = baseW * Display.scale;
    }
    Display.refresh = refresh;
    ;
    function clear() {
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    }
    Display.clear = clear;
    function width() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    }
    function height() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    }
    function mapPosition(x, y) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / (Display.cellW * Display.scale));
        var j = Math.floor((y - rect.top) / (Display.cellH * Display.scale));
        return { x: i, y: j };
    }
    Display.mapPosition = mapPosition;
    ;
    function getBoundariesX(focusX, limit) {
        var min = Math.floor(focusX / Display.cellW) - halfColumns;
        var max = Math.ceil(focusX / Display.cellW) + halfColumns;
        return checkBoundariesLimit(min, max, limit);
    }
    Display.getBoundariesX = getBoundariesX;
    ;
    function getBoundariesY(focusY, limit) {
        var min = Math.floor(focusY / Display.cellH) - halfRows;
        var max = Math.ceil(focusY / Display.cellH) + halfRows;
        return checkBoundariesLimit(min, max, limit);
    }
    Display.getBoundariesY = getBoundariesY;
    ;
    function checkBoundariesLimit(min, max, limit) {
        if (min < 0) {
            max -= min;
            min = 0;
        }
        if (max > limit) {
            min -= (max - limit);
            max = limit;
        }
        return {
            min: min,
            max: max
        };
    }
    function getOffsetX(focusX) {
        return focusX % Display.cellW;
    }
    Display.getOffsetX = getOffsetX;
    function getOffsetY(focusY) {
        return focusY % Display.cellH;
    }
    Display.getOffsetY = getOffsetY;
    function getPointerX(pointerX) {
        return (pointerX + 0.5) * Display.cellW;
    }
    Display.getPointerX = getPointerX;
    function getPointerY(pointerY) {
        return (pointerY + 0.5) * Display.cellH;
    }
    Display.getPointerY = getPointerY;
})(Display || (Display = {}));
