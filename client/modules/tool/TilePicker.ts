/// <reference path="../core/util/Utils.ts" />

module TilePicker {

    var tilePicker: TilePickerScene;
    var injectionCallback;

    export function start(canvas: HTMLCanvasElement) {

        if (Utils.isUndefined(tilePicker)) {
            // Create a new instance
            new StaticGrid(canvas, function(grid: StaticGrid) {
                var tmp = new TilePickerScene(grid);
                registerReference(tmp);
                initInput(canvas, tilePicker, grid);
                tilePicker.start(canvas);
                tilePicker.toggleEditorGrid(true);
            }, GridTypeEnum.tilePicker);
        } else {
            // Update current instance
            tilePicker.updateSize(canvas.height, canvas.width);
        }
    }

    function initInput(canvas: HTMLCanvasElement, scene: TilePickerScene, grid: StaticGrid) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            function() { },
            function() { },
            function(x, y, mouseButton) {
                // Start action
                if (Utils.isUndefined(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    scene.select(x, y);
                }
            },
            function(x, y, mouseButton) {
                //End action
                if (Utils.isUndefined(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    scene.selectEnd(x, y);
                }
            },
            function(x, y, mouseButton) {
                //Ongoing
                if (Utils.isUndefined(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    scene.selectEnd(x, y);
                }
                scene.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                scene.updatePointer(x, y);
            },
            function() { },
            function() { },
            function() { },
            function(x, y) {
                //OnRightClick
                scene.cleanSelection();
            },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
        );
    };
    
    function registerReference(scene: TilePickerScene): StaticScene {
        tilePicker = scene;
        if(!Utils.isUndefined(injectionCallback)) {
            injectionCallback(scene);
        }
        return scene;
    }
    
    export function injectReference(callback) {
        injectionCallback = callback;
        if(!Utils.isUndefined(tilePicker)) {
           callback(tilePicker); 
        }
    }
}