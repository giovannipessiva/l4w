/// <reference path="model/Map.ts" />
/// <reference path="AbstractGrid.ts" />

/**
 * Class for handling game maps
 */
class MapEngine {

    private grid: AbstractGrid;

    constructor(grid: AbstractGrid) {
        this.grid = grid;
    }

    save() {
        //TODO save the map, sending the updated JSON to server
    }

    render(map: IMap, tileImage: HTMLImageElement, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        for (var layer of map.layers) {
            if(!Utils.isEmpty(layer.data)) {

                if(!Utils.isEmpty(layer.opacity)) {
                    context.globalAlpha = layer.opacity;
                }
                
                for (var y = minRow; y <= maxRow; y++) { //TODO verifica che non siano necessari controlli rispetto alla dimensione del layer
                    for (var x = minColumn; x <= maxColumn; x++) {
                        var cellIndex = x + y * map.width;

                        var tileGID = layer.data[cellIndex];
                        if(tileGID === -1) {
                            continue;    
                        }

                        var tilePoint = Utils.gIDToPoint(tileGID, Math.floor(map.tileset.imagewidth / this.grid.cellW)); //TODO ottimizzabile, precalcola

                        context.drawImage(
                            tileImage,
                            Math.floor(tilePoint.x * this.grid.cellW), Math.floor(tilePoint.y * this.grid.cellH), this.grid.cellW, this.grid.cellH,
                            Math.floor(x * this.grid.cellW), Math.floor(y * this.grid.cellH), this.grid.cellW, this.grid.cellH);
                    }
                }
                context.globalAlpha = 1;
            }
            
            //TODO manage events (layer.object array)
        }
    }

    renderGlobalEffects(context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {

    }

    renderUI(context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        for (var y = minRow; y <= maxRow; y++) {
            for (var x = minColumn; x <= maxColumn; x++) {

                if (!Utils.isEmpty(renderingConfiguration)) {
                    if (renderingConfiguration.showGrid) {
                        context.strokeStyle = Constant.Color.RED;
                        context.strokeRect(
                            x * this.grid.cellW,
                            y * this.grid.cellH,
                            this.grid.cellW,
                            this.grid.cellH);
                    }
                    if (renderingConfiguration.showEditorGrid) {
                        context.save();
                        context.globalAlpha = 0.4;
                        context.strokeStyle = Constant.Color.GREY;
                        context.strokeRect(
                            x * this.grid.cellW,
                            y * this.grid.cellH,
                            this.grid.cellW,
                            this.grid.cellH);
                        context.restore();
                    }
                    if (renderingConfiguration.showCellNumbers) {
                        context.fillStyle = Constant.Color.RED;
                        context.font = "bold 10px Arial";
                        context.fillText(
                            x + "," + y,
                            x * this.grid.cellW + 1,
                            y * this.grid.cellH + 10);
                    }
                }
            }
        }
    }

    renderGlobalUI(context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration) {
        if (!Utils.isEmpty(renderingConfiguration)) {
            if (renderingConfiguration.enableSelection && !Utils.isEmpty(renderingConfiguration.selectPointStart)) {
                var x = renderingConfiguration.selectPointStart.x * this.grid.cellW;
                var y = renderingConfiguration.selectPointStart.y * this.grid.cellH;

                var w;
                var h;
                if (Utils.isEmpty(renderingConfiguration.selectPointEnd)) {
                    h = this.grid.cellH;
                    w = this.grid.cellW;
                } else {
                    var x2 = renderingConfiguration.selectPointEnd.x * this.grid.cellW;
                    var y2 = renderingConfiguration.selectPointEnd.y * this.grid.cellH;
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
                    w += this.grid.cellW;
                    h += this.grid.cellH;
                }
                context.save();
                context.strokeStyle = Constant.Color.RED;
                context.lineWidth = 3;
                context.strokeRect(x, y, w, h);
                context.restore();

            }
        }
    }

    static getNewMap(name: string): IMap {
        var map: IMap = {
            "name": name,
            "height": 20,
            "layers": [
                {
                    "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    "opacity": 1,
                    "type": "tilelayer",
                    "x": 0,
                    "y": 0
                },
                {
                    "data": [0, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    "opacity": 1,
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
                            "type": "evento di tipo A",
                            "visible": true,
                            "width": 32,
                            "x": 128,
                            "y": 64
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
            },
            "width": 25
        };
        return map;
    }
}