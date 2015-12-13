/// <reference path="../interfaces/jstree.d.ts" />
/// <reference path="../core/util/Resource.ts" />
/// <reference path="../core/util/Commons.ts" />

module EditPage {

    export function start() {
        $("#mapPanel").jstree({
            "core": {
                "animation": 0,
                "data": {
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

        $("#mapPanel").on("changed.jstree", function(e, data) {
            $("#mapDetailPanel").show();
            var node = data.instance.get_selected(true)[0];
            $("#mapSizeW").val(node.data.w);
            $("#mapSizeH").val(node.data.h);
            $("#tiles").val(node.data.tile);
            loadTile();
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
        var node = $("#mapPanel").jstree(true).get_selected(true)[0];
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
                loadTile();
            }
        });
    }

    export function loadTile() {
        // Clear the canvas
        var canvasTile = <HTMLCanvasElement> $("#canvasTile")[0];
        var contextTile = <CanvasRenderingContext2D> canvasTile.getContext("2d");      
        var canvasTilePicker = <HTMLCanvasElement> $("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        // Load the tileset
        Resource.load($("#tiles").val(),Resource.ResurceTypeEnum.TILE, function(element: JQuery){
            // Resize the canvas
            var image = new Image();
            image.src = element.attr("src");
            $("#tilePanel").height(image.naturalHeight);
            canvasTile.height = image.naturalHeight;
            canvasTile.width = image.naturalWidth;
            canvasTilePicker.height = image.naturalHeight;
            canvasTilePicker.width = image.naturalWidth;      
            // Paint the img in the canvas
            contextTile.drawImage(<HTMLImageElement> element[0],0,0);
            // Manage the tile selector canvas
            startTilePicker(canvasTilePicker);
        });
    }
    
    function startTilePicker(canvas: HTMLCanvasElement) {
       //TODO nuova static grid
       TilePicker.start(canvas);
    }
}