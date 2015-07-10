;
var nextAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(this.mainGameLoop, this.refreshInterval);
};
var AbstractScene = (function () {
    function AbstractScene() {
        this.map = new World.Map();
        this.focus = {
            x: 0,
            y: 0
        };
        this.pointer = {
            x: 0,
            y: 0
        };
        this.renderingOptions = new World.Options();
        this.layers = this.map.getLayers();
    }
    AbstractScene.prototype.start = function (canvas) {
        this.updateContext(canvas);
        this.mainGameLoop();
    };
    AbstractScene.prototype.mainGameLoop = function () {
        var scene = this;
        nextAnimationFrame(function () {
            scene.mainGameLoop();
        });
        if (this.mainGameLoop_pre() == false) {
            return;
        }
        var boundaries = Display.getBoundariesY(this.focus.y, this.map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        for (var y = minRow; y <= maxRow; y++) {
            this.renderRow(y);
            this.renderEventRow(y);
        }
        this.renderPointer();
        this.mainGameLoop_post();
    };
    AbstractScene.prototype.mainGameLoop_pre = function () {
        Display.clear(this.context);
        return true;
    };
    AbstractScene.prototype.mainGameLoop_post = function () {
    };
    AbstractScene.prototype.renderRow = function (y) {
        var boundaries = Display.getBoundariesX(this.focus.x, this.map.columns);
        var minColumn = boundaries.min;
        var maxColumn = boundaries.max;
        for (var x = minColumn; x <= maxColumn; x++) {
            this.map.render(this.context, x, y, this.renderingOptions);
        }
    };
    AbstractScene.prototype.renderEventRow = function (row) {
    };
    AbstractScene.prototype.renderPointer = function () {
        if (this.pointer.x != null && this.pointer.y != null) {
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.arc(Display.getPointerX(this.pointer.x), Display.getPointerY(this.pointer.y), 18, 0, Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.globalAlpha = 0.4;
            this.context.fill();
            this.context.restore();
        }
    };
    AbstractScene.prototype.toggleGrid = function (enable) {
        if (enable != null) {
            this.renderingOptions.showGrid = enable;
        }
        else {
            this.renderingOptions.showGrid = !this.renderingOptions.showGrid;
        }
    };
    AbstractScene.prototype.toggleCellNumbering = function (enable) {
        if (enable != null) {
            this.renderingOptions.showCellNumbers = enable;
        }
        else {
            this.renderingOptions.showCellNumbers = !this.renderingOptions.showCellNumbers;
        }
    };
    AbstractScene.prototype.updatePointer = function (x, y) {
        this.pointer.x = x;
        this.pointer.y = y;
    };
    AbstractScene.prototype.updateContext = function (canvas) {
        this.context = canvas.getContext("2d");
        this.context.scale(Display.scale, Display.scale);
    };
    return AbstractScene;
})();
