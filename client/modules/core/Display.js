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
    function init(cnvs, onCompleted, dynamic) {
        canvas = cnvs;
        Resource.loadPropertes("l4w", function (props) {
            deferredInit(props, dynamic);
            baseH = Display.cellH * rows;
            baseW = Display.cellW * columns;
            halfRows = Math.floor(rows / 2);
            halfColumns = Math.floor(columns / 2);
            refresh();
            onCompleted();
        });
    }
    Display.init = init;
    ;
    function deferredInit(props, dynamic) {
        if (dynamic == null || dynamic) {
            Display.cellH = props["cellHeight"];
            Display.cellW = props["cellWidth"];
            rows = props["rows"];
            columns = props["columns"];
            canvasRatio = props["canvasRatio"];
        }
        else {
            Display.cellH = props["cellHeightEditor"];
            Display.cellW = props["cellWidthEditor"];
            rows = props["rowsEditor"];
            columns = props["columnsEditor"];
            canvasRatio = props["canvasRatioEditor"];
        }
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
    function clear(context) {
        context.clearRect(0, 0, baseW, baseH);
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
        var focusCell = Math.round(focusX / Display.cellW);
        var min = focusCell - halfColumns;
        var max = focusCell + halfColumns;
        return checkBoundariesLimit(min, max, limit);
    }
    Display.getBoundariesX = getBoundariesX;
    ;
    function getBoundariesY(focusY, limit) {
        var focusCell = Math.round(focusY / Display.cellH);
        var min = focusCell - halfRows;
        var max = focusCell + halfRows;
        return checkBoundariesLimit(min, max, limit - 1);
    }
    Display.getBoundariesY = getBoundariesY;
    ;
    function checkBoundariesLimit(min, max, maxLimit) {
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
