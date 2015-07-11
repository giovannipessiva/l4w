;
var nextAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(this.mainGameLoop, this.refreshInterval);
};
var AbstractScene = (function () {
    function AbstractScene(display) {
        this.map = new World.Map(display);
        this.focus = {
            x: 6 * 32,
            y: 6 * 32
        };
        this.pointer = {
            x: 0,
            y: 0
        };
        this.renderingOptions = new World.Options();
        this.layers = this.map.getLayers();
        this.display = display;
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
        var boundaries = this.display.getBoundariesY(this.focus.y, this.map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        for (var y = minRow; y <= maxRow; y++) {
            this.renderRow(y);
            this.renderEventRow(y);
        }
        this.renderFocus();
        this.renderPointer();
        this.mainGameLoop_post();
    };
    AbstractScene.prototype.mainGameLoop_pre = function () {
        this.display.clear(this.context);
        return true;
    };
    AbstractScene.prototype.mainGameLoop_post = function () {
    };
    AbstractScene.prototype.renderRow = function (y) {
        var boundaries = this.display.getBoundariesX(this.focus.x, this.map.columns);
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
            this.context.arc(this.display.mapCoordinateX(this.pointer.x), this.display.mapCoordinateY(this.pointer.y), 18, 0, Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.globalAlpha = 0.4;
            this.context.fill();
            this.context.restore();
        }
    };
    AbstractScene.prototype.renderFocus = function () {
        if (this.focus.x != null && this.focus.y != null && this.renderingOptions.showFocus) {
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.BLACK;
            this.context.arc(this.focus.x, this.focus.y, 15, 0, Constant.DOUBLE_PI);
            this.context.closePath();
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
    AbstractScene.prototype.toggleFocus = function (enable) {
        if (enable != null) {
            this.renderingOptions.showFocus = enable;
        }
        else {
            this.renderingOptions.showFocus = !this.renderingOptions.showFocus;
        }
    };
    AbstractScene.prototype.updatePointer = function (x, y) {
        this.pointer.x = x;
        this.pointer.y = y;
    };
    AbstractScene.prototype.moveFocus = function (direction) {
        switch (direction) {
            case Constant.Direction.UP:
                this.focus.y -= +this.display.cellH;
                break;
            case Constant.Direction.DOWN:
                this.focus.y += +this.display.cellH;
                break;
            case Constant.Direction.LEFT:
                this.focus.x -= +this.display.cellW;
                break;
            case Constant.Direction.RIGHT:
                this.focus.x += +this.display.cellW;
                break;
        }
        var translationPoint = this.display.getTranslation(this.focus.x, this.focus.y, this.map.columns, this.map.rows);
        this.context.translate(translationPoint.x, translationPoint.y);
    };
    AbstractScene.prototype.updateContext = function (canvas) {
        this.context = canvas.getContext("2d");
        this.context.scale(this.display.scale, this.display.scale);
    };
    return AbstractScene;
})();
