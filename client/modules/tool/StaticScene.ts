/// <reference path="../core/AbstractScene.ts" />

/**
 * Scene implementation for managing static rendering
 */
class StaticScene extends AbstractScene {

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

    protected mainGameLoop_post() {
        super.mainGameLoop_post();
    }

    toggleEditorGrid(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showEditorGrid = enable;
        } else {
            this.renderingConfiguration.showEditorGrid = !this.renderingConfiguration.showEditorGrid;
        }
    }

    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            this.context.save();
            this.context.globalAlpha = 0.4;
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.fillRect(
                this.pointer.x * this.grid.cellW,
                this.pointer.y * this.grid.cellH,
                this.grid.cellW,
                this.grid.cellH);
            this.context.restore();
        }
    }
    
    /**
     * Usato quando cambia la dimensione 
     */
    updateSize(height: number, width: number) {
        var staticGrid: StaticGrid = <StaticGrid> this.grid;
        staticGrid.updateSize(height, width);
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

}