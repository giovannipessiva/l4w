import { AbstractStaticScene } from "./AbstractStaticScene"
import { StaticGrid } from "./StaticGrid"
import { IRectangle } from "../../../common/src/model/Commons";

/**
 * Abstract scene for managing Tileset logics
 */
export abstract class AbstractTileScene extends AbstractStaticScene {

    //TODO why cant I use map.width here?
    private width: number;
    private height: number;

    constructor(grid: StaticGrid, heightPx: number, widthPx: number) {
        super(grid);
        this.height = Math.floor(heightPx / grid.cellH);
        this.width = Math.floor(widthPx / grid.cellW);
    }

    updateSize(widthPx: number, heightPx: number) {
        this.width = Math.floor(widthPx / this.grid.cellW);
        this.height = Math.floor(heightPx / this.grid.cellH);
       
        this.map.width = this.width;
        this.map.height = this.height;
        
        (<StaticGrid> this.grid).updateSize(this.width, this.height);
        this.requestedNewFrame = true;
    }

    getSceneHeight(): number {
        return this.height;
    }

    getSceneWidth(): number {
        return this.width;
    }

    protected getRedrawArea(redrawAll?: boolean): IRectangle {
        let selectionArea = this.getSelectionArea();
        return super.getRedrawArea(redrawAll, selectionArea);
    }

    select(i?: number, j?: number) {
        super.select(i, j);
        // On select redraw all, in order to clean old selections
        this.requestedNewFrame = true;
    }
}