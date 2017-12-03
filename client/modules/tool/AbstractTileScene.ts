/// <reference path="AbstractStaticScene.ts" />

/**
 * Abstract scene for managing Tileset logics
 */
abstract class AbstractTileScene extends AbstractStaticScene {

    private width: number;
    private height: number;

    constructor(grid: StaticGrid, heightPx: number, widthPx: number) {
        super(grid);
        this.height = Math.floor(heightPx / grid.cellH);
        this.width = Math.floor(widthPx / grid.cellW);
        this.renderingConfiguration.showBlocks = true;
    }

    select(i: number, j: number) {
        super.select(i, j);
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
      
    protected renderInterLayerElements(layerIndex: number, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
    }
    
    protected renderTopLayerElements(minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        MapManager.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, minRow, maxRow, minColumn, maxColumn);
    }
}