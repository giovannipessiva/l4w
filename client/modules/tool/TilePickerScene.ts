/// <reference path="StaticScene.ts" />

/**
 * Scene implementation for managing Tile Picker logics
 */
class TilePickerScene extends StaticScene {

    private mapper: StaticScene;
    private width: number;
    private height: number;

    constructor(grid: StaticGrid, heightPx: number, widthPx: number, callback: { (scene: TilePickerScene): void }) {
        super(grid);
        callback(this);
        this.height = Math.floor(heightPx / grid.cellH);
        this.width = Math.floor(widthPx / grid.cellW);
    }

    setMapper(mapper: StaticScene) {
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
}