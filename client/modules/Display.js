var Display;
(function (Display) {
    var canvas;
    Display.canvasH;
    Display.canvasW;
    var rows;
    var columns;
    Display.cellH;
    Display.cellW;
    var halfRows;
    var halfColumns;
    function init(cnvs) {
        canvas = cnvs;
        Resource.loadPropertes("l4w", deferredInit);
    }
    Display.init = init;
    ;
    function deferredInit(props) {
        Display.cellH = props["cellHeight"];
        Display.cellW = props["cellWidth"];
        refresh();
    }
    ;
    function mapPosition(x, y) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / Display.cellH);
        var j = Math.floor((y - rect.top) / Display.cellW);
        return { x: i, y: j };
    }
    Display.mapPosition = mapPosition;
    ;
    function refresh() {
        Display.canvasH = canvas.height;
        Display.canvasW = canvas.width;
        rows = Math.floor(Display.canvasH / Display.cellH);
        columns = Math.floor(Display.canvasW / Display.cellW);
        halfRows = rows / 2;
        halfColumns = columns / 2;
    }
    Display.refresh = refresh;
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
