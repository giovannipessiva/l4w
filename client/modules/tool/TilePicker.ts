/// <reference path="../core/util/Utils.ts" />

module TilePicker {

    var tilePicker: TilePickerScene;
    var injectionCallback;

    export function start(canvas: HTMLCanvasElement) {

        if (Utils.isEmpty(tilePicker)) {
            // Create a new instance
            new StaticGrid(canvas, function(grid: StaticGrid) {
                new TilePickerScene(grid, function (scene: TilePickerScene) {
                    registerReference(scene);
                    initInput(canvas, tilePicker, grid);
                    tilePicker.start(canvas);
                    tilePicker.toggleEditorGrid(true);
                });
            }, GridTypeEnum.tilePicker);
        } else {
            // Update current instance
            tilePicker.updateSize(canvas.height, canvas.width);
        }
    }

    export function loadTile(tile: string) {
        // Clear the canvas
        var canvasTile = <HTMLCanvasElement> $("#canvasTile")[0];
        var contextTile = <CanvasRenderingContext2D> canvasTile.getContext("2d");
        var canvasTilePicker = <HTMLCanvasElement> $("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        // Load the tileset
        Resource.load(tile, Resource.TypeEnum.TILE, function(element: JQuery) {
            // Resize the canvas
            var image = new Image();
            image.src = element.attr("src");
            $("#tilePanel").height(image.naturalHeight);
            canvasTile.height = image.naturalHeight;
            canvasTile.width = image.naturalWidth;
            canvasTilePicker.height = image.naturalHeight;
            canvasTilePicker.width = image.naturalWidth;      
            // Paint the img in the canvas
            contextTile.drawImage(<HTMLImageElement> element[0], 0, 0);
            // Manage the tile selector canvas
            TilePicker.start(canvasTilePicker);
        });
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
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    scene.select(x, y);
                }
            },
            function(x, y, mouseButton) {
                //End action
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    scene.selectEnd(x, y);
                }
            },
            function(x, y, mouseButton) {
                //Ongoing
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
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
        if (!Utils.isEmpty(injectionCallback)) {
            injectionCallback(scene);
        }
        return scene;
    }

    export function injectReference(callback) {
        injectionCallback = callback;
        if (!Utils.isEmpty(tilePicker)) {
            callback(tilePicker);
        }
    }
}