import Vue from "vue"

// @ts-ignore https://github.com/vuejs/vue-cli/issues/1198
import LoginComponent from "../../components/Login.vue"

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

        new Vue({
            el: "#loginVue",
            components: {
                "login": LoginComponent,
            }
        });
        
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
            Tilesetter.start(<HTMLCanvasElement> document.getElementById("canvasSelector"), getEditMode(), changeTile);
        });

        loadNews();
    }

    export function loadNews() {
        /*
        $.getJSON(base_path + "news", function(data) {
            //let news = document.getElementById("news");
            //TODO manage json response
        });
        */
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
        // Buttons can be null while login component is loading
        let save = (<HTMLButtonElement> document.getElementById("saveButton"));
        if(save !== null) {
            save.disabled = !edited;
        }
        let reload = (<HTMLButtonElement> document.getElementById("reloadButton"));
        if(reload !== null) {
            reload.disabled = !edited;
        }
    }
}