/// <reference path="../model/Map.ts" />
/// <reference path="../AbstractGrid.ts" />

/**
 * Helper class for handling game maps
 */
namespace MapManager {

    export function save() {
        //TODO save the map, sending the updated JSON to server
    }
    
    export function loadMap(mapId: number, canvas: HTMLCanvasElement, callback: (map: IMap) => void) {
        Resource.load(mapId+"", Resource.TypeEnum.MAP, function(resourceText: string) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading map: " + mapId);
                callback(null);
            } else {
                try {
                    var map: IMap = JSON.parse(resourceText);
                    callback(map);
                } catch (exception) {
                    if (exception.name === "SyntaxError") {
                        console.error("Error while parsing map: " + mapId);
                    } else if (exception.name === "TypeError") {
                        console.error("Error while reading map: " + mapId);
                    } else {
                        console.error(exception);
                    }
                    Errors.showError(canvas.getContext("2d"));
                    callback(null);
                }
            }
        });
    }

    export function renderLayer(grid: AbstractGrid, map: IMap, layer: IMapLayer, tileImage: HTMLImageElement, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        for (var y = minRow; y <= maxRow; y++) { //TODO verifica che non siano necessari controlli rispetto alla dimensione del layer
            for (var x = minColumn; x <= maxColumn; x++) {
                var cellIndex = x + y * map.width;
                if (layer.data.length < cellIndex) {
                    return;
                }
                var tileGID = layer.data[cellIndex];
                if (tileGID === null) {
                    continue;
                }
                var tilePoint = Utils.gIDToPoint(tileGID, Math.floor(map.tileset.imagewidth / grid.cellW)); //TODO ottimizzabile, precalcola
                context.drawImage(
                    tileImage,
                    Math.floor(tilePoint.x * grid.cellW), Math.floor(tilePoint.y * grid.cellH), grid.cellW, grid.cellH,
                    Math.floor(x * grid.cellW), Math.floor(y * grid.cellH), grid.cellW, grid.cellH);
            }
        }
    }

    export function renderGlobalEffects(grid: AbstractGrid, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {

    }

    export function renderUI(grid: AbstractGrid, context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        for (var y = minRow; y <= maxRow; y++) {
            for (var x = minColumn; x <= maxColumn; x++) {

                if (!Utils.isEmpty(renderingConfiguration)) {
                    if (renderingConfiguration.showGrid) {
                        context.strokeStyle = Constant.Color.RED;
                        context.strokeRect(
                            x * grid.cellW,
                            y * grid.cellH,
                            grid.cellW,
                            grid.cellH);
                    }
                    if (renderingConfiguration.showEditorGrid) {
                        context.save();
                        context.globalAlpha = 0.4;
                        context.strokeStyle = Constant.Color.GREY;
                        context.strokeRect(
                            x * grid.cellW,
                            y * grid.cellH,
                            grid.cellW,
                            grid.cellH);
                        context.restore();
                    }
                    if (renderingConfiguration.showCellNumbers) {
                        context.fillStyle = Constant.Color.RED;
                        context.font = "bold 10px Arial";
                        context.fillText(
                            x + "," + y,
                            x * grid.cellW + 1,
                            y * grid.cellH + 10);
                    }
                }
            }
        }
    }

    export function renderGlobalUI(grid: AbstractGrid, context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration) {
        if (!Utils.isEmpty(renderingConfiguration)) {
            if (renderingConfiguration.enableSelection && !Utils.isEmpty(renderingConfiguration.selectPointStart)) {
                var x = renderingConfiguration.selectPointStart.x * grid.cellW;
                var y = renderingConfiguration.selectPointStart.y * grid.cellH;

                var w;
                var h;
                if (Utils.isEmpty(renderingConfiguration.selectPointEnd)) {
                    h = grid.cellH;
                    w = grid.cellW;
                } else {
                    var x2 = renderingConfiguration.selectPointEnd.x * grid.cellW;
                    var y2 = renderingConfiguration.selectPointEnd.y * grid.cellH;
                    if (x > x2) {
                        w = x - x2;
                        x = x2;
                    } else {
                        w = x2 - x;
                    }
                    if (y > y2) {
                        h = y - y2;
                        y = y2;
                    } else {
                        h = y2 - y;
                    }
                    w += grid.cellW;
                    h += grid.cellH;
                }
                context.save();
                context.strokeStyle = Constant.Color.RED;
                context.lineWidth = 3;
                context.strokeRect(x, y, w, h);
                context.restore();

            }
        }
    }

    export function resizeMap(map: IMap, rows: number, columns: number) {
        let oldWidth: number = map.width;
        let newWidth: number = columns;
        let oldHeight: number = map.height;
        let newHeight: number = rows;
        if ((oldWidth === newWidth && oldHeight === newHeight) || Utils.isEmpty(map)) {
            return;
        }
        let referenceIndex: number = Math.min(oldWidth, newWidth);
        if (newWidth < oldWidth) {
            var removedColumns: number = oldWidth - newWidth;
        } else {
            var newColumns = [];
            for (let n = 0; n < newWidth - oldWidth; n++) {
                newColumns[n] = null;
                
            }
        }

        for (let i = 0; i < map.layers.length; i++) {
            let layer = map.layers[i];
            if (!Utils.isEmpty(layer.data)) {
                // Correct existing rows
                if (oldWidth !== newWidth) {
                    for (let y = 0; y < oldHeight; y++) {
                        if(!Utils.isEmpty(removedColumns)) {
                            layer.data.splice(referenceIndex + y * newWidth, removedColumns);
                        } else {
                            Array.prototype.splice.apply(layer.data, [referenceIndex + y * newWidth, 0].concat(newColumns));
                        }
                    }
                }
                // Delete excessive rows
                if (oldHeight > newHeight) {
                    layer.data.length=newWidth*newHeight;
                }
                // Add more rows
                if (oldHeight < newHeight) {
                    let newData: number[] = [];
                    for (let n = 0; n < newWidth - oldWidth; n++) {
                        newData[n]=null;    
                    }
                    for (let i = oldWidth; i < newWidth; i++) {
                        layer.data.concat(newData);
                    }
                }
            }
        }

        map.height = rows;
        map.width = columns;
    }

    export function getNewMap(name: string): IMap {
        var map: IMap = {
            "id": null,
            "name": name,
            "height": 20,
            "width": 25,
            "layers": [
                {
                    "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "objects": [
                        {
                            "gid": 6,
                            "height": 32,
                            "id": 1,
                            "name": "signor evento",
                            "rotation": 0,
                            "visible": true,
                            "width": 32,
                            "i": 4,
                            "j": 2
                        }],
                    "opacity": 1,
                    "type": "objectgroup",
                    "x": 0,
                    "y": 0
                }],
            "nextobjectid": 2,
            "tileset":
            {
                "firstgid": 1,
                "image": "002-Woods01.png",
                "imageheight": 800,
                "imagewidth": 256,
                "name": "Bosco",
                "block": null,
                "over": null
            }
        };
        return map;
    }
}