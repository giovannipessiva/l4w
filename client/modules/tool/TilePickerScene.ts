/// <reference path="StaticScene.ts" />

/**
 * Scene implementation for managing Tile Picker logics
 */
class TilePickerScene extends StaticScene {

    private mapper: StaticScene;

    setMapper(mapper: StaticScene) {
        this.mapper = mapper;
    }

    select(x: number, y: number) {
        if (!Utils.isUndefined(this.mapper)) {
            this.mapper.cleanSelection();
        }
        super.select(x, y);
    }
}