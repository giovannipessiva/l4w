/// <reference path="StaticScene.ts" />

/**
 * Scene implementation for managing Mapper logics
 */
class MapperScene extends StaticScene {

    private activeLayer: number;

    private tilePicker: TilePickerScene;

    public static UPPER_LEVEL_OPACITY: number = 0.4;

    constructor(grid: StaticGrid, callback: { (scene: MapperScene): void }) {
        super(grid);
        this.activeLayer = 0;

        //TODO da rimuovere questa inizializzazione, la mappa deve essere caricata da fuori
        this.setMap(MapEngine.getNewMap("stub"), callback);
    }

    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            var selectionArea: IRectangle = this.getSelectionArea();
            if (Utils.isEmpty(selectionArea)) {
                super.renderPointer();
            } else {
                // Pointer with selected tile cells
                this.context.save();
                this.context.globalAlpha = 0.4;
                this.context.fillStyle = Constant.Color.GREY;
                this.context.fillRect(
                    this.pointer.x * this.grid.cellW,
                    this.pointer.y * this.grid.cellH,
                    (selectionArea.x2 - selectionArea.x1 + 1) * this.grid.cellW,
                    (selectionArea.y2 - selectionArea.y1 + 1) * this.grid.cellH);
                this.context.restore();
            }
        }
    }

    select(x: number, y: number) {
        super.select(x, y);
    }

    apply(x: number, y: number) {
        var pickerArea: IRectangle = this.tilePicker.getSelectionArea();
        if (Utils.isEmpty(pickerArea)) {
            return;
        }

        var tileColumns: number = this.map.tileset.imagewidth / this.grid.cellW; //TODO questa non cambia mai, ottimizzabile
        var appliedTile: number = pickerArea.x1 + pickerArea.y1 * tileColumns;
        var changedCell: number = x + y * this.map.width;

        for (var j = 0; j <= pickerArea.y2 - pickerArea.y1; j++) {
            for (var i = 0; i <= pickerArea.x2 - pickerArea.x1; i++) {
                var appliedTileOffset: number = i + j * tileColumns;
                var changedCellOffset: number = i + j * this.map.width;
                this.map.layers[this.activeLayer].data[changedCell + changedCellOffset] = appliedTile + appliedTileOffset;
            }
        }
        //TODO gestisci trascinamento del picker
    }

    getSelectionArea(): IRectangle {
        if (!Utils.isEmpty(this.tilePicker)) {
            return this.tilePicker.getSelectionArea();
        } else {
            return null;
        }
    }

    setTilePicker(tilePicker: TilePickerScene) {
        this.tilePicker = tilePicker;
    }

    renderLayer(map: IMap, layerIndex: number, tileImage: HTMLImageElement, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        var layer: IMapLayer = map.layers[layerIndex];
        if (layerIndex > this.activeLayer) {
            context.globalAlpha = MapperScene.UPPER_LEVEL_OPACITY;
        }
        super.renderLayer(map, layerIndex, tileImage, context, minRow, maxRow, minColumn, maxColumn);
    }
}