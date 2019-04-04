import { AbstractScene } from "../core/AbstractScene"
import { StaticGrid } from "./StaticGrid"
import { Constant } from "../core/util/Constant"
import { IMap } from "../../../common/src/model/Map"
import { IRectangle } from "../../../common/src/model/Commons"
import { Utils } from "../core/util/Utils";

/**
 * Abstract scene class for managing static rendering
 */
export abstract class AbstractStaticScene extends AbstractScene {

    newDrawArea: IRectangle;
    oldDrawArea: IRectangle;

    requestedNewFrame: boolean;

    constructor(grid: StaticGrid) {
        super(grid);
        this.renderingConfiguration.showEditorGrid = true;
        this.renderingConfiguration.enableSelection = true;
        this.renderingConfiguration.enableAntialiasing = false;
        this.requestedNewFrame = true;
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }
        // If the pointer is not on the canvas, do not render a new frame
        // unless it is explicitally requested
        if(this.pointer === undefined && !this.requestedNewFrame) {
            return false;
        }
        // Redraw the whole scene if this is the first frame, or if it has been requested so
        let redrawAll = this.oldDrawArea === undefined || this.requestedNewFrame;
        if(this.requestedNewFrame) {
            this.requestedNewFrame = false;
        }
        this.newDrawArea = this.getRedrawArea(redrawAll);
        // Need to redraw previously changed area (in order to remove cursor/selection area),
        // and obviously the new changed area
        this.redrawArea = Utils.mergeRectangles(this.oldDrawArea, this.newDrawArea);
        this.grid.clear(this.context, this.redrawArea);
        return true;
    }

    protected mainGameLoop_post() {
        super.mainGameLoop_post();
        this.oldDrawArea = this.newDrawArea;
    }

    protected render(map: IMap, context: CanvasRenderingContext2D) {
        AbstractStaticScene.prototype; //This fixes a mysterious Babel transpilation problem
        super.render(map, context, false);
    }

    protected getRedrawArea(redrawAll?: boolean, selectionArea?: IRectangle): IRectangle {
        let pointer;
        if(!redrawAll) {
            pointer = this.pointer;
        } else {
            // This will cause a complete redraw (max boundaries)
            pointer = undefined;
        }
        let boundariesX = (<StaticGrid> this.grid).getBoundariesX(this.focus.x, this.getSceneWidth(), pointer, selectionArea);
        let boundariesY = (<StaticGrid> this.grid).getBoundariesY(this.focus.y, this.getSceneHeight(), pointer, selectionArea);
        return {
            x: boundariesX.min,
            y: boundariesY.min,
            h: boundariesY.max - boundariesY.min,
            w: boundariesX.max - boundariesX.min
        }
    }

    toggleEditorGrid(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showEditorGrid = enable;
        } else {
            this.renderingConfiguration.showEditorGrid = !this.renderingConfiguration.showEditorGrid;
        }
        this.requestedNewFrame = true;
    }

    protected renderPointer() {
        if (this.pointer !== undefined) {
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
    
    select(i?: number, j?: number) {
        if (i !== undefined && j !== undefined) {
            this.renderingConfiguration.selectCellStart = {
                i: i,
                j: j
            };
            this.renderingConfiguration.selectCellEnd = undefined;
        }
    }

    selectEnd(i?: number, j?: number) {
        if (i !== undefined && j !== undefined) {
            this.renderingConfiguration.selectCellEnd = {
                i: i,
                j: j
            };
        }
    }

    cleanSelection() {
        this.renderingConfiguration.selectCellStart = undefined;
        this.renderingConfiguration.selectCellEnd = undefined;
        this.requestedNewFrame = true;
    }

    /**
     * Return the rectangular area currently selected in this scene.
     * Both the top-left point (i,j) and the bottom-right point
     * (i+w, i+h) are included in the area
     */
    public getSelectionArea(): IRectangle | undefined {
        if (this.renderingConfiguration.selectCellStart === undefined) {
            return undefined;
        }
        let i1 = this.renderingConfiguration.selectCellStart.i;
        let j1 = this.renderingConfiguration.selectCellStart.j;
   
        let i2;
        let j2;
        if (this.renderingConfiguration.selectCellEnd !== undefined) {
            i2 = this.renderingConfiguration.selectCellEnd.i;
            j2 = this.renderingConfiguration.selectCellEnd.j;
            if (i1 > i2) {
                let tmp = i1;
                i1 = i2;
                i2 = tmp;
            }
            if (j1 > j2) {
                let tmp = j1;
                j1 = j2;
                j2 = tmp;
            }
        } else {
            i2 = this.renderingConfiguration.selectCellStart.i;
            j2 = this.renderingConfiguration.selectCellStart.j;
        }
                
        return {
            x: i1,
            y: j1,
            w: i2 - i1,
            h: j2 - j1
        };
    }
       
    protected renderDynamicElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number, i: number, j: number, onTop: boolean) {
    }
}