var Display;
(function (Display) {
    var canvas;
    var canvasH;
    var canvasW;
    var rows;
    var columns;
    var cellH;
    var cellW;
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
    }
    Display.refresh = refresh;
    ;
})(Display || (Display = {}));
