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
        halfRows = rows / 2;
        halfColumns = columns / 2;
        refresh();
    }
    ;
    function refresh() {
        var ratioH = baseH / height();
        var ratioW = baseW / width();
        var bestRatio = canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        canvas.getContext("2d").scale(bestRatio, bestRatio);
        canvas.height = baseH * bestRatio;
        canvas.width = baseW * bestRatio;
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
        var i = Math.floor((x - rect.left) / Display.cellH);
        var j = Math.floor((y - rect.top) / Display.cellW);
        return { x: i, y: j };
    }
    Display.mapPosition = mapPosition;
    ;
    function getMinX(focusX) {
        var val = Math.floor((focusX / Display.cellW - halfColumns));
        if (val < 0) {
            val = 0;
        }
        return val;
    }
    Display.getMinX = getMinX;
    ;
    function getMinY(focusY) {
        var val = Math.floor((focusY / Display.cellH - halfRows));
        if (val < 0) {
            val = 0;
        }
        return val;
    }
    Display.getMinY = getMinY;
    ;
    function getMaxX(focusX, limit) {
        var val = Math.ceil((focusX / Display.cellW + halfColumns));
        if (val > limit) {
            val = limit;
        }
        return val;
    }
    Display.getMaxX = getMaxX;
    ;
    function getMaxY(focusY, limit) {
        var val = Math.ceil((focusY / Display.cellH + halfRows));
        if (val > limit) {
            val = limit;
        }
        return val;
    }
    Display.getMaxY = getMaxY;
    ;
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
