/// <reference path="StaticScene.ts" />

/**
* Scene implementation for managing Mapper logics
*/
class MapperScene extends StaticScene {

    private tilePicker: TilePickerScene;

    setTilePicker(tilePicker: TilePickerScene) {
        this.tilePicker = tilePicker;
    }

    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            var selectionArea: IRectangle = this.getSelectionArea();
            if (Utils.isUndefined(selectionArea)) {
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

    getSelectionArea(): IRectangle {
        if (!Utils.isUndefined(this.tilePicker)) {
            return this.tilePicker.getSelectionArea();
        } else {
            return null;
        }
    }
}