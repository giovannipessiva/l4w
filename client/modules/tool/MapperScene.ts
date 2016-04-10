/// <reference path="StaticScene.ts" />

/**
 * Scene implementation for managing Mapper logics
 */
class MapperScene extends StaticScene {
    
    private activeLayer: number;

    private tilePicker: TilePickerScene;
    
    constructor(grid: StaticGrid) {
        super(grid);
        this.activeLayer = 0;
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
        var pickerArea : IRectangle = this.tilePicker.getSelectionArea();
        if(Utils.isEmpty(pickerArea)) {
           return;
        }
        var changedCell = x + y * this.map.layers[this.activeLayer].x;
        var tileColumns = this.map.tileset.imagewidth / this.grid.cellW; //TODO questa non cambia mai, ottimizzabile
        
        //TODO qui non dovrei selezionare solo la prima cella, v gestita la selezione ad area dal picker e il trascinamento per applicarla sulla mappa
        var appliedTile = pickerArea.x1 + pickerArea.y1 * tileColumns;
        
        this.map.layers[this.activeLayer].data[changedCell] = appliedTile;
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
}