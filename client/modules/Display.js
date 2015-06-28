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
        cellH = 32;
        cellW = 32;
        rows = Math.floor(canvasH / cellH);
        columns = Math.floor(canvasW / cellW);
    }
    Display.init = init;
    ;
    function mapPosition(x, y) {
        var rect = canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / cellH);
        var j = Math.floor((y - rect.top) / cellW);
        return { x: i, y: j };
    }
    Display.mapPosition = mapPosition;
})(Display || (Display = {}));
