/// <reference path="../../core/util/Utils.ts" />
/// <reference path="../../core/model/Tileset.ts" />

namespace Tilesetter {

    var tilesetterScene: TilesetterScene;
    var tileset: ITilesetData;

    /**
     * This funcion will be called only at the first page load
     */
    export function start(canvas: HTMLCanvasElement) {
        new StaticGrid(canvas, function(grid: StaticGrid) {
            let select = <HTMLSelectElement>$("#editModes")[0];
            let tileEditMode = Constant.TileEditMode[select.value];
            new TilesetterScene(grid, canvas.height, canvas.width, tileEditMode, function(scene: TilesetterScene) {
                initInput(canvas, grid);
                tilesetterScene = scene;
                tilesetterScene.setBlocks(tileset.blocks);
                tilesetterScene.start(canvas);
                tilesetterScene.toggleEditorGrid(true);
            });
        }, GridTypeEnum.tilePicker);
    }

    export function loadTile(tile: string, callback) {
        // Clear the canvas
        var canvasTile = <HTMLCanvasElement>$("#canvasTile")[0];
        var contextTile = <CanvasRenderingContext2D>canvasTile.getContext("2d");
        var canvasTilesetter = <HTMLCanvasElement>$("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        // Load the tileset
        Resource.load(tile, Resource.TypeEnum.TILE, function(tileImage: HTMLImageElement) {
            // Resize the canvas
            let image = new Image();
            image.src = tileImage.src;
            $("#tilePanel").height(image.naturalHeight);
            canvasTile.height = image.naturalHeight;
            canvasTile.width = image.naturalWidth;
            canvasTilesetter.height = image.naturalHeight;
            canvasTilesetter.width = image.naturalWidth;
            // Paint the img in the canvas
            contextTile.drawImage(tileImage, 0, 0);
            // Load tileset data
            loadTilesetData(function(result) {
                callback(result, image.naturalWidth, image.naturalHeight);
            });
        });
    }
    
    export function updateSize(w: number, h: number) {
        tilesetterScene.updateSize(w, h);
    }

    function initInput(canvas: HTMLCanvasElement, grid: StaticGrid) {
        let inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();

        Input.init(
            canvas,
            grid,
            inputCallbackMap,
            function() { },
            function() { },
            function(i, j, x, y, mouseButton) {
                // Start action
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilesetterScene.selectPrecisely(i, j, x, y);
                    TilesetterPage.changeEditState(true);
                }
            },
            function(i, j, mouseButton) {
                //End action
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilesetterScene.selectEnd(i, j);
                }
            },
            function(i, j, mouseButton) {
                //Ongoing
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilesetterScene.selectEnd(i, j);
                }
                tilesetterScene.updatePointer(i, j);
            },
            function(i, j) {
                //Hover
                tilesetterScene.updatePointer(i, j);
            },
            function() { },
            function() { },
            function() { },
            function(i, j) {
                //OnRightClick
                tilesetterScene.cleanSelection();
            },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
        );
    };

    export function saveTilesetData(callback: IBooleanCallback = null) {
        let blocks: number[] = tilesetterScene.map.blocks;
        tileset.blocks = blocks;
        $.ajax({
            url: "/edit/tileset/" + tileset.image,
            type: Constant.RequestType.POST,
            contentType: Constant.MimeType.JSON,
            data: JSON.stringify(tileset),
            success: function(result) {
                callback(true);
            },
            error: function(ajaxrequest, ajaxOptions, thrownError) {
                console.error(thrownError);
                callback(false);
            }
        });
    }

    export function loadTilesetData(callback: IBooleanCallback = null) {
        let tileImage = $("#tiles").val();
        $.ajax({
            url: "/data/tileset/" + tileImage,
            type: Constant.RequestType.GET,
            contentType: Constant.MimeType.JSON,
            success: function(result: ITilesetData) {
                tileset = result;
                if (!Utils.isEmpty(tilesetterScene)) {
                    if (tileset.blocks === undefined) {
                        tileset.blocks = [];
                    }
                    tilesetterScene.setBlocks(tileset.blocks);
                }
                callback(true);
            },
            error: function(ajaxrequest, ajaxOptions, thrownError) {
                console.error(thrownError);
                callback(false);
            }
        });
    }
}