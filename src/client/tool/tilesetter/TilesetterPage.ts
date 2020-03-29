import { Resource } from "../../core/util/Resource"
import { IPropertiesCallback } from "../../core/util/Commons"
import { Constant } from "../../core/util/Constant"
import { Compatibility } from "../../core/util/Compatibility"
import { Tilesetter } from "./Tilesetter"

declare var base_path: string;

export namespace TilesetterPage {

    export const PAGE_TITLE = document.title;

    export function start() {
        Compatibility.check(); 
        
        // Resize the panel to match the tileset
        let resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            let width = +props.get("cellWidth")! * +props.get("tileColumns")! + 2;
            document.getElementById("toolsPanel")!.style.width = width + "";
        };
        Resource.loadProperties(resizerCallback);

        $.getJSON(base_path + "assetlist/tile", function(data) {
            let sel = <HTMLSelectElement> document.getElementById("tiles");
            for (let i = 0; i < data.length; i++) {
                let opt = document.createElement("option");
                opt.value = data[i];
                opt.label = data[i];
                sel.appendChild(opt);
            }
            Tilesetter.start(<HTMLCanvasElement> document.getElementById("canvasSelector"), getEditMode(), function() {
                let tile = (<HTMLSelectElement> document.getElementById("tiles")).value;
                Tilesetter.loadTile(tile, function(result, w: number, h: number) { });
            });
        });

        loadNews();
    }

    export function loadNews() {
        $.getJSON(base_path + "news", function(data) {
            //let news = document.getElementById("news");
            //TODO manage json response
        });
    }
    
    export function changeTile() {
        let tile = (<HTMLSelectElement> document.getElementById("tiles")).value;
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
        let editModeStr : string = (<HTMLSelectElement> document.getElementById("editModes")).value;
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
        if (edited) {
            document.title = PAGE_TITLE + "*";
        } else {
            document.title = PAGE_TITLE;
        }
        (<HTMLButtonElement> document.getElementById("saveButton")).disabled = !edited;
        (<HTMLButtonElement> document.getElementById("reloadButton")).disabled = !edited;

        if (mapChanged) {

        }
    }
}