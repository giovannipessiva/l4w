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
            this.rows = 30;
            this.columns = 50;
            this.layers = [];
            this.grid = grid;
        }

        render(context: CanvasRenderingContext2D, x: number, y: number, renderingOptions: World.Options) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
            if (renderingOptions != null) {
                if (renderingOptions.showGrid) {
                    context.strokeStyle = Constant.Color.RED;
                    context.strokeRect(
                        x * this.grid.cellW,
                        y * this.grid.cellH,
                        this.grid.cellW,
                        this.grid.cellH);
                }
                if (renderingOptions.showEditorGrid) {
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
                if (renderingOptions.showCellNumbers) {
                    context.fillStyle = Constant.Color.RED;
                    context.font = "bold 10px Arial";
                    context.fillText(
                        x + "," + y,
                        x * this.grid.cellW + 1,
                        y * this.grid.cellH + 10);
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

    export class Options {
        showGrid: boolean = false;
        showEditorGrid: boolean = false;
        showFPS: boolean = false;
        showCellNumbers: boolean = false;
        showFocus: boolean = false;

        fps: number = 0;
    }

}