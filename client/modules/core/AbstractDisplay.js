var AbstractDisplay = (function () {
    function AbstractDisplay(cnvs, onCompleted) {
        this.canvas = cnvs;
        this.currentTranslation = { x: 0, y: 0 };
        (function (display) {
            Resource.loadPropertes("l4w", function (props) {
                display.deferredInit(props);
                onCompleted();
            });
        })(this);
    }
    AbstractDisplay.prototype.deferredInit = function (props) {
        this.updateSizingDerivates();
        this.refresh();
    };
    AbstractDisplay.prototype.updateSizingDerivates = function () {
        this.baseH = this.cellH * this.rows;
        this.baseW = this.cellW * this.columns;
        this.halfRows = Math.floor(this.rows / 2);
        this.halfColumns = Math.floor(this.columns / 2);
    };
    AbstractDisplay.prototype.refresh = function () {
        this.canvas.height = this.baseH * this.scale;
        this.canvas.width = this.baseW * this.scale;
    };
    AbstractDisplay.prototype.clear = function (context) {
        context.clearRect(0, 0, this.baseW, this.baseH);
    };
    AbstractDisplay.prototype.mapPosition = function (x, y) {
        var rect = this.canvas.getBoundingClientRect();
        var i = Math.floor((x - rect.left) / (this.cellW * this.scale));
        var j = Math.floor((y - rect.top) / (this.cellH * this.scale));
        return { x: i, y: j };
    };
    AbstractDisplay.prototype.getTranslation = function (focusX, focusY, maxColumns, maxRows) {
        var x = focusX - (this.halfColumns * this.cellW);
        var y = focusY - (this.halfRows * this.cellH);
        if (x < 0) {
            x = 0;
        }
        else {
            var maxTranslationX = (maxColumns - this.halfColumns) * this.cellW;
            if (x > maxTranslationX) {
                x = maxTranslationX;
            }
        }
        if (y < 0) {
            y = 0;
        }
        else {
            var maxTranslationY = (maxRows - this.halfRows) * this.cellH;
            if (y > maxTranslationY) {
                y = maxTranslationY;
            }
        }
        var newTranslation = { x: x, y: y };
        x = this.currentTranslation.x - x;
        y = this.currentTranslation.y - y;
        this.currentTranslation = newTranslation;
        return { x: x, y: y };
    };
    AbstractDisplay.prototype.getBoundariesX = function (focusX, limit) {
        var focusCell = Math.round(focusX / this.cellW);
        var min = focusCell - this.halfColumns;
        var max = focusCell + this.halfColumns;
        return this.checkBoundariesLimit(min, max, limit);
    };
    AbstractDisplay.prototype.getBoundariesY = function (focusY, limit) {
        var focusCell = Math.round(focusY / this.cellH);
        var min = focusCell - this.halfRows;
        var max = focusCell + this.halfRows;
        return this.checkBoundariesLimit(min, max, limit - 1);
    };
    AbstractDisplay.prototype.checkBoundariesLimit = function (min, max, maxLimit) {
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
    };
    AbstractDisplay.prototype.getOffsetX = function (focusX) {
        return focusX % this.cellW;
    };
    AbstractDisplay.prototype.getOffsetY = function (focusY) {
        return focusY % this.cellH;
    };
    AbstractDisplay.prototype.mapCoordinateX = function (pointerX) {
        return (pointerX + 0.5) * this.cellW;
    };
    AbstractDisplay.prototype.mapCoordinateY = function (pointerY) {
        return (pointerY + 0.5) * this.cellH;
    };
    return AbstractDisplay;
})();
