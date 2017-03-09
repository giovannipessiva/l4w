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

    select(x: number, y: number) {
        super.select(x, y);
    }

    updateSize(heightPx: number, widthPx: number) {
        this.height = Math.floor(heightPx / this.grid.cellH);
        this.width = Math.floor(widthPx / this.grid.cellW);
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