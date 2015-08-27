/// <reference path="../interfaces/jstree.d.ts" />
/// <reference path="../core/util/Resource.ts" />
/// <reference path="../core/util/Commons.ts" />

module EditPage {

    export function start() {
        $('#mapPanel').jstree({
            'core': {
                "animation": 0,
                'data': {
                    "url": "data/map/maps.json",
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

        $('#mapPanel').on("changed.jstree", function(e, data) {
            $('#mapDetailPanel').show();
            var node = data.instance.get_selected(true)[0];
            $('#mapSizeW').val(node.data.w);
            $('#mapSizeH').val(node.data.h);
            $('#tiles').val(node.data.tile);
            loadTile();
        });

        var canvas = <HTMLCanvasElement> document.getElementById('canvas1');
        Mapper.start(canvas);

        loadTiles();
    }

    export function changeSize() {
        var node = $('#mapPanel').jstree(true).get_selected(true)[0];
        node.data.w = $('#mapSizeW').val();
        node.data.h = $('#mapSizeH').val();

        var updatedData = $('#mapPanel').jstree(true).get_json('#');
        $.ajax({
            url: "edit/maps",
            type: 'post',
            contentType: 'application/json',
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
                sel.append('<option value="' + data[i].name + '">' + data[i].desc
                    + '</option>');
            }
        });
    }

    export function changeTile() {
        var node = $('#mapPanel').jstree(true).get_selected(true)[0];
        node.data.tile = $('#tiles').val();

        var updatedData = $('#mapPanel').jstree(true).get_json('#');
        $.ajax({
            url: "edit/maps",
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(updatedData),
            success: function(result) {
                loadTile();
            }
        });
    }

    export function loadTile() {
        // Load the tileset
        var uri = "tileset/" + $('#tiles').val();
        Resource.loadAsset(uri, "tmpImg");
        // Resize the panel to match the tileset
        var resizerCallback: IPropertiesCallback = function(props: Map<string, string>) {
            var width = +props['cellWidth'] * +props['tileColumns'];
            $('#toolsPanel').width(width);
        };
        Resource.loadProperties(resizerCallback);
    }
}