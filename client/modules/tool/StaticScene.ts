/// <reference path="../core/AbstractScene.ts" />

/*
 * Scene implementation for managing static rendering
 */
class StaticScene extends AbstractScene {

    constructor(display: StaticDisplay) {
        super(display);   
        this.renderingOptions.showEditorGrid=true;
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
            this.renderingOptions.showEditorGrid = enable;
        } else {
            this.renderingOptions.showEditorGrid = !this.renderingOptions.showEditorGrid;
        }
    }
    
    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            this.context.save();
            this.context.globalAlpha = 0.4;
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.fillRect(
                this.pointer.x * this.display.cellW,
                this.pointer.y * this.display.cellH,
                this.display.cellW,
                 this.display.cellH);
            this.context.restore();
        }
    }

}