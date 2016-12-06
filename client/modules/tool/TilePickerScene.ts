/// <reference path="AbstractStaticScene.ts" />

/**
 * Scene implementation for managing Tile Picker logics
 */
class TilePickerScene extends AbstractStaticScene {

    private mapper: MapperScene;
    private width: number;
    private height: number;

    constructor(grid: StaticGrid, heightPx: number, widthPx: number, callback: { (scene: TilePickerScene): void }) {
        super(grid);
        callback(this);
        this.height = Math.floor(heightPx / grid.cellH);
        this.width = Math.floor(widthPx / grid.cellW);
    }

    setMapper(mapper: MapperScene) {
        this.mapper = mapper;
    }

    select(x: number, y: number) {
        if (!Utils.isEmpty(this.mapper)) {
            this.mapper.cleanSelection();
        }
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
        MapManager.renderUI(this.grid, this.context, this.renderingConfiguration, minRow, maxRow, minColumn, maxColumn);
    }
}