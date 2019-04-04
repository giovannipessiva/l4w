import { Utils } from "../../core/util/Utils"
import { Resource } from "../../core/util/Resource"
import { Input } from "../../core/util/Input"
import { emptyFz, IBooleanCallback } from "../../core/util/Commons"
import { Constant } from "../../core/util/Constant"
import { MapperScene } from "./MapperScene"
import { TilePickerScene } from "./TilePickerScene"
import { StaticGrid } from "../StaticGrid"
import { GridTypeEnum } from "../../core/AbstractGrid"
import { ResourceType } from "../../../../common/src/Constants";

export namespace TilePicker {

    let tilePicker: TilePickerScene;

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

    export function loadTile(tile: string, callback: (tilePicker: TilePickerScene) => void) {
        // Clear the canvas
        let canvasTile = <HTMLCanvasElement>$("#canvasTile")[0];
        let contextTile = <CanvasRenderingContext2D>canvasTile.getContext("2d");
        let canvasTilePicker = <HTMLCanvasElement>$("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        // Load the tileset
        Resource.load(tile, ResourceType.TILE, function(tileImage) {
            // Resize the canvas
            let image = new Image();
            image.src = (<HTMLImageElement> tileImage).src;
            $("#tilePanel").height(image.naturalHeight);
            canvasTile.height = image.naturalHeight;
            canvasTile.width = image.naturalWidth;
            canvasTilePicker.height = image.naturalHeight;
            canvasTilePicker.width = image.naturalWidth;
            // Paint the img in the canvas
            contextTile.drawImage(<HTMLImageElement> tileImage, 0, 0);
            // Manage the tile selector canvas
            TilePicker.start(canvasTilePicker, callback);
        });
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
                tilePicker.requestedNewFrame = true;
                if (Utils.isEmpty(mouseButton) || mouseButton === Input.MouseButtons.LEFT) {
                    tilePicker.selectEnd(i, j);
                }
                tilePicker.updatePointer(i, j);
            },
            function(i, j) {
                //Hover
                tilePicker.updatePointer(i, j);
            },
            emptyFz,
            emptyFz,
            emptyFz,
            function(i, j) {
                //OnRightClick
                tilePicker.cleanSelection();
            },
            emptyFz,
            emptyFz
        );
    };

    export function saveData(callback: IBooleanCallback) {
        var updatedData = $("#mapPanel").jstree(true).get_json("#");
        $.ajax({
            url: "edit/maps",
            type: Constant.RequestType.POST,
            contentType: Constant.MimeType.JSON,
            data: JSON.stringify(updatedData),
            success: function(result) {
                console.log("Maps updated");
                if(callback !== null) {
                    //TODO come capire se il salvataggio � fallito?
                    callback(true);
                }
            }
        });
    }

    export function setMapper(mapper: MapperScene) {
        tilePicker.setMapper(mapper);
    };
}