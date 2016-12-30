/// <reference path="../core/util/Resource.ts" />
/// <reference path="../core/util/Commons.ts" />

declare var base_path: string;

namespace TilesetterPage {

    export const PAGE_TITLE = document.title;
    export const BUTTON_ID_MODE = "mode";
    export const BUTTON_ID_LAYER = "layer";

    let flagFirstLoad: boolean = true;
    let flagEdited: boolean = false;

    export function start() {
        Compatibility.check(); 
        var canvas = <HTMLCanvasElement>document.getElementById("canvas1");
        
        // Resize the panel to match the tileset
        var resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            var width = +props.get("cellWidth") * +props.get("tileColumns") + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);

        loadTiles();

        loadNews();
    }

    function loadTiles() {
        $.getJSON(base_path + "data/resources/tiles.json", function(data) {
            var sel = $("#tiles");
            for (var i = 0; i < data.length; i++) {
                sel.append("<option value='" + data[i].name + "'>" + data[i].desc
                    + "</option>");
            }
            changeTile();
        });
    }

    export function loadNews() {
        $.getJSON(base_path + "news", function(data) {
            var news = $("#news");
            //TODO manage json response
        });
    }

    export function changeTile() {
        let tile = $("#tiles").val();
        TilePicker.loadTile(tile, function(tilePicker: TilePickerScene) {
        });
        changeEditState(true);
    }

    export function save() {
        //TODO
    }

    export function reload() {
        //TODO
    }

    export function changeEditState(edited: boolean, mapChanged: boolean = true) {
        flagEdited = edited;
        if (edited) {
            document.title = PAGE_TITLE + "*";
        } else {
            document.title = PAGE_TITLE;
        }
        (<HTMLButtonElement>$("#saveButton")[0]).disabled = !edited;
        (<HTMLButtonElement>$("#reloadButton")[0]).disabled = !edited;

        if (mapChanged) {

        }
    }
}