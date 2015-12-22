/**
 * Scene implementation for managing Mapper logics
 */
class MapperScene extends StaticScene {

    private tilePicker: StaticScene;

    setTilePicker(tilePicker: StaticScene) {
        this.tilePicker = tilePicker;
    }

    protected renderPointer() {
        if (this.pointer.x != null && this.pointer.y != null) {
            var selectionArea: IRectangle;
            if (!Utils.isUndefined(this.tilePicker)) {
                selectionArea = this.tilePicker.getSelectionArea();
            }
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
}