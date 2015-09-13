;
;
;
var Resource;
(function (Resource) {
    var dataFolder = "data/";
    (function (ResurceTypeEnum) {
        ResurceTypeEnum[ResurceTypeEnum["CHAR"] = 0] = "CHAR";
        ResurceTypeEnum[ResurceTypeEnum["FACE"] = 1] = "FACE";
        ResurceTypeEnum[ResurceTypeEnum["SKIN"] = 2] = "SKIN";
        ResurceTypeEnum[ResurceTypeEnum["TILE"] = 3] = "TILE";
    })(Resource.ResurceTypeEnum || (Resource.ResurceTypeEnum = {}));
    var ResurceTypeEnum = Resource.ResurceTypeEnum;
    var properties = new Map();
    function loadProperties(onLoadCallback, file) {
        if (file === void 0) { file = "l4w"; }
        if (file in properties) {
            onLoadCallback(properties[file]);
        }
        else {
            function parsePropertiesCallback() {
                var props = parseProperties(this.responseText);
                properties[file] = props;
                onLoadCallback(props);
            }
            sendRequest(dataFolder + file + ".properties", parsePropertiesCallback);
        }
    }
    Resource.loadProperties = loadProperties;
    ;
    function parseProperties(content) {
        var props = new Map();
        var lines = content.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line !== "" && line.indexOf("#") !== 0) {
                var lineTokens = line.split("=");
                props[lineTokens[0]] = lineTokens[1];
            }
        }
        return props;
    }
    ;
    function sendRequest(uri, callback) {
        var request = new XMLHttpRequest();
        request.onload = callback;
        request.onerror = handleRequestError;
        request.ontimeout = handleRequestTimeout;
        request.open("GET", uri, true);
        try {
            request.send();
        }
        catch (exception) {
            if (exception.name === "NetworkError") {
                console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files");
            }
        }
        function handleRequestError(event) {
            console.error("Error while getting " + uri);
        }
        ;
        function handleRequestTimeout() {
            console.error("Timeout while etting " + uri);
        }
        ;
    }
    function loadAsset(file, assetType, callback) {
        var path = getAssetPath(file, assetType);
        var $loader = $(document.createElement("img"));
        $loader.attr("src", path);
        $loader.load(function () {
            callback($loader);
        });
    }
    Resource.loadAsset = loadAsset;
    function loadAssetToImg(file, assetType, imageId) {
        loadAsset(file, assetType, function (tmpImg) {
            $("#" + imageId).attr("src", tmpImg.attr("src"));
        });
    }
    Resource.loadAssetToImg = loadAssetToImg;
    function getAssetPath(file, assetType) {
        var path = "assets/";
        switch (assetType) {
            case 0 /* CHAR */:
                path += "charset/";
                break;
            case 1 /* FACE */:
                path += "faceset/";
                break;
            case 2 /* SKIN */:
                path += "skin/";
                break;
            case 3 /* TILE */:
                path += "tileset/";
                break;
        }
        ;
        return path + file;
    }
})(Resource || (Resource = {}));
var EditPage;
(function (EditPage) {
    function start() {
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
        $("#mapPanel").on("changed.jstree", function (e, data) {
            $("#mapDetailPanel").show();
            var node = data.instance.get_selected(true)[0];
            $("#mapSizeW").val(node.data.w);
            $("#mapSizeH").val(node.data.h);
            $("#tiles").val(node.data.tile);
            loadTile();
        });
        var resizerCallback = function (props) {
            var width = +props.get("cellWidth") * +props.get("tileColumns") + 2;
            $("#toolsPanel").width(width);
        };
        Resource.loadProperties(resizerCallback);
        var canvas = document.getElementById("canvas1");
        Mapper.start(canvas);
        loadTiles();
    }
    EditPage.start = start;
    function changeSize() {
        var node = $("#mapPanel").jstree(true).get_selected(true)[0];
        node.data.w = $("#mapSizeW").val();
        node.data.h = $("#mapSizeH").val();
        var updatedData = $("#mapPanel").jstree(true).get_json("#");
        $.ajax({
            url: "edit/maps",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(updatedData),
            success: function (result) {
                console.log("Maps updated");
            }
        });
    }
    EditPage.changeSize = changeSize;
    function loadTiles() {
        $.getJSON("data/resources/tiles.json", function (data) {
            var sel = $("#tiles");
            for (var i = 0; i < data.length; i++) {
                sel.append("<option value='" + data[i].name + "'>" + data[i].desc + "</option>");
            }
        });
    }
    EditPage.loadTiles = loadTiles;
    function changeTile() {
        var node = $("#mapPanel").jstree(true).get_selected(true)[0];
        node.data.tile = $("#tiles").val();
        var updatedData = $("#mapPanel").jstree(true).get_json("#");
        $.ajax({
            url: "edit/maps",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(updatedData),
            success: function (result) {
                loadTile();
            }
        });
    }
    EditPage.changeTile = changeTile;
    function loadTile() {
        var canvasTile = $("#canvasTile")[0];
        var contextTile = canvasTile.getContext("2d");
        var canvasTilePicker = $("#canvasSelector")[0];
        contextTile.clearRect(0, 0, canvasTile.width, canvasTile.height);
        Resource.loadAsset($("#tiles").val(), 3 /* TILE */, function (element) {
            var image = new Image();
            image.src = element.attr("src");
            $("#tilePanel").height(image.naturalHeight);
            canvasTile.height = image.naturalHeight;
            canvasTile.width = image.naturalWidth;
            canvasTilePicker.height = image.naturalHeight;
            canvasTilePicker.width = image.naturalWidth;
            contextTile.drawImage(element[0], 0, 0);
            startTilePicker(canvasTilePicker);
        });
    }
    EditPage.loadTile = loadTile;
    function startTilePicker(canvas) {
        TilePicker.start(canvas);
    }
})(EditPage || (EditPage = {}));
var World;
(function (World) {
    var Map = (function () {
        function Map(grid) {
            this.rows = 30;
            this.columns = 50;
            this.layers = [];
            this.grid = grid;
        }
        Map.prototype.render = function (context, x, y, renderingOptions) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
            if (renderingOptions != null) {
                if (renderingOptions.showGrid) {
                    context.strokeStyle = Constant.Color.RED;
                    context.strokeRect(x * this.grid.cellW, y * this.grid.cellH, this.grid.cellW, this.grid.cellH);
                }
                if (renderingOptions.showEditorGrid) {
                    context.save();
                    context.globalAlpha = 0.4;
                    context.strokeStyle = Constant.Color.GREY;
                    context.strokeRect(x * this.grid.cellW, y * this.grid.cellH, this.grid.cellW, this.grid.cellH);
                    context.restore();
                }
                if (renderingOptions.showCellNumbers) {
                    context.fillStyle = Constant.Color.RED;
                    context.font = "bold 10px Arial";
                    context.fillText(x + "," + y, x * this.grid.cellW + 1, y * this.grid.cellH + 10);
                }
            }
        };
        Map.prototype.getLayers = function () {
            return this.layers.length;
        };
        return Map;
    })();
    World.Map = Map;
    ;
    var MapLayer = (function () {
        function MapLayer() {
        }
        MapLayer.prototype.render = function (context, x, y) {
        };
        return MapLayer;
    })();
    var Options = (function () {
        function Options() {
            this.showGrid = false;
            this.showEditorGrid = false;
            this.showFPS = false;
            this.showCellNumbers = false;
            this.showFocus = false;
            this.fps = 0;
        }
        return Options;
    })();
    World.Options = Options;
})(World || (World = {}));
var Actor;
(function (Actor) {
    var Event = (function () {
        function Event() {
            this.states = [];
            this.states.push(new EventState(this));
            this.state = 0;
        }
        Event.prototype.update = function (events, map, time) {
            this.states[this.state].update(events, map, time);
        };
        Event.prototype.render = function (x, y) {
            this.states[this.state].render(x, y);
        };
        return Event;
    })();
    Actor.Event = Event;
    ;
    var EventState = (function () {
        function EventState(event) {
            this.event = event;
        }
        EventState.prototype.update = function (events, map, time) {
        };
        EventState.prototype.render = function (x, y) {
        };
        return EventState;
    })();
})(Actor || (Actor = {}));
var AbstractGrid = (function () {
    function AbstractGrid(cnvs, onCompleted) {
        this.canvas = cnvs;
        this.currentTranslation = { x: 0, y: 0 };
        (function (grid) {
            Resource.loadProperties(function (props) {
                grid.deferredInit(props);
                grid.updateSizingDerivates();
                grid.refresh();
                onCompleted(grid);
            });
        })(this);
    }
    AbstractGrid.prototype.deferredInit = function (props) {
        this.cellH = +props["cellHeight"];
        this.cellW = +props["cellWidth"];
    };
    AbstractGrid.prototype.updateSizingDerivates = function () {
        this.baseH = this.cellH * this.rows;
        this.baseW = this.cellW * this.columns;
        this.halfRows = Math.floor(this.rows / 2);
        this.halfColumns = Math.floor(this.columns / 2);
    };
    AbstractGrid.prototype.refresh = function () {
        this.canvas.height = this.baseH * this.scale;
        this.canvas.width = this.baseW * this.scale;
    };
    AbstractGrid.prototype.clear = function (context) {
        context.clearRect(this.currentTranslation.x, this.currentTranslation.y, this.baseW + this.currentTranslation.x, this.baseH + this.currentTranslation.y);
    };
    AbstractGrid.prototype.mapPositionToGrid = function (position) {
        var rect = this.canvas.getBoundingClientRect();
        var i = Math.floor((position.x - rect.left) / (this.cellW * this.scale) + this.currentTranslation.x / this.cellW);
        var j = Math.floor((position.y - rect.top) / (this.cellH * this.scale) + this.currentTranslation.y / this.cellH);
        return { x: i, y: j };
    };
    AbstractGrid.prototype.mapCellToCanvas = function (position) {
        var x = (position.x + 0.5) * this.cellW;
        var y = (position.y + 0.5) * this.cellH;
        return { x: x, y: y };
    };
    AbstractGrid.prototype.getTranslation = function (focusX, focusY, maxColumns, maxRows) {
        var leftTopX = focusX - (this.halfColumns * this.cellW);
        if (leftTopX < 0) {
            leftTopX = 0;
        }
        else {
            var maxTranslationX = (maxColumns - this.columns) * this.cellW;
            if (leftTopX > maxTranslationX) {
                leftTopX = maxTranslationX;
            }
        }
        var leftTopY = focusY - (this.halfRows * this.cellH);
        if (leftTopY < 0) {
            leftTopY = 0;
        }
        else {
            var maxTranslationY = (maxRows - this.rows) * this.cellH;
            if (leftTopY > maxTranslationY) {
                leftTopY = maxTranslationY;
            }
        }
        var newTranslation = { x: leftTopX, y: leftTopY };
        leftTopX = this.currentTranslation.x - leftTopX;
        leftTopY = this.currentTranslation.y - leftTopY;
        this.currentTranslation = newTranslation;
        return { x: leftTopX, y: leftTopY };
    };
    AbstractGrid.prototype.getBoundariesX = function (focusX, limit) {
        var focusCell = Math.round(focusX / this.cellW);
        var min = focusCell - this.halfColumns;
        var max = focusCell + this.halfColumns;
        return this.checkBoundariesLimit(min, max, limit - 1);
    };
    AbstractGrid.prototype.getBoundariesY = function (focusY, limit) {
        var focusCell = Math.round(focusY / this.cellH);
        var min = focusCell - this.halfRows;
        var max = focusCell + this.halfRows;
        return this.checkBoundariesLimit(min, max, limit - 1);
    };
    AbstractGrid.prototype.checkBoundariesLimit = function (min, max, maxLimit) {
        if (min < 0) {
            max -= min;
            min = 0;
        }
        if (max > maxLimit) {
            min -= (max - maxLimit);
            max = maxLimit;
        }
        return {
            min: min,
            max: max
        };
    };
    AbstractGrid.prototype.getOffsetX = function (focusX) {
        return focusX % this.cellW;
    };
    AbstractGrid.prototype.getOffsetY = function (focusY) {
        return focusY % this.cellH;
    };
    return AbstractGrid;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StaticGrid = (function (_super) {
    __extends(StaticGrid, _super);
    function StaticGrid(cnvs, onCompleted) {
        _super.call(this, cnvs, onCompleted);
    }
    StaticGrid.prototype.deferredInit = function (props) {
        _super.prototype.deferredInit.call(this, props);
        this.rows = +props["rowsEditor"];
        this.columns = +props["columnsEditor"];
        this.tileColumns = +props["tileColumns"];
        this.canvasScales = new Array();
        this.canvasScales.push(props["canvasScaleD"]);
        this.canvasScales.push(props["canvasScaleC"]);
        this.canvasScales.push(props["canvasScaleB"]);
        this.canvasScales.push(props["canvasScaleA"]);
        var totCanvasScales = this.canvasScales.length;
        this.rowsList = new Array(totCanvasScales);
        this.columnsList = new Array(totCanvasScales);
        var selectedScaleId = totCanvasScales - 1;
        for (var i = 0; i < totCanvasScales; i++) {
            this.rowsList[i] = Math.floor(this.rows / +this.canvasScales[i]);
            this.columnsList[i] = Math.floor(this.columns / +this.canvasScales[i]);
        }
        this.selectScale(selectedScaleId);
    };
    StaticGrid.prototype.refresh = function () {
        _super.prototype.refresh.call(this);
    };
    StaticGrid.prototype.selectScale = function (scaleId) {
        this.rows = this.rowsList[scaleId];
        this.columns = this.columnsList[scaleId];
        this.updateSizingDerivates();
        this.scale = +this.canvasScales[scaleId];
    };
    StaticGrid.prototype.getBoundariesX = function (focusX, limit) {
        return _super.prototype.getBoundariesX.call(this, focusX, limit);
    };
    StaticGrid.prototype.getBoundariesY = function (focusY, limit) {
        return _super.prototype.getBoundariesY.call(this, focusY, limit);
    };
    return StaticGrid;
})(AbstractGrid);
var Input;
(function (Input) {
    var Keys = (function () {
        function Keys() {
        }
        Keys.UP = "38";
        Keys.DOWN = "40";
        Keys.LEFT = "37";
        Keys.RIGHT = "39";
        Keys.CTRL = "17";
        Keys.ALT = "18";
        Keys.ENTER = "13";
        Keys.SPACE = "32";
        Keys.CAPS = "20";
        Keys.SHIFT = "16";
        Keys.W = "87";
        Keys.A = "65";
        Keys.D = "68";
        Keys.S = "83";
        Keys.J = "74";
        Keys.K = "75";
        Keys.F1 = "112";
        Keys.F2 = "113";
        Keys.F3 = "114";
        Keys.F4 = "115";
        return Keys;
    })();
    Input.Keys = Keys;
    ;
    ;
    ;
    function init(canvas, grid, inputCallbacks, resetCallback, actionCallback, startActionCallback, endActionCallback, ongoingActionCallback, hoverCallback, pauseCallback, unpauseCallback, resizeCallback, rightClickCallback, doubleClickCallback, wheelCallback) {
        var lastKey;
        var flagPause = false;
        inputCallbacks[Keys.SPACE] = function (e) {
            if (flagPause) {
                unpauseCallback();
                flagPause = false;
            }
            else {
                pauseCallback();
                flagPause = true;
            }
        };
        var flagMouseDown = false;
        canvas.addEventListener("click", function (e) {
            var rect = canvas.getBoundingClientRect();
            var mouseX = e.clientX - rect.left;
            var mouseY = e.clientY - rect.top;
            actionCallback(mouseX, mouseY);
        });
        canvas.addEventListener("mousemove", function (e) {
            var position = mapEvent(e);
            if (flagMouseDown) {
                ongoingActionCallback(position.x, position.y);
            }
            else {
                hoverCallback(position.x, position.y);
            }
        });
        canvas.addEventListener("mousedown", function (e) {
            flagMouseDown = true;
            var position = mapEvent(e);
            startActionCallback(position.x, position.y);
        });
        canvas.addEventListener("mouseup", function (e) {
            flagMouseDown = false;
            var position = mapEvent(e);
            endActionCallback(position.x, position.y);
        });
        canvas.addEventListener("mouseout", function (e) {
            if (flagMouseDown) {
                ongoingActionCallback(null, null);
            }
            else {
                hoverCallback(null, null);
            }
        });
        canvas.addEventListener("contextmenu", function (e) {
            var position = mapEvent(e);
            rightClickCallback(position.x, position.y);
        });
        canvas.addEventListener("dblclick", function (e) {
            var position = mapEvent(e);
            doubleClickCallback(position.x, position.y);
        });
        canvas.addEventListener("wheel", function (e) {
            e.preventDefault();
            var position = mapEvent(e);
            wheelCallback(position.x, position.y);
        });
        canvas.addEventListener("touchstart", function (e) {
            var position = mapEvent(e);
            startActionCallback(position.x, position.y);
        });
        canvas.addEventListener("touchend", function (e) {
            var position = mapEvent(e);
            ongoingActionCallback(null, null);
            endActionCallback(position.x, position.y);
        });
        canvas.addEventListener("touchcancel", function (e) {
            var position = mapEvent(e);
            ongoingActionCallback(null, null);
            endActionCallback(position.x, position.y);
        });
        canvas.addEventListener("touchmove", function (e) {
            var position = mapEvent(e);
            ongoingActionCallback(position.x, position.y);
        });
        document.addEventListener("keydown", function (e) {
            var callback = inputCallbacks[String(e.keyCode)];
            if (callback !== undefined) {
                e.preventDefault();
                callback(e);
            }
            else {
            }
            lastKey = e.keyCode;
        });
        document.addEventListener("keyup", function (e) {
            if (e.keyCode === lastKey) {
                resetCallback();
            }
        });
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                pauseCallback();
                flagPause = true;
            }
            else {
                unpauseCallback();
                flagPause = false;
            }
        });
        window.addEventListener("resize", function (event) {
            resizeCallback();
        });
        document.addEventListener("orientationchange", function () {
            resizeCallback();
        });
        function mapEvent(e) {
            var position = {
                x: e.clientX,
                y: e.clientY
            };
            return grid.mapPositionToGrid(position);
        }
    }
    Input.init = init;
    ;
})(Input || (Input = {}));
var Constant;
(function (Constant) {
    Constant.DOUBLE_PI = Math.PI * 2;
    var Color = (function () {
        function Color() {
        }
        Color.YELLOW = "yellow";
        Color.RED = "red";
        Color.WHITE = "white";
        Color.GREY = "grey";
        Color.BLACK = "black";
        return Color;
    })();
    Constant.Color = Color;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Constant.Direction || (Constant.Direction = {}));
    var Direction = Constant.Direction;
})(Constant || (Constant = {}));
var Time;
(function (Time) {
    function getTime() {
        var d = new Date();
        return d.getTime();
    }
    Time.getTime = getTime;
    ;
    var Timer = (function () {
        function Timer() {
            this.startTime = 0;
        }
        Timer.prototype.start = function () {
            this.startTime = getTime();
        };
        Timer.prototype.getDiff = function (currentTime) {
            return currentTime - this.startTime;
        };
        Timer.prototype.update = function () {
            var t = getTime();
            var diff = t - this.startTime;
            this.startTime = t;
            return diff;
        };
        Timer.prototype.isActive = function () {
            return this.startTime !== 0;
        };
        Timer.prototype.stop = function () {
            this.startTime = 0;
        };
        return Timer;
    })();
    Time.Timer = Timer;
})(Time || (Time = {}));
var nextAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(this.mainGameLoop, this.refreshInterval);
};
var AbstractScene = (function () {
    function AbstractScene(grid) {
        this.map = new World.Map(grid);
        this.focus = {
            x: 6 * 32,
            y: 6 * 32
        };
        this.pointer = {
            x: 0,
            y: 0
        };
        this.renderingOptions = new World.Options();
        this.layers = this.map.getLayers();
        this.grid = grid;
    }
    AbstractScene.prototype.start = function (canvas) {
        this.updateContext(canvas);
        this.mainGameLoop();
    };
    AbstractScene.prototype.mainGameLoop = function () {
        var scene = this;
        nextAnimationFrame(function () {
            scene.mainGameLoop();
        });
        if (this.mainGameLoop_pre() === false) {
            return;
        }
        var boundaries = this.grid.getBoundariesY(this.focus.y, this.map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        boundaries = this.grid.getBoundariesX(this.focus.x, this.map.columns);
        var minColumn = boundaries.min;
        var maxColumn = boundaries.max;
        for (var y = minRow; y <= maxRow; y++) {
            this.renderRow(y, minColumn, maxColumn);
        }
        this.renderFocus();
        this.renderPointer();
        this.mainGameLoop_post();
    };
    AbstractScene.prototype.mainGameLoop_pre = function () {
        this.grid.clear(this.context);
        return true;
    };
    AbstractScene.prototype.mainGameLoop_post = function () {
    };
    AbstractScene.prototype.renderRow = function (y, minColumn, maxColumn) {
        for (var x = minColumn; x <= maxColumn; x++) {
            this.map.render(this.context, x, y, this.renderingOptions);
        }
    };
    AbstractScene.prototype.renderPointer = function () {
        if (this.pointer.x != null && this.pointer.y != null) {
            var mappedPointer = this.grid.mapCellToCanvas(this.pointer);
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.arc(mappedPointer.x, mappedPointer.y, 18, 0, Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.globalAlpha = 0.4;
            this.context.fill();
            this.context.restore();
        }
    };
    AbstractScene.prototype.renderFocus = function () {
        if (this.focus.x != null && this.focus.y != null && this.renderingOptions.showFocus) {
            this.context.save();
            this.context.beginPath();
            this.context.fillStyle = Constant.Color.BLACK;
            this.context.arc(this.focus.x, this.focus.y, 15, 0, Constant.DOUBLE_PI);
            this.context.closePath();
            this.context.fill();
            this.context.restore();
        }
    };
    AbstractScene.prototype.toggleGrid = function (enable) {
        if (enable != null) {
            this.renderingOptions.showGrid = enable;
        }
        else {
            this.renderingOptions.showGrid = !this.renderingOptions.showGrid;
        }
    };
    AbstractScene.prototype.toggleCellNumbering = function (enable) {
        if (enable != null) {
            this.renderingOptions.showCellNumbers = enable;
        }
        else {
            this.renderingOptions.showCellNumbers = !this.renderingOptions.showCellNumbers;
        }
    };
    AbstractScene.prototype.toggleFocus = function (enable) {
        if (enable != null) {
            this.renderingOptions.showFocus = enable;
        }
        else {
            this.renderingOptions.showFocus = !this.renderingOptions.showFocus;
        }
    };
    AbstractScene.prototype.updatePointer = function (x, y) {
        this.pointer = {
            x: x,
            y: y
        };
    };
    AbstractScene.prototype.moveFocus = function (direction) {
        switch (direction) {
            case 0 /* UP */:
                this.focus.y -= +this.grid.cellH;
                break;
            case 1 /* DOWN */:
                this.focus.y += +this.grid.cellH;
                break;
            case 2 /* LEFT */:
                this.focus.x -= +this.grid.cellW;
                break;
            case 3 /* RIGHT */:
                this.focus.x += +this.grid.cellW;
                break;
        }
        var translationPoint = this.grid.getTranslation(this.focus.x, this.focus.y, this.map.columns, this.map.rows);
        this.context.translate(translationPoint.x, translationPoint.y);
    };
    AbstractScene.prototype.updateContext = function (canvas) {
        this.context = canvas.getContext("2d");
        this.context.scale(this.grid.scale, this.grid.scale);
    };
    return AbstractScene;
})();
var DynamicScene = (function (_super) {
    __extends(DynamicScene, _super);
    function DynamicScene(grid) {
        _super.call(this, grid);
        this.FPS = 20;
        this.refreshInterval = 1000 / this.FPS;
        this.autoFPS = true;
        this.secondFPS = 0;
        this.countFPS = 0;
        this.lastFPS = 0;
        this.fpsPerformance = [22, 21, 20];
        this.paused = false;
        this.hero = new Actor.Event();
    }
    DynamicScene.prototype.mainGameLoop_pre = function () {
        if (this.paused) {
            return false;
        }
        if (!_super.prototype.mainGameLoop_pre.call(this)) {
            return false;
        }
        this.context.fillStyle = "#000000";
        this.context.font = "bold 40px Arial";
        this.context.fillText("(it's not ready yet)", 160, 260);
        var time = Time.getTime();
        this.hero.update(this.events, this.map, time);
        for (var event in this.events) {
            event.update(this.events, this.map, time);
        }
        return true;
    };
    DynamicScene.prototype.mainGameLoop_post = function () {
        _super.prototype.mainGameLoop_post.call(this);
        this.renderFPS();
    };
    DynamicScene.prototype.togglePause = function (pause) {
        if (pause != null) {
            this.paused = pause;
        }
        else {
            this.paused = !this.paused;
        }
    };
    DynamicScene.prototype.toggleFPS = function (enable) {
        if (enable != null) {
            this.renderingOptions.showFPS = enable;
        }
        else {
            this.renderingOptions.showFPS = !this.renderingOptions.showFPS;
        }
    };
    DynamicScene.prototype.renderFPS = function () {
        var seconds = Math.floor(Time.getTime() / 1000);
        if (seconds === this.secondFPS) {
            this.countFPS++;
        }
        else {
            this.lastFPS = this.countFPS;
            this.countFPS = 1;
            this.secondFPS = seconds;
            if (this.autoFPS === true) {
                this.fpsPerformance.shift();
                this.fpsPerformance[2] = this.lastFPS;
                var avg = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;
                this.FPS = Math.ceil(avg) + 2;
            }
        }
        if (this.renderingOptions.showFPS) {
            this.context.fillStyle = Constant.Color.RED;
            this.context.font = "bold 18px Arial";
            this.context.fillText("" + this.lastFPS, 10, 20);
        }
    };
    return DynamicScene;
})(AbstractScene);
var DynamicGrid = (function (_super) {
    __extends(DynamicGrid, _super);
    function DynamicGrid(cnvs, onCompleted) {
        _super.call(this, cnvs, onCompleted);
    }
    DynamicGrid.prototype.deferredInit = function (props) {
        _super.prototype.deferredInit.call(this, props);
        this.rows = +props["rows"];
        this.columns = +props["columns"];
        this.canvasRatio = +props["canvasRatio"];
    };
    DynamicGrid.prototype.refresh = function () {
        var ratioH = this.baseH / this.height();
        var ratioW = this.baseW / this.width();
        this.scale = this.canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        _super.prototype.refresh.call(this);
    };
    DynamicGrid.prototype.width = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    };
    DynamicGrid.prototype.height = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    };
    return DynamicGrid;
})(AbstractGrid);
var Game;
(function (Game) {
    function start(canvas) {
        new DynamicGrid(canvas, function (grid) {
            var scene = new DynamicScene(grid);
            initInput(canvas, scene, grid);
            scene.start(canvas);
        });
    }
    Game.start = start;
    function initInput(canvas, scene, grid) {
        var inputCallbackMap = new Map();
        inputCallbackMap[Input.Keys.W] = function (e) {
            scene.moveFocus(0 /* UP */);
        };
        inputCallbackMap[Input.Keys.S] = function (e) {
            scene.moveFocus(1 /* DOWN */);
        };
        inputCallbackMap[Input.Keys.A] = function (e) {
            scene.moveFocus(2 /* LEFT */);
        };
        inputCallbackMap[Input.Keys.D] = function (e) {
            scene.moveFocus(3 /* RIGHT */);
        };
        inputCallbackMap[Input.Keys.F1] = function (e) {
            scene.toggleFPS();
        };
        inputCallbackMap[Input.Keys.F2] = function (e) {
            scene.toggleGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function (e) {
            scene.toggleCellNumbering();
        };
        inputCallbackMap[Input.Keys.F4] = function (e) {
            scene.toggleFocus();
        };
        Input.init(canvas, grid, inputCallbackMap, function () {
        }, function () {
        }, function () {
        }, function () {
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function () {
            console.log("pause");
            scene.togglePause(true);
        }, function () {
            console.log("unpause");
            scene.togglePause(false);
        }, function () {
            grid.refresh();
            scene.updateContext(canvas);
        }, function () {
            console.log("rightClick");
        }, function () {
            console.log("doubleClick");
        }, function () {
            console.log("wheel");
        });
    }
    ;
})(Game || (Game = {}));
var Mapper;
(function (Mapper) {
    function start(canvas) {
        new StaticGrid(canvas, function (grid) {
            var scene = new StaticScene(grid);
            initInput(canvas, scene, grid);
            initWidgets(canvas, scene, grid);
            scene.start(canvas);
        });
    }
    Mapper.start = start;
    function initInput(canvas, scene, grid) {
        var inputCallbackMap = new Map();
        inputCallbackMap[Input.Keys.W] = function (e) {
            scene.moveFocus(0 /* UP */);
        };
        inputCallbackMap[Input.Keys.S] = function (e) {
            scene.moveFocus(1 /* DOWN */);
        };
        inputCallbackMap[Input.Keys.A] = function (e) {
            scene.moveFocus(2 /* LEFT */);
        };
        inputCallbackMap[Input.Keys.D] = function (e) {
            scene.moveFocus(3 /* RIGHT */);
        };
        inputCallbackMap[Input.Keys.F2] = function (e) {
            scene.toggleEditorGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function (e) {
            scene.toggleCellNumbering();
        };
        inputCallbackMap[Input.Keys.F4] = function (e) {
            scene.toggleFocus();
        };
        Input.init(canvas, grid, inputCallbackMap, function () {
        }, function () {
        }, function () {
        }, function () {
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function () {
        }, function () {
        }, function () {
        }, function () {
            console.log("rightClick");
        }, function () {
            console.log("doubleClick");
        }, function () {
            console.log("wheel");
        });
    }
    ;
    function initWidgets(canvas, scene, grid) {
        var inputRange = document.getElementById("zoom");
        inputRange.onchange = function (e) {
            grid.selectScale(+inputRange.value);
            grid.refresh();
            scene.updateContext(canvas);
        };
    }
    ;
})(Mapper || (Mapper = {}));
var TilePicker;
(function (TilePicker) {
    function start(canvas) {
        new StaticGrid(canvas, function (grid) {
            var scene = new StaticScene(grid);
            initInput(canvas, scene, grid);
            scene.start(canvas);
            scene.toggleEditorGrid(true);
        });
    }
    TilePicker.start = start;
    function initInput(canvas, scene, grid) {
        var inputCallbackMap = new Map();
        Input.init(canvas, grid, inputCallbackMap, function () {
        }, function () {
        }, function () {
        }, function () {
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function () {
        }, function () {
        }, function () {
        }, function () {
            console.log("rightClick");
        }, function () {
            console.log("doubleClick");
        }, function () {
            console.log("wheel");
        });
    }
    ;
})(TilePicker || (TilePicker = {}));
var StaticScene = (function (_super) {
    __extends(StaticScene, _super);
    function StaticScene(grid) {
        _super.call(this, grid);
        this.renderingOptions.showEditorGrid = true;
    }
    StaticScene.prototype.mainGameLoop_pre = function () {
        if (!_super.prototype.mainGameLoop_pre.call(this)) {
            return false;
        }
        return true;
    };
    StaticScene.prototype.mainGameLoop_post = function () {
        _super.prototype.mainGameLoop_post.call(this);
    };
    StaticScene.prototype.toggleEditorGrid = function (enable) {
        if (enable != null) {
            this.renderingOptions.showEditorGrid = enable;
        }
        else {
            this.renderingOptions.showEditorGrid = !this.renderingOptions.showEditorGrid;
        }
    };
    StaticScene.prototype.renderPointer = function () {
        if (this.pointer.x != null && this.pointer.y != null) {
            this.context.save();
            this.context.globalAlpha = 0.4;
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.fillRect(this.pointer.x * this.grid.cellW, this.pointer.y * this.grid.cellH, this.grid.cellW, this.grid.cellH);
            this.context.restore();
        }
    };
    return StaticScene;
})(AbstractScene);
