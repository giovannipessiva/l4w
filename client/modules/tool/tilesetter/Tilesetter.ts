/// <reference path="../../core/util/Utils.ts" />
/// <reference path="../../core/model/Tileset.ts" />

module Tilesetter {

    let tilesetterScene: TilesetterScene;

    /**
     * This funcion will be called only at the first page load
     */
    export function start(canvas: HTMLCanvasElement, editMode: Constant.TileEditMode, callback) {
        new StaticGrid(canvas, function(grid: StaticGrid) {
            new TilesetterScene(grid, canvas.height, canvas.width, editMode, function(scene: TilesetterScene) {
                initInput(canvas, grid);
                tilesetterScene = scene;
                tilesetterScene.start(canvas);
                setTileEditMode(editMode);
                callback();
            });
        }, GridTypeEnum.tilePicker);
    }
    
    export function setTileEditMode(editMode: Constant.TileEditMode) {
        tilesetterScene.changeTileEditMode(editMode);
    }

    export function loadTile(tile: string, callback) {
        // Clear the canvas
        let canvasTile = <HTMLCanvasElement>$("#canvasTile")[0];
        let contextTile = <CanvasRenderingContext2D>canvasTile.getContext("2d");
        let canvasTilesetter = <HTMLCanvasElement>$("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        // Load the tileset
        Resource.load(tile, Resource.TypeEnum.TILE, function(tileImage: HTMLImageElement) {
            // Resize the canvas
            let image: HTMLImageElement = new Image();
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
                tilesetterScene.map.tileset.imageData = image;
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
            emptyFz,
            emptyFz,
            function(i, j, x, y, mouseButton) {
                // Start action
                switch (TilesetterPage.getEditMode()) {
                    case Constant.TileEditMode.BLOCKS:
                        if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                            tilesetterScene.selectPrecisely(i, j, x, y);
                            TilesetterPage.changeEditState(true);
                        }
                        break;
                    case Constant.TileEditMode.ONTOP:
                        if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                            tilesetterScene.selectLeft(i, j);
                        } else if (mouseButton === Input.MouseButtons.RIGHT)  {
                            tilesetterScene.selectRight(i, j);
                        }
                        break;
                    default:
                        console.error("Unexpected case");

                };
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
            emptyFz,
            emptyFz,
            emptyFz,
            function(i, j) {
                //OnRightClick
                tilesetterScene.cleanSelection();
            },
            emptyFz,
            emptyFz
        );
    };

    export function saveTilesetData(callback: IBooleanCallback = null) {
        let blocks: number[] = tilesetterScene.map.blocks;
        tilesetterScene.map.tileset.blocks = blocks;
        $.ajax({
            url: "/edit/tileset/" + tilesetterScene.map.tileset.image,
            type: Constant.RequestType.POST,
            contentType: Constant.MimeType.JSON,
            data: JSON.stringify(tilesetterScene.map.tileset),
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
                let image = tilesetterScene.map.tileset.imageData;  
                tilesetterScene.map.tileset = result;
                tilesetterScene.map.tileset.imageData = image;
                if (!Utils.isEmpty(tilesetterScene)) {
                    if (tilesetterScene.map.tileset.blocks === undefined) {
                        tilesetterScene.map.tileset.blocks = [];
                    }
                    if (tilesetterScene.map.tileset.onTop === undefined) {
                        tilesetterScene.map.tileset.onTop = [];
                    }
                    tilesetterScene.map.blocks = tilesetterScene.map.tileset.blocks;
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