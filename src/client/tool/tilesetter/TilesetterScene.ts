import { AbstractTileScene } from "../AbstractTileScene"
import { TilesetterPage } from "./TilesetterPage"
import { StaticGrid } from "../StaticGrid"
import { Constant } from "../../core/util/Constant"
import { ClientUtils } from "../../core/util/Utils"
import { SelectionAreaEnum, BlockDirection } from "../../../common/Commons"
import { DataDefaults } from "../../../common/DataDefaults"
import { Utils } from "../../../common/Utils"

/**
 * Scene implementation for managing Tilesetter logics
 */
export class TilesetterScene extends AbstractTileScene {
    
    constructor(grid: StaticGrid, tileEditMode: Constant.TileEditMode, callback: { (scene: TilesetterScene): void }) {
        super(grid);
        this.renderingConfiguration.enableSelection = false;
        this.changeTileEditMode(tileEditMode);

        // Init the map for rendering blocks
        this.map = DataDefaults.getEmptyMap("blocks");
        this.map.tileset = DataDefaults.getTileset();
        this.map.width = this.getSceneWidth();
        this.map.height = this.getSceneHeight();
        this.map.tileset.imageWidth = this.getSceneWidth();
        this.map.tileset.imageHeight = this.getSceneHeight();
        callback(this);
    }

    public changeTileEditMode(tileEditMode: Constant.TileEditMode) {
        this.toggleBlocks(false);
        this.toggleOnTops(false);
        switch (tileEditMode) {
            case Constant.TileEditMode.BLOCKS:
                this.toggleBlocks(true);
                break;
            case Constant.TileEditMode.ONTOP:
                this.toggleOnTops(true);
                break;
            default:
                console.error("Unexpected case");
        };
        this.requestedNewFrame = true;
    }

    selectPrecisely(i: number, j: number, x: number, y: number) {
        super.select(i, j);

        // Identify click in lateral areas
        let posX = x % this.grid.cellW;
        let posY = y % this.grid.cellH;
        let up_left: boolean = posX + posY < this.grid.cellW;
        let down_left: boolean = posX < posY;
        let clickArea: SelectionAreaEnum;
        if (up_left && down_left) {
            clickArea = SelectionAreaEnum.LEFT;
        } else if (!up_left && !down_left) {
            clickArea = SelectionAreaEnum.RIGHT;
        } else if (up_left && !down_left) {
            clickArea = SelectionAreaEnum.TOP;
        } else {
            clickArea = SelectionAreaEnum.BOTTOM;
        }

        // Identify click in the central area
        if (posX > this.grid.cellW * 0.33 && posX < this.grid.cellW * 0.66 &&   //FIXME ottimizza i calcoli
            posY > this.grid.cellH * 0.33 && posY < this.grid.cellH * 0.66) {
            clickArea = SelectionAreaEnum.CENTER
        }

        // Do action on the clicked area
        let gid = ClientUtils.cellToGid({
            i: i,
            j: j
        }, this.map.width);
        let block = ClientUtils.getMapBlocks(this.map,gid);
        switch (clickArea) {
            case SelectionAreaEnum.TOP:
                if (ClientUtils.isBlockDirectionBlocked(block, BlockDirection.UP)) {
                    block ^= BlockDirection.UP;
                } else {
                    block |= BlockDirection.UP;
                }
                break;
            case SelectionAreaEnum.BOTTOM:
                if (ClientUtils.isBlockDirectionBlocked(block, BlockDirection.DOWN)) {
                    block ^= BlockDirection.DOWN;
                } else {
                    block |= BlockDirection.DOWN;
                }
                break;
            case SelectionAreaEnum.LEFT:
                if (ClientUtils.isBlockDirectionBlocked(block, BlockDirection.LEFT)) {
                    block ^= BlockDirection.LEFT;
                } else {
                    block |= BlockDirection.LEFT;
                }
                break;
            case SelectionAreaEnum.RIGHT:
                if (ClientUtils.isBlockDirectionBlocked(block, BlockDirection.RIGHT)) {
                    block ^= BlockDirection.RIGHT;
                } else {
                    block |= BlockDirection.RIGHT;
                }
                break;
            case SelectionAreaEnum.CENTER:
                if (ClientUtils.isBlockDirectionBlocked(block, BlockDirection.ALL)) {
                    block ^= BlockDirection.ALL;
                } else {
                    block |= BlockDirection.ALL;
                }
                break;
            default:
                console.error("Unexpected case");
        };
        if(this.map.blocks === undefined) {
            this.map.blocks = [];
        }
        this.map.blocks[gid] = block;
    }
    
    selectLeft(i: number, j: number) {
        super.select(i, j);

        // Do action on the clicked area
        let gid = ClientUtils.cellToGid({
            i: i,
            j: j
        }, this.map.width);
        
        let onTop = this.map.tileset.onTop[gid];
        if(Utils.isEmpty(onTop)) {
            onTop = Constant.ZIndex.LV0;    
        }
        if(onTop < Constant.ZIndex.LV4) {
            this.map.tileset.onTop[gid] = onTop + 1;
            TilesetterPage.changeEditState(true);
        }
    }
    
    selectRight(i: number, j: number) {
        super.select(i, j);

        // Do action on the clicked area
        let gid = ClientUtils.cellToGid({
            i: i,
            j: j
        }, this.map.width);
        
        let onTop = this.map.tileset.onTop[gid];
        if(Utils.isEmpty(onTop)) {
            onTop = Constant.ZIndex.LV0;    
        }
        if(onTop > Constant.ZIndex.LV0) {
            this.map.tileset.onTop[gid] = onTop - 1;
            TilesetterPage.changeEditState(true);       
        }
    }
}