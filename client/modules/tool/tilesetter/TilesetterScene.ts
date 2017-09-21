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
        
        // Identify click area
        let posX = x % this.grid.cellW;
        let posY = y % this.grid.cellH;
        let up_left: boolean = posX + posY < this.grid.cellW;
        let down_left: boolean = posX < posY;
        let clickArea: DirectionEnum;
        if(up_left && down_left) {
            clickArea = DirectionEnum.LEFT;    
        } else if(!up_left && !down_left) {
            clickArea = DirectionEnum.RIGHT;
        } else if(up_left && !down_left) {
            clickArea = DirectionEnum.UP;
        } else {
            clickArea = DirectionEnum.DOWN;
        }
        
        console.log(Utils.getDirectionName(clickArea));
        
        //TODO identify central click
        
        //TODO toggle directional block
    }
}