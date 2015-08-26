/**
 * Module to handle game map
 */
module World {

    export class Map {

        rows: number;
        columns: number;
        display: AbstractGrid;

        private layers: MapLayer[];

        constructor(display: AbstractGrid) {
            //TODO load map
            this.rows = 30;
            this.columns = 50;
            this.layers = [];
            this.display = display;
        }

        render(context: CanvasRenderingContext2D, x: number, y: number, renderingOptions: World.Options) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
            if (renderingOptions != null) {
                if (renderingOptions.showGrid) {
                    context.strokeStyle = Constant.Color.RED;
                    context.strokeRect(
                        x * this.display.cellW,
                        y * this.display.cellH,
                        this.display.cellW,
                        this.display.cellH);
                }
                if (renderingOptions.showEditorGrid) {
                    context.save();
                    context.globalAlpha = 0.4;
                    context.strokeStyle = Constant.Color.GREY;
                    context.strokeRect(
                        x * this.display.cellW,
                        y * this.display.cellH,
                        this.display.cellW,
                        this.display.cellH);
                    context.restore();
                }
                if (renderingOptions.showCellNumbers) {
                    context.fillStyle = Constant.Color.RED;
                    context.font = "bold 10px Arial";
                    context.fillText(
                        x + "," + y,
                        x * this.display.cellW + 1,
                        y * this.display.cellH + 10);
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