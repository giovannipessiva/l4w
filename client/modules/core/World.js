var World;
(function (World) {
    var Map = (function () {
        function Map() {
            this.rows = 30;
            this.columns = 30;
        }
        Map.prototype.render = function (events, xFocus, yFocus) {
            for (var layer in this.layers) {
                layer.render(events, xFocus, yFocus);
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
        MapLayer.prototype.render = function (events, xFocus, yFocus) {
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
