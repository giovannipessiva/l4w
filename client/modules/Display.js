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
        canvasH = canvas.height;
        canvasW = canvas.width;
    }
    Display.init = init;
    ;
    var deferredInit;
    deferredInit = function (props) {
        cellH = props['cellHeight'];
        cellW = props['cellWidth'];
        rows = Math.floor(canvasH / cellH);
        columns = Math.floor(canvasW / cellW);
    };
    function mapPosition(x, y) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / cellH);
        var j = Math.floor((y - rect.top) / cellW);
        return { x: i, y: j };
    }
    Display.mapPosition = mapPosition;
})(Display || (Display = {}));
