/// <reference path="../AbstractStaticScene.ts" />
/// <reference path="MapperPage.ts" />

/**
 * Scene implementation for managing Mapper logics
 */
class MapperScene extends AbstractStaticScene {

    public static UPPER_LEVEL_OPACITY: number = 0.5;

    private activeLayer: Constant.MapLayer;
    private editMode: Constant.EditMode;

    private tilePicker: TilePickerScene;

    constructor(grid: StaticGrid, callback: { (scene: MapperScene): void }) {
        super(grid);
        this.activeLayer = Constant.MapLayer.MID;
        this.editMode = Constant.EditMode.APPLY;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_LAYER + this.activeLayer)).disabled = true;
        (<HTMLButtonElement>document.getElementById(MapperPage.BUTTON_ID_MODE + this.editMode)).disabled = true;
        callback(this);
    }

    protected renderPointer() {
        if (this.pointer.i != null && this.pointer.j != null) {
            var selectionArea: IRectangle = this.getSelectionArea();
            if (Utils.isEmpty(selectionArea)) {
                super.renderPointer();
            } else {
                // Pointer with selected tile cells
                this.context.save();
                this.context.globalAlpha = 0.4;
                this.context.fillStyle = Constant.Color.GREY;
                this.context.fillRect(
                    this.pointer.i * this.grid.cellW,
                    this.pointer.j * this.grid.cellH,
                    (selectionArea.x2 - selectionArea.x1 + 1) * this.grid.cellW,
                    (selectionArea.y2 - selectionArea.y1 + 1) * this.grid.cellH);
                this.context.restore();
            }
        }
    }

    select(i: number, j: number) {
        super.select(i, j);
    }

    apply(i_apply: number, j_apply: number): boolean {
        let changed: boolean = false;
        let pickerArea: IRectangle = this.tilePicker.getSelectionArea();
        let changedCell: number = i_apply + j_apply * this.map.width;
        if (Utils.isEmpty(this.map.layers[this.activeLayer].data)) {
            this.map.layers[this.activeLayer].data = [];
        }
        switch (this.editMode) {
            case Constant.EditMode.APPLY:
                if (Utils.isEmpty(pickerArea)) {
                    return false;
                }
                let tileColumns: number = this.map.tileset.imagewidth / this.grid.cellW; //TODO questa non cambia mai, ottimizzabile
                let appliedTile: number = pickerArea.x1 + pickerArea.y1 * tileColumns;
                for (let j = 0; j <= pickerArea.y2 - pickerArea.y1; j++) {
                    for (let i = 0; i <= pickerArea.x2 - pickerArea.x1; i++) {
                        if (i_apply + i < this.map.width) {
                            let appliedTileOffset: number = i + j * tileColumns;
                            let changedCellOffset: number = i + j * this.map.width;
                            if (this.map.layers[this.activeLayer].data[changedCell + changedCellOffset] !== appliedTile + appliedTileOffset) {
                                changed = true;
                                this.map.layers[this.activeLayer].data[changedCell + changedCellOffset] = appliedTile + appliedTileOffset;
                            }
                        }
                    }
                }
                break;
            case Constant.EditMode.ERASE:
                if (Utils.isEmpty(pickerArea)) {
                    pickerArea = {
                        x1: 0, x2: 0, y1: 0, y2: 0
                    };
                }
                for (let j = 0; j <= pickerArea.y2 - pickerArea.y1; j++) {
                    for (let i = 0; i <= pickerArea.x2 - pickerArea.x1; i++) {
                        if (i_apply + i < this.map.width) {
                            let changedCellOffset: number = i + j * this.map.width;
                            if (this.map.layers[this.activeLayer].data[changedCell + changedCellOffset] !== null) {
                                changed = true;
                                this.map.layers[this.activeLayer].data[changedCell + changedCellOffset] = null;
                            }
                        }
                    }
                }
                break;
            default:
                console.error("Unexpected case");
        }
        //TODO gestisci trascinamento del picker
        return changed;
    }

    getSelectionArea(): IRectangle {
        if (!Utils.isEmpty(this.tilePicker)) {
            return this.tilePicker.getSelectionArea();
        } else {
            return null;
        }
    }

    protected applyLayerCustomizations(layerIndex: number) {
        // Layers below the currently selected layer will be partially transparent
        if (layerIndex > this.activeLayer) {
            this.context.globalAlpha = MapperScene.UPPER_LEVEL_OPACITY;
        }
    };

    protected removeLayerCustomizations(layerIndex: number) {
        this.context.globalAlpha = 1;
    };

    resizeMap(rows: number, columns: number) {
        MapManager.resizeMap(this.map, rows, columns);
    }

    setTilePicker(tilePicker: TilePickerScene) {
        this.tilePicker = tilePicker;
    }

    setActiveLayer(activeLayer: Constant.MapLayer) {
        this.activeLayer = activeLayer;
    }

    setEditMode(editMode: Constant.EditMode) {
        this.editMode = editMode;
    }
}