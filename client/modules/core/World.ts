/**
 * Module to handle game map
 */
module World {

    export class Map {

        rows: number;
        columns: number;
        grid: AbstractGrid;

        private layers: MapLayer[];

        constructor(grid: AbstractGrid) {
            //TODO load map
            this.rows = 40; //TODO grandezza totale della mappa
            this.columns = 50; //TODO grandezza totale della mappa
            this.layers = [];
            this.grid = grid;
        }

        renderCell(context: CanvasRenderingContext2D, x: number, y: number) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
        }
        
        renderGlobalEffects(context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {

        }

        renderCellUI(context: CanvasRenderingContext2D, x: number, y: number, renderingConfiguration: World.Configuration) {
            if (!Utils.isUndefined(renderingConfiguration)) {
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
        
        renderGlobalUI(context: CanvasRenderingContext2D, renderingConfiguration: World.Configuration) {
            if (!Utils.isUndefined(renderingConfiguration)) {
                if (renderingConfiguration.enableSelection && !Utils.isUndefined(renderingConfiguration.selectPointStart)) {
                    var x = renderingConfiguration.selectPointStart.x * this.grid.cellW;
                    var y = renderingConfiguration.selectPointStart.y * this.grid.cellH;

                    var w;
                    var h;
                    if (Utils.isUndefined(renderingConfiguration.selectPointEnd)) {
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

        getLayers() {
            return this.layers.length;
        }

    };

    class MapLayer {

        render(context: CanvasRenderingContext2D, x: number, y: number) {
            //TODO
        }

    }

    export class Configuration {
        showGrid: boolean = false;
        showEditorGrid: boolean = false;
        showFPS: boolean = false;
        showCellNumbers: boolean = false;
        showFocus: boolean = false;
        enableSelection: boolean = false;

        fps: number = 0;
        selectPointStart: IPoint;
        selectPointEnd: IPoint;
    }

}