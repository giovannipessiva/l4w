function start() {
	$('#mapPanel').jstree({
		'core' : {
			"animation" : 0,
			'data' : {
				"url" : "data/map/maps.json",
				"dataType" : "json"
			},
			"check_callback" : true,
		},
		"multiple" : false,
		"plugins" : [ "dnd", "contextmenu" ],
		"themes" : {
			"dots" : false
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

	Mapper.start(canvas);

	loadTiles();
}

function changeSize() {
	var node = $('#mapPanel').jstree(true).get_selected(true)[0];
	node.data.w = $('#mapSizeW').val();
	node.data.h = $('#mapSizeH').val();

	var updatedData = $('#mapPanel').jstree(true).get_json('#', {
		flat : true
	});
	$.ajax({
		url : "edit/maps",
		type : 'post',
		contentType : 'application/json',
		data : JSON.stringify(updatedData),
		success : function(result) {
			console.log("Maps updated");
		}
	});
}

function loadTiles() {
	$.getJSON("data/resources/tiles.json", function(data) {
		var sel = $("#tiles");
		for (var i = 0; i < data.length; i++) {
			sel.append('<option value="' + data[i].name + '">' + data[i].desc
					+ '</option>');
		}
	});
}

function changeTile() {
	var node = $('#mapPanel').jstree(true).get_selected(true)[0];
	node.data.tile = $('#tiles').val();

	var updatedData = $('#mapPanel').jstree(true).get_json('#', {
		flat : true
	});
	$.ajax({
		url : "edit/maps",
		type : 'post',
		contentType : 'application/json',
		data : JSON.stringify(updatedData),
		success : function(result) {
			loadTile();
		}
	});
}

function loadTile() {
	var $loader = $(document.createElement('img'));
	$loader.one('load', function() {
		$('#tmpImg').attr('src', $loader.attr('src'));
    });
    $loader.attr('src', "assets/tileset/" + $('#tiles').val());
    if($loader.complete) {
        $loader.trigger('load');
    }
}