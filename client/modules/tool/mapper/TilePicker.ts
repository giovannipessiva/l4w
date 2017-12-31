/// <reference path="../../core/util/Utils.ts" />

namespace TilePicker {

    var tilePicker: TilePickerScene;

    export function start(canvas: HTMLCanvasElement, callback: (tilePicker: TilePickerScene) => void) {
        if(tilePicker !== undefined) {
            callback(tilePicker);
        } else {
            new StaticGrid(canvas, function(grid: StaticGrid) {
                new TilePickerScene(grid, canvas.height, canvas.width, function(scene: TilePickerScene) {
                    tilePicker = scene;
                    initInput(canvas, grid);
                    tilePicker.start(canvas);
                    callback(tilePicker);
                });
            }, GridTypeEnum.tilePicker);
        }
    }

    export function loadTile(tile: string, calback: (tilePicker: TilePickerScene) => void) {
        // Clear the canvas
        var canvasTile = <HTMLCanvasElement>$("#canvasTile")[0];
        var contextTile = <CanvasRenderingContext2D>canvasTile.getContext("2d");
        var canvasTilePicker = <HTMLCanvasElement>$("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        // Load the tileset
        Resource.load(tile, Resource.TypeEnum.TILE, function(tileImage: HTMLImageElement) {
            // Resize the canvas
            var image = new Image();
            image.src = tileImage.src;
            $("#tilePanel").height(image.naturalHeight);
            canvasTile.height = image.naturalHeight;
            canvasTile.width = image.naturalWidth;
            canvasTilePicker.height = image.naturalHeight;
            canvasTilePicker.width = image.naturalWidth;
            // Paint the img in the canvas
            contextTile.drawImage(tileImage, 0, 0);
            // Manage the tile selector canvas
            TilePicker.start(canvasTilePicker, calback);
        });
    }

    function initInput(canvas: HTMLCanvasElement, grid: StaticGrid) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            function() { },
            function() { },
            function(i, j, x, y, mouseButton) {
                // Start action
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilePicker.select(i, j);
                }
            },
            function(i, j, mouseButton) {
                //End action
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilePicker.selectEnd(i, j);
                }
            },
            function(i, j, mouseButton) {
                //Ongoing
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilePicker.selectEnd(i, j);
                }
                tilePicker.updatePointer(i, j);
            },
            function(i, j) {
                //Hover
                tilePicker.updatePointer(i, j);
            },
            function() { },
            function() { },
            function() { },
            function(i, j) {
                //OnRightClick
                tilePicker.cleanSelection();
            },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
        );
    };

    export function saveData(callback: IBooleanCallback = null) {
        var updatedData = $("#mapPanel").jstree(true).get_json("#");
        $.ajax({
            url: "edit/maps",
            type: Constant.RequestType.POST,
            contentType: Constant.MimeType.JSON,
            data: JSON.stringify(updatedData),
            success: function(result) {
                console.log("Maps updated");
                if(callback !== null) {
                    //TODO come capire se il salvataggio è fallito?
                    callback(true);
                }
            }
        });
    }

    export function setMapper(mapper: MapperScene) {
        tilePicker.setMapper(mapper);
    };
}