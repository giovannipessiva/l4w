/// <reference path="../AbstractTileScene.ts" />

/**
 * Scene implementation for managing Tilesetter logics
 */
class TilesetterScene extends AbstractTileScene {

    private tileEditMode: Constant.TileEditMode;

    constructor(grid: StaticGrid, heightPx: number, widthPx: number, tileEditMode: Constant.TileEditMode, callback: { (scene: TilesetterScene): void }) {
        super(grid, heightPx, widthPx);
        callback(this);
        this.changeTileEditMode(tileEditMode);
        
        // Init the map for rendering blocks
        this.map.width = this.getSceneWidth();
        this.map.height = this.getSceneHeight();
        this.map.blocks = [];
    }

    changeTileEditMode(tileEditMode: Constant.TileEditMode) {
        this.toggleBlocks(false);
        switch (tileEditMode) {
            case Constant.TileEditMode.NONE:
                break;
            case Constant.TileEditMode.BLOCKS:
                this.toggleBlocks(true);
                break;
        };
    }
}