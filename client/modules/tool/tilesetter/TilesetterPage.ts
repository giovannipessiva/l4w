/// <reference path="../../core/util/Resource.ts" />
/// <reference path="../../core/util/Commons.ts" />

declare var base_path: string;

namespace TilesetterPage {

    export const PAGE_TITLE = document.title;
    export const BUTTON_ID_MODE = "mode";
    export const BUTTON_ID_LAYER = "layer";

    let flagEdited: boolean = false;
    
    enum EditModeEnum {
        BLOCKS,
        ZINDEX    
    };    

    export function start() {
        Compatibility.check(); 
        
        // Resize the panel to match the tileset
        let resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            let width = +props.get("cellWidth") * +props.get("tileColumns") + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);

        loadTiles();

        loadNews();
    }

    function loadTiles() {
        $.getJSON(base_path + "data/resources/tiles.json", function(data) {
            let sel = $("#tiles");
            for (let i = 0; i < data.length; i++) {
                sel.append("<option value='" + data[i].name + "'>" + data[i].desc
                    + "</option>");
            }
            changeTile();
        });
    }

    export function loadNews() {
        $.getJSON(base_path + "news", function(data) {
            let news = $("#news");
            //TODO manage json response
        });
    }

    export function changeTile() {
        let tile = $("#tiles").val();
        Tilesetter.loadTile(tile);
        changeEditState(true);
    }
    
    function getEditMode(): EditModeEnum {
        let editModeStr : string = $("#editModes").val();
        return EditModeEnum[editModeStr];
        
    }
    
    export function changeTileEditMode() {
        //TODO gestisci edit mode "z index"
    }
    
    function saveCallback(result: boolean) {
        if (!result) {
            console.error("Salvataggio fallito");
        }
    }

    export function save() {
        switch (getEditMode()) {
            case EditModeEnum.BLOCKS:
                Tilesetter.saveTilesetData(saveCallback);
                break;
            case EditModeEnum.ZINDEX:
                //TODO
                break;
        };
    }

    export function reload() {
        switch (getEditMode()) {
            case EditModeEnum.BLOCKS:
                Tilesetter.loadTilesetData(saveCallback);
                break;
            case EditModeEnum.ZINDEX:
                //TODO
                break;
        };
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