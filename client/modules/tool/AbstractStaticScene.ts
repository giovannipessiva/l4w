/// <reference path="../core/AbstractScene.ts" />

/**
 * Abstract scene class for managing static rendering
 */
abstract class AbstractStaticScene extends AbstractScene {

    constructor(grid: StaticGrid) {
        super(grid);
        this.renderingConfiguration.showEditorGrid = true;
        this.renderingConfiguration.enableSelection = true;
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }

        return true;
    }

    protected mainGameLoop_post(boundariesX: IRange, boundariesY: IRange) {
        super.mainGameLoop_post(boundariesX, boundariesY);
    }

    toggleEditorGrid(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showEditorGrid = enable;
        } else {
            this.renderingConfiguration.showEditorGrid = !this.renderingConfiguration.showEditorGrid;
        }
    }

    protected renderPointer() {
        if (this.pointer.i != null && this.pointer.j != null) {
            this.context.save();
            this.context.globalAlpha = 0.4;
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.fillRect(
                this.pointer.i * this.grid.cellW,
                this.pointer.j * this.grid.cellH,
                this.grid.cellW,
                this.grid.cellH);
            this.context.restore();
        }
    }
    
    select(x: number, y: number) {
        if (x != null && y != null) {
            this.renderingConfiguration.selectPointStart = {
                x: x,
                y: y
            };
            this.renderingConfiguration.selectPointEnd = null;
        }
    }

    selectEnd(x: number, y: number) {
        if (x != null && y != null) {
            this.renderingConfiguration.selectPointEnd = {
                x: x,
                y: y
            };
        }
    }

    cleanSelection() {
        this.renderingConfiguration.selectPointStart = null;
        this.renderingConfiguration.selectPointEnd = null;
    }

    /**
     * Return the rectangular area currently selected in the scene.
     * Both the top-left point (x1,y1) and the bottom-right point
     * (x2, y2) are included in the area
     */
    getSelectionArea(): IRectangle {
        if (Utils.isEmpty(this.renderingConfiguration.selectPointStart)) {
            return null;
        }
        var x1 = this.renderingConfiguration.selectPointStart.x;
        var y1 = this.renderingConfiguration.selectPointStart.y;
   
        var x2;
        var y2;
        if (!Utils.isEmpty(this.renderingConfiguration.selectPointEnd)) {
            x2 = this.renderingConfiguration.selectPointEnd.x;
            y2 = this.renderingConfiguration.selectPointEnd.y;
            if (x1 > x2) {
                var tmp = x1;
                x1 = x2;
                x2 = tmp;
            }
            if (y1 > y2) {
                var tmp = y1;
                y1 = y2;
                y2 = tmp;
            }
        } else {
            x2 = this.renderingConfiguration.selectPointStart.x;
            y2 = this.renderingConfiguration.selectPointStart.y;
        }
                
        return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        };
    }
}