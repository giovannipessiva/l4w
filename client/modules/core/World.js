var World;
(function (World) {
    var Map = (function () {
        function Map(display) {
            this.rows = 300;
            this.columns = 400;
            this.layers = [];
            this.display = display;
        }
        Map.prototype.render = function (context, x, y, renderingOptions) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
            if (renderingOptions != null) {
                if (renderingOptions.showGrid) {
                    context.strokeStyle = Constant.Color.RED;
                    context.strokeRect(x * this.display.cellW, y * this.display.cellH, this.display.cellW, this.display.cellH);
                }
                if (renderingOptions.showEditorGrid) {
                    context.save();
                    context.globalAlpha = 0.4;
                    context.strokeStyle = Constant.Color.GREY;
                    context.strokeRect(x * this.display.cellW, y * this.display.cellH, this.display.cellW, this.display.cellH);
                    context.restore();
                }
                if (renderingOptions.showCellNumbers) {
                    context.fillStyle = Constant.Color.RED;
                    context.font = "bold 10px Arial";
                    context.fillText(x + "," + y, x * this.display.cellW + 1, y * this.display.cellH + 10);
                }
            }
        };
        Map.prototype.getLayers = function () {
            return this.layers.length;
        };
        return Map;
    })();
    World.Map = Map;
    ;
    var MapLayer = (function () {
        function MapLayer() {
        }
        MapLayer.prototype.render = function (context, x, y) {
        };
        return MapLayer;
    })();
    var Options = (function () {
        function Options() {
            this.showGrid = false;
            this.showEditorGrid = false;
            this.showFPS = false;
            this.showCellNumbers = false;
            this.fps = 0;
        }
        return Options;
    })();
    World.Options = Options;
})(World || (World = {}));
