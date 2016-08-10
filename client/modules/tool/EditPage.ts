/// <reference path="../interfaces/jstree.d.ts" />
/// <reference path="../interfaces/jstree.d.extended.ts" />
/// <reference path="../core/util/Resource.ts" />
/// <reference path="../core/util/Commons.ts" />

namespace EditPage {
    
    export const PAGE_TITLE = document.title;
    export const BUTTON_ID_MODE = "mode";
    export const BUTTON_ID_LAYER = "layer";
    
    let flagFirstLoad: boolean = true;
    let flagEdited: boolean = false;

    export function start() {
        $("#mapPanel").jstree({
            "core": {
                "animation": 0,
                "data": {
                    "url": "data/map",
                    "dataType": "json"
                },
                "check_callback": true,
            },
            "multiple": false,
            "plugins": ["dnd", "contextmenu"],
            "themes": {
                "dots": false
            }
        });
        
        var canvas = <HTMLCanvasElement> document.getElementById("canvas1");

        $("#mapPanel").on("changed.jstree", function(e, data) {
            // Prevent double call at start
            if (data.action === "ready") {
                return;
            }
            if(flagFirstLoad) {
                flagFirstLoad = false;
            }
            if(flagEdited) {
                alert("Prima di cambiare mappa e' necessario salvare");
                return;
            }
            $("#mapDetailPanel").show();
            var node: JSTreeNode = getSelectedNode();
            if(Utils.isEmpty(node.data)) {
                //TODO l'inizilizzazione va fatta da un'altra parte
                node.data = {
                    w: 25,
                    h: 20,
                    tile: "002-Woods01.png"  
                };
            }
            $("#mapSizeW").val(node.data.w + "");
            $("#mapSizeH").val(node.data.h + "");
            $("#tiles").val(node.data.tile);
            TilePicker.loadTile(node.data.tile, function(tilePicker: TilePickerScene) {
                Mapper.start(canvas, tilePicker, node.id);
            });
        });
        
        // Resize the panel to match the tileset
        var resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            var width = +props.get("cellWidth") * +props.get("tileColumns") + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);

        loadTiles();
        
        loadNews();
    }

    export function changeSize() {
        var node = getSelectedNode();
        node.data.w = $("#mapSizeW").val();
        node.data.h = $("#mapSizeH").val();
        Mapper.changeSize(node.data.h, node.data.w);
        changeEditState(true);
    }
    
    function loadTiles() {
        $.getJSON("data/resources/tiles.json", function(data) {
            var sel = $("#tiles");
            for (var i = 0; i < data.length; i++) {
                sel.append("<option value='" + data[i].name + "'>" + data[i].desc
                    + "</option>");
            }
        });
    }
    
    export function loadNews() {
        $.getJSON("news", function(data) {
            var news = $("#news");
            //TODO manage json response
        });
    }

    export function changeTile() {
        var node = $("#mapPanel").jstree(true).get_selected(true)[0];
        node.data.tile = $("#tiles").val();
        TilePicker.loadTile(node.data.tile,function(tilePicker: TilePickerScene) {
            Mapper.changeTile(node.data.tile, tilePicker);
        });
        changeEditState(true);
    }
    
    export function save() {
        Mapper.saveMap(function(result1) {
            if(result1) {
                EditPage.changeEditState(false);
                TilePicker.saveData(function(result2) {
                    if(!result2) {
                        console.error("Salvataggio fallito");
                    }
                });
            } else {
                console.error("Salvataggio fallito");
            }
        });
    }
            
    export function reload() {
        Mapper.reloadMap();
        //TODO reload tree
    }
    
    export function getActiveMap() : string {
        return getSelectedNode().id;
    }

    function getSelectedNode(): JSTreeNode {
        return $("#mapPanel").jstree(true).get_selected(true)[0];
    }
    
    export function changeEditState(edited: boolean) {
        flagEdited = edited;
        if(edited) {
            document.title = PAGE_TITLE + "*";
        } else {
            document.title = PAGE_TITLE;
        }
        (<HTMLButtonElement>$("#saveButton")[0]).disabled=!edited;
        (<HTMLButtonElement>$("#reloadButton")[0]).disabled=!edited;
        
        // Disable maps selection
        var test = $("#mapPanel").jstree(true).get_json("#", {
            "flat": true,
            "no_state": false,
            "no_id": false,
            "no_children": false,
            "no_data": false
        });
        $.each(test, function( key: string, node: JSTreeNode ) {
            if (node.state.selected === false) {
                if(edited) {
                    $("#mapPanel").jstree("disable_node", node.id);
                } else {
                    $("#mapPanel").jstree("enable_node", node.id);
                }
            }
        });
        //TODO disabilitare il contextMenu
    }
}