/// <reference path="../interfaces/jstree.d.ts" />
/// <reference path="../interfaces/jstree.d.extended.ts" />
/// <reference path="../core/util/Resource.ts" />
/// <reference path="../core/util/Commons.ts" />

module EditPage {

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
            TilePicker.loadTile(node.data.tile);
            Mapper.loadMap(node);
        });
        
        // Resize the panel to match the tileset
        var resizerCallback: IPropertiesCallback = function(props: Map<string, number>) {
            var width = +props.get("cellWidth") * +props.get("tileColumns") + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);

        var canvas = <HTMLCanvasElement> document.getElementById("canvas1");
        Mapper.start(canvas);

        loadTiles();
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

    export function loadTiles() {
        $.getJSON("data/resources/tiles.json", function(data) {
            var sel = $("#tiles");
            for (var i = 0; i < data.length; i++) {
                sel.append("<option value='" + data[i].name + "'>" + data[i].desc
                    + "</option>");
            }
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
                TilePicker.loadTile(node.data.tile);
                Mapper.changeTile(node.data.tile);
            }
        });
    }

    function getSelectedNode(): JSTreeNode {
        return $("#mapPanel").jstree(true).get_selected(true)[0];
    }
}