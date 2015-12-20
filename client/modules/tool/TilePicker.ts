/// <reference path="../core/util/Utils.ts" />

module TilePicker {

    var tilePicker: StaticGrid;

    export function start(canvas: HTMLCanvasElement) {

        if (Utils.isUndefined(tilePicker)) {
            // Create a new instance
            tilePicker = new StaticGrid(canvas, function(grid: StaticGrid) {
                var scene = new StaticScene(grid);
                initInput(canvas, scene, grid);
                scene.start(canvas);
                scene.toggleEditorGrid(true);
            }, GridTypeEnum.tilePicker);
        } else {
            // Update current instance
            tilePicker.updateSize(canvas.height, canvas.width);
        }
    }

    function initInput(canvas: HTMLCanvasElement, scene: StaticScene, grid: StaticGrid) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            function() { },
            function() { },
            function() { },
            function() { },
            function(x, y) {
                //Ongoing
                scene.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                scene.updatePointer(x, y);
            },
            function() { },
            function() { },
            function() { },
            function() { console.log("rightClick"); },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
            );
    };
 
    //TODO metodo per aggiornare la grid? o lo faccio da fuori?
    //updateSize

}