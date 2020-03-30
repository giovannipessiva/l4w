import { AbstractTileScene } from "../AbstractTileScene"
import { MapperScene } from "./MapperScene"
import { StaticGrid } from "../StaticGrid"
import { DataDefaults } from "../../../common/DataDefaults";
import { Utils } from "../../../common/Utils";

/**
 * Scene implementation for managing Tile Picker logics
 */
export class TilePickerScene extends AbstractTileScene {

    private mapper: MapperScene;

    constructor(grid: StaticGrid, callback: { (scene: TilePickerScene): void }) {
        super(grid);
        this.map = DataDefaults.getMap("tilePicker");
        callback(this);
    }

    setMapper(mapper: MapperScene) {
        this.mapper = mapper;
    }

    select(i: number, j: number) {
        if (!Utils.isEmpty(this.mapper)) {
            this.mapper.cleanSelection();
        }
        super.select(i, j);
    }
}