var Display;
(function (Display) {
    var canvas;
    var canvasH;
    var canvasW;
    var rows;
    var columns;
    var cellH;
    var cellW;
    var halfRows;
    var halfColumns;
    function init(cnvs) {
        canvas = cnvs;
        Resource.loadPropertes("l4w", deferredInit);
    }
    Display.init = init;
    ;
    function deferredInit(props) {
        cellH = props["cellHeight"];
        cellW = props["cellWidth"];
        refresh();
    }
    ;
    function mapPosition(x, y) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / cellH);
        var j = Math.floor((y - rect.top) / cellW);
        return { x: i, y: j };
    }
    Display.mapPosition = mapPosition;
    ;
    function refresh() {
        canvasH = canvas.height;
        canvasW = canvas.width;
        rows = Math.floor(canvasH / cellH);
        columns = Math.floor(canvasW / cellW);
        halfRows = rows / 2;
        halfColumns = columns / 2;
    }
    Display.refresh = refresh;
    ;
    function getMinX(focusX) {
        var val = Math.floor((focusX / cellW - halfColumns));
        if (val < 0) {
            val = 0;
        }
        return val;
    }
    Display.getMinX = getMinX;
    ;
    function getMinY(focusY) {
        var val = Math.floor((focusY / cellH - halfRows));
        if (val < 0) {
            val = 0;
        }
        return val;
    }
    Display.getMinY = getMinY;
    ;
    function getMaxX(focusX, limit) {
        var val = Math.ceil((focusX / cellW + halfColumns));
        if (val > limit) {
            val = limit;
        }
        return val;
    }
    Display.getMaxX = getMaxX;
    ;
    function getMaxY(focusY, limit) {
        var val = Math.ceil((focusY / cellH + halfRows));
        if (val > limit) {
            val = limit;
        }
        return val;
    }
    Display.getMaxY = getMaxY;
    ;
    function getOffsetX(focusX) {
        return focusX % cellW;
    }
    Display.getOffsetX = getOffsetX;
    function getOffsetY(focusY) {
        return focusY % cellH;
    }
    Display.getOffsetY = getOffsetY;
    function getPointerX(pointerX) {
        return (pointerX - 0.5) * cellW;
    }
    Display.getPointerX = getPointerX;
    function getPointerY(pointerY) {
        return (pointerY - 0.5) * cellH;
    }
    Display.getPointerY = getPointerY;
})(Display || (Display = {}));
