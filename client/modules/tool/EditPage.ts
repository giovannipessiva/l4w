/// <reference path="../interfaces/jstree.d.ts" />
/// <reference path="../interfaces/jstree.d.extended.ts" />
/// <reference path="../core/util/Resource.ts" />
/// <reference path="../core/util/Commons.ts" />

namespace EditPage {
    
    export const PAGE_TITLE = document.title;
    export const BUTTON_ID_MODE = "mode";
    export const BUTTON_ID_LAYER = "layer";

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
            $("#mapDetailPanel").show();
            var node: JSTreeNode = getSelectedNode();
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

        var updatedData = $("#mapPanel").jstree(true).get_json("#");
        $.ajax({
            url: "edit/maps",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(updatedData),
            success: function(result) {
                console.log("Maps updated");
            }
        });
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

        var updatedData = $("#mapPanel").jstree(true).get_json("#");
        $.ajax({
            url: "edit/maps",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(updatedData),
            success: function(result) {
                TilePicker.loadTile(node.data.tile,function() {
                    Mapper.changeTile(node.data.tile);
                    toggleEditMark(false);
                });
            }
        });
    }
    
    export function getActiveMap() : string {
        return getSelectedNode().id;
    }

    function getSelectedNode(): JSTreeNode {
        return $("#mapPanel").jstree(true).get_selected(true)[0];
    }
    
    export function toggleEditMark(edited: boolean) {
        if(edited) {
            document.title = PAGE_TITLE + "*";
        } else {
            document.title = PAGE_TITLE;
        }
        (<HTMLButtonElement>$("#saveButton")[0]).disabled=!edited;
        (<HTMLButtonElement>$("#reloadButton")[0]).disabled=!edited;
    }
}