var World;
(function (World) {
    var Map = (function () {
        function Map() {
            this.rows = 32;
            this.columns = 42;
            this.layers = [];
        }
        Map.prototype.render = function (context, x, y, renderingOptions) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
            if (renderingOptions != null) {
                if (renderingOptions.showGrid) {
                    context.strokeStyle = Constant.Color.RED;
                    context.strokeRect(x * Display.cellW, y * Display.cellH, Display.cellW, Display.cellH);
                }
                if (renderingOptions.showCellNumbers) {
                    context.fillStyle = Constant.Color.RED;
                    context.font = "bold 10px Arial";
                    context.fillText(x + "," + y, x * Display.cellW + 1, y * Display.cellH + 10);
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
            this.showFPS = false;
            this.showCellNumbers = false;
            this.fps = 0;
        }
        return Options;
    })();
    World.Options = Options;
})(World || (World = {}));
