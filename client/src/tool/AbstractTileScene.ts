import { AbstractStaticScene } from "./AbstractStaticScene"
import { StaticGrid } from "./StaticGrid"

/**
 * Abstract scene for managing Tileset logics
 */
export abstract class AbstractTileScene extends AbstractStaticScene {

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
        
        (<StaticGrid> this.grid).updateSize(widthPx, heightPx);
    }

    getSceneHeight(): number {
        return this.height;
    }

    getSceneWidth(): number {
        return this.width;
    }
}