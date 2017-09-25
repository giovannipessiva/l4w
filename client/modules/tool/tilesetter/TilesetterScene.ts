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
        this.map = {
            id: undefined,
            name: undefined,
            tile: undefined,
            layers: [],
            nextobjectid: undefined,
            
            width: this.getSceneWidth(),
            height: this.getSceneHeight(),
            blocks: []
        };
        
        //TODO carica in questa scene una mappa corrispondente ai blocchi di questo tileset
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
    
    selectPrecisely(i: number, j: number, x: number, y: number) {
        super.select(i, j);
        
        // Identify click in lateral areas
        let posX = x % this.grid.cellW;
        let posY = y % this.grid.cellH;
        let up_left: boolean = posX + posY < this.grid.cellW;
        let down_left: boolean = posX < posY;
        let clickArea: SelectionAreaEnum;
        if(up_left && down_left) {
            clickArea = SelectionAreaEnum.LEFT;    
        } else if(!up_left && !down_left) {
            clickArea = SelectionAreaEnum.RIGHT;
        } else if(up_left && !down_left) {
            clickArea = SelectionAreaEnum.TOP;
        } else {
            clickArea = SelectionAreaEnum.BOTTOM;
        }
        
        // Identify click in the central area
        if( posX > this.grid.cellW * 0.33 && posX < this.grid.cellW * 0.66 &&   //FIXME ottimizza i calcoli
            posY > this.grid.cellH * 0.33 && posY < this.grid.cellH * 0.66) {
            clickArea = SelectionAreaEnum.CENTER
        }

        console.log(Utils.getSelectionAreaName(clickArea));
        
        //TODO toggle directional block
    }
}