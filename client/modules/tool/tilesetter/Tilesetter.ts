/// <reference path="../../core/util/Utils.ts" />

namespace Tilesetter {

    var tilesetter: TilesetterScene;

    export function start(canvas: HTMLCanvasElement, callback: (tilesetter: TilesetterScene) => void) {
        tilesetter = null;
        new StaticGrid(canvas, function(grid: StaticGrid) {
            let select = <HTMLSelectElement> $("#editModes")[0];
            let tileEditMode = Constant.TileEditMode[select.value];            
            new TilesetterScene(grid, canvas.height, canvas.width, tileEditMode, function(scene: TilesetterScene) {
                tilesetter = scene;
                initInput(canvas, grid);
                tilesetter.start(canvas);
                tilesetter.toggleEditorGrid(true);
                callback(tilesetter);
            });
        }, GridTypeEnum.tilePicker);
    }

    export function loadTile(tile: string, calback: (tilesetter: TilesetterScene) => void) {
        // Clear the canvas
        var canvasTile = <HTMLCanvasElement>$("#canvasTile")[0];
        var contextTile = <CanvasRenderingContext2D>canvasTile.getContext("2d");
        var canvasTilesetter = <HTMLCanvasElement>$("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        // Load the tileset
        Resource.load(tile, Resource.TypeEnum.TILE, function(element: JQuery) {
            // Resize the canvas
            var image = new Image();
            image.src = element.attr("src");
            $("#tilePanel").height(image.naturalHeight);
            canvasTile.height = image.naturalHeight;
            canvasTile.width = image.naturalWidth;
            canvasTilesetter.height = image.naturalHeight;
            canvasTilesetter.width = image.naturalWidth;
            // Paint the img in the canvas
            contextTile.drawImage(<HTMLImageElement>element[0], 0, 0);
            // Manage the tile selector canvas
            Tilesetter.start(canvasTilesetter, calback);
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
            function(x, y, mouseButton) {
                // Start action
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilesetter.select(x, y);
                }
            },
            function(x, y, mouseButton) {
                //End action
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilesetter.selectEnd(x, y);
                }
            },
            function(x, y, mouseButton) {
                //Ongoing
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilesetter.selectEnd(x, y);
                }
                tilesetter.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                tilesetter.updatePointer(x, y);
            },
            function() { },
            function() { },
            function() { },
            function(x, y) {
                //OnRightClick
                tilesetter.cleanSelection();
            },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
        );
    };

    export function saveData(callback: IBooleanCallback = null) {
        var updatedData = $("#mapPanel").jstree(true).get_json("#");
        $.ajax({
            url: "edit/maps",
            type: "post",
            contentType: "application/json",
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
}