/// <reference path="../../core/util/Resource.ts" />
/// <reference path="../../core/util/Commons.ts" />

declare var base_path: string;

namespace TilesetterPage {

    export const PAGE_TITLE = document.title;

    let flagEdited: boolean = false;

    export function start() {
        Compatibility.check(); 
        
        // Resize the panel to match the tileset
        let resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            let width = +props.get("cellWidth") * +props.get("tileColumns") + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);

        $.getJSON(base_path + "assetlist/tile", function(data) {
            let sel = $("#tiles");
            for (let i = 0; i < data.length; i++) {
                sel.append("<option value='" + data[i] + "'>" + data[i] + "</option>");
            }
            Tilesetter.start(<HTMLCanvasElement>$("#canvasSelector")[0], getEditMode(), function() {
                let tile = $("#tiles").val();
                Tilesetter.loadTile(tile, function(result, w, h) { });
            });
        });

        loadNews();
    }

    export function loadNews() {
        $.getJSON(base_path + "news", function(data) {
            let news = $("#news");
            //TODO manage json response
        });
    }
    
    export function changeTile() {
        let tile = $("#tiles").val();
        Tilesetter.loadTile(tile, function(success: boolean, w: number, h: number) {
            if(success) {
                Tilesetter.updateSize(w, h);
                changeEditState(false);
            } else {
                console.error("Tile loading failed: " + tile);    
            }
        });
    }
    
    export function getEditMode(): Constant.TileEditMode {
        let editModeStr : string = $("#editModes").val();
        return Constant.TileEditMode[editModeStr];
    }
    
    export function changeTileEditMode() {
        Tilesetter.setTileEditMode(getEditMode());
        TilesetterPage.changeEditState(false);
    }
 
    export function save() {
        Tilesetter.saveTilesetData(function(success: boolean) {
            if (success) {
                TilesetterPage.changeEditState(false);
            } else {
                console.error("Saving failed");
            }
        });
    }

    export function reload() {
        Tilesetter.loadTilesetData(function(success: boolean) {
            if (success) {
                TilesetterPage.changeEditState(false);
            } else {
                console.error("Loading failed");
            }
        });
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