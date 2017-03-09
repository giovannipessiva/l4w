/// <reference path="../AbstractTileScene.ts" />

/**
 * Scene implementation for managing Tile Picker logics
 */
class TilePickerScene extends AbstractTileScene {

    private mapper: MapperScene;

    constructor(grid: StaticGrid, heightPx: number, widthPx: number, callback: { (scene: TilePickerScene): void }) {
        super(grid, heightPx, widthPx);
        callback(this);
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
}