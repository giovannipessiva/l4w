var Resource;
(function (Resource) {
    var dataFolder = "data/";
    var assetsFolder = "assets/";
    var charFolder = assetsFolder + "charset/";
    var faceFolder = assetsFolder + "faceset/";
    var skinFolder = assetsFolder + "skin/";
    var tileFolder = assetsFolder + "tileset/";
    var properties = new Map();
    ;
    function loadPropertes(file, onLoadCallback) {
        if (file in properties) {
            return properties[file];
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
    Resource.loadPropertes = loadPropertes;
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
            if (exception.name == "NetworkError") {
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
    function loadAsset(uri, assetId) {
        var $loader = $(document.createElement("img"));
        $loader.attr('src', "assets/" + uri);
        $loader.load(function () {
            $('#' + assetId).attr('src', $loader.attr('src'));
        });
    }
    Resource.loadAsset = loadAsset;
})(Resource || (Resource = {}));
var EditPage;
(function (EditPage) {
    function start() {
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
        $('#mapPanel').on("changed.jstree", function (e, data) {
            $('#mapDetailPanel').show();
            var node = data.instance.get_selected(true)[0];
            $('#mapSizeW').val(node.data.w);
            $('#mapSizeH').val(node.data.h);
            $('#tiles').val(node.data.tile);
            loadTile();
        });
        var canvas = document.getElementById('canvas1');
        Mapper.start(canvas);
        loadTiles();
    }
    EditPage.start = start;
    function changeSize() {
        var node = $('#mapPanel').jstree(true).get_selected(true)[0];
        node.data.w = $('#mapSizeW').val();
        node.data.h = $('#mapSizeH').val();
        var updatedData = $('#mapPanel').jstree(true).get_json('#');
        $.ajax({
            url: "edit/maps",
            type: 'post',
            contentType: 'application/json',
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
                sel.append('<option value="' + data[i].name + '">' + data[i].desc + '</option>');
            }
        });
    }
    EditPage.loadTiles = loadTiles;
    function changeTile() {
        var node = $('#mapPanel').jstree(true).get_selected(true)[0];
        node.data.tile = $('#tiles').val();
        var updatedData = $('#mapPanel').jstree(true).get_json('#');
        $.ajax({
            url: "edit/maps",
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(updatedData),
            success: function (result) {
                loadTile();
            }
        });
    }
    EditPage.changeTile = changeTile;
    function loadTile() {
        var uri = "tileset/" + $('#tiles').val();
        Resource.loadAsset(uri, "tmpImg");
    }
    EditPage.loadTile = loadTile;
})(EditPage || (EditPage = {}));
var World;
(function (World) {
    var Map = (function () {
        function Map(display) {
            this.rows = 30;
            this.columns = 50;
            this.layers = [];
            this.display = display;
        }
        Map.prototype.render = function (context, x, y, renderingOptions) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
            if (renderingOptions != null) {
                if (renderingOptions.showGrid) {
                    context.strokeStyle = Constant.Color.RED;
                    context.strokeRect(x * this.display.cellW, y * this.display.cellH, this.display.cellW, this.display.cellH);
                }
                if (renderingOptions.showEditorGrid) {
                    context.save();
                    context.globalAlpha = 0.4;
                    context.strokeStyle = Constant.Color.GREY;
                    context.strokeRect(x * this.display.cellW, y * this.display.cellH, this.display.cellW, this.display.cellH);
                    context.restore();
                }
                if (renderingOptions.showCellNumbers) {
                    context.fillStyle = Constant.Color.RED;
                    context.font = "bold 10px Arial";
                    context.fillText(x + "," + y, x * this.display.cellW + 1, y * this.display.cellH + 10);
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
;
var AbstractDisplay = (function () {
    function AbstractDisplay(cnvs, onCompleted) {
        this.canvas = cnvs;
        this.currentTranslation = { x: 0, y: 0 };
        (function (display) {
            Resource.loadPropertes("l4w", function (props) {
                display.deferredInit(props);
                onCompleted();
            });
        })(this);
    }
    AbstractDisplay.prototype.deferredInit = function (props) {
        this.updateSizingDerivates();
        this.refresh();
    };
    AbstractDisplay.prototype.updateSizingDerivates = function () {
        this.baseH = this.cellH * this.rows;
        this.baseW = this.cellW * this.columns;
        this.halfRows = Math.floor(this.rows / 2);
        this.halfColumns = Math.floor(this.columns / 2);
    };
    AbstractDisplay.prototype.refresh = function () {
        this.canvas.height = this.baseH * this.scale;
        this.canvas.width = this.baseW * this.scale;
    };
    AbstractDisplay.prototype.clear = function (context) {
        context.clearRect(this.currentTranslation.x, this.currentTranslation.y, this.baseW + this.currentTranslation.x, this.baseH + this.currentTranslation.y);
    };
    AbstractDisplay.prototype.mapPositionToGrid = function (position) {
        var rect = this.canvas.getBoundingClientRect();
        var i = Math.floor((position.x - rect.left) / (this.cellW * this.scale) + this.currentTranslation.x / this.cellW);
        var j = Math.floor((position.y - rect.top) / (this.cellH * this.scale) + this.currentTranslation.y / this.cellH);
        return { x: i, y: j };
    };
    AbstractDisplay.prototype.mapPositionFromGrid = function (position) {
        var rect = this.canvas.getBoundingClientRect();
        var x = (position.x + 0.5) * this.cellW;
        var y = (position.y + 0.5) * this.cellH;
        return { x: x, y: y };
    };
    AbstractDisplay.prototype.getTranslation = function (focusX, focusY, maxColumns, maxRows) {
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
    AbstractDisplay.prototype.getBoundariesX = function (focusX, limit) {
        var focusCell = Math.round(focusX / this.cellW);
        var min = focusCell - this.halfColumns;
        var max = focusCell + this.halfColumns;
        return this.checkBoundariesLimit(min, max, limit - 1);
    };
    AbstractDisplay.prototype.getBoundariesY = function (focusY, limit) {
        var focusCell = Math.round(focusY / this.cellH);
        var min = focusCell - this.halfRows;
        var max = focusCell + this.halfRows;
        return this.checkBoundariesLimit(min, max, limit - 1);
    };
    AbstractDisplay.prototype.checkBoundariesLimit = function (min, max, maxLimit) {
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
    AbstractDisplay.prototype.getOffsetX = function (focusX) {
        return focusX % this.cellW;
    };
    AbstractDisplay.prototype.getOffsetY = function (focusY) {
        return focusY % this.cellH;
    };
    return AbstractDisplay;
})();
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
var Mapper;
(function (Mapper) {
    function start(canvas) {
        var display = new StaticDisplay(canvas, function () {
            var scene = new StaticScene(display);
            initInput(canvas, scene, display);
            initWidgets(canvas, scene, display);
            scene.start(canvas);
        });
    }
    Mapper.start = start;
    function initInput(canvas, scene, display) {
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
        Input.init(canvas, display, inputCallbackMap, function () {
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
    function initWidgets(canvas, scene, display) {
        var inputRange = document.getElementById("zoom");
        inputRange.onchange = function (e) {
            display.selectScale(+inputRange.value);
            display.refresh();
            scene.updateContext(canvas);
        };
    }
    ;
})(Mapper || (Mapper = {}));
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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DynamicDisplay = (function (_super) {
    __extends(DynamicDisplay, _super);
    function DynamicDisplay(cnvs, onCompleted) {
        _super.call(this, cnvs, onCompleted);
    }
    DynamicDisplay.prototype.deferredInit = function (props) {
        this.cellH = props["cellHeight"];
        this.cellW = props["cellWidth"];
        this.rows = props["rows"];
        this.columns = props["columns"];
        this.canvasRatio = props["canvasRatio"];
        _super.prototype.deferredInit.call(this, props);
    };
    DynamicDisplay.prototype.refresh = function () {
        var ratioH = this.baseH / this.height();
        var ratioW = this.baseW / this.width();
        this.scale = this.canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        _super.prototype.refresh.call(this);
    };
    DynamicDisplay.prototype.width = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    };
    DynamicDisplay.prototype.height = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    };
    return DynamicDisplay;
})(AbstractDisplay);
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
            return this.startTime != 0;
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
    function AbstractScene(display) {
        this.map = new World.Map(display);
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
        this.display = display;
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
        if (this.mainGameLoop_pre() == false) {
            return;
        }
        var boundaries = this.display.getBoundariesY(this.focus.y, this.map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        boundaries = this.display.getBoundariesX(this.focus.x, this.map.columns);
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
        this.display.clear(this.context);
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
            var mappedPointer = this.display.mapPositionFromGrid(this.pointer);
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
                this.focus.y -= +this.display.cellH;
                break;
            case 1 /* DOWN */:
                this.focus.y += +this.display.cellH;
                break;
            case 2 /* LEFT */:
                this.focus.x -= +this.display.cellW;
                break;
            case 3 /* RIGHT */:
                this.focus.x += +this.display.cellW;
                break;
        }
        var translationPoint = this.display.getTranslation(this.focus.x, this.focus.y, this.map.columns, this.map.rows);
        this.context.translate(translationPoint.x, translationPoint.y);
    };
    AbstractScene.prototype.updateContext = function (canvas) {
        this.context = canvas.getContext("2d");
        this.context.scale(this.display.scale, this.display.scale);
    };
    return AbstractScene;
})();
var StaticScene = (function (_super) {
    __extends(StaticScene, _super);
    function StaticScene(display) {
        _super.call(this, display);
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
            this.context.fillRect(this.pointer.x * this.display.cellW, this.pointer.y * this.display.cellH, this.display.cellW, this.display.cellH);
            this.context.restore();
        }
    };
    return StaticScene;
})(AbstractScene);
var DynamicScene = (function (_super) {
    __extends(DynamicScene, _super);
    function DynamicScene(display) {
        _super.call(this, display);
        this.FPS = 20;
        this.refreshInterval = 1000 / this.FPS;
        this.autoFPS = true;
        this.secondFPS = 0;
        this.countFPS = 0;
        this.lastFPS = 0;
        this.FPSPerformance = [22, 21, 20];
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
        this.context.fillStyle = '#000000';
        this.context.font = 'bold 40px Arial';
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
        if (seconds == this.secondFPS) {
            this.countFPS++;
        }
        else {
            this.lastFPS = this.countFPS;
            this.countFPS = 1;
            this.secondFPS = seconds;
            if (this.autoFPS == true) {
                this.FPSPerformance.shift();
                this.FPSPerformance[2] = this.lastFPS;
                var avg = (this.FPSPerformance[0] + this.FPSPerformance[1] + this.FPSPerformance[2]) / 3;
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
    function init(canvas, display, inputCallbacks, resetCallback, actionCallback, startActionCallback, endActionCallback, ongoingActionCallback, hoverCallback, pauseCallback, unpauseCallback, resizeCallback, rightClickCallback, doubleClickCallback, wheelCallback) {
        var actionOngoing = false;
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
            var mouse_x = e.clientX - rect.left;
            var mouse_y = e.clientY - rect.top;
            actionCallback(mouse_x, mouse_y);
        });
        canvas.addEventListener("mousemove", function (e) {
            var rect = canvas.getBoundingClientRect();
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
            return display.mapPositionToGrid(position);
        }
    }
    Input.init = init;
    ;
})(Input || (Input = {}));
var Game;
(function (Game) {
    function start(canvas) {
        var display = new DynamicDisplay(canvas, function () {
            var scene = new DynamicScene(display);
            initInput(canvas, scene, display);
            scene.start(canvas);
        });
    }
    Game.start = start;
    function initInput(canvas, scene, display) {
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
        Input.init(canvas, display, inputCallbackMap, function () {
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
            display.refresh();
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
var StaticDisplay = (function (_super) {
    __extends(StaticDisplay, _super);
    function StaticDisplay(cnvs, onCompleted) {
        _super.call(this, cnvs, onCompleted);
    }
    StaticDisplay.prototype.deferredInit = function (props) {
        this.cellH = props["cellHeightEditor"];
        this.cellW = props["cellWidthEditor"];
        this.rows = props["rowsEditor"];
        this.columns = props["columnsEditor"];
        this.canvasScales = props["canvasScale"].split(",");
        var totCanvasScales = this.canvasScales.length;
        this.rowsList = new Array(totCanvasScales);
        this.columnsList = new Array(totCanvasScales);
        var selectedScaleId = totCanvasScales - 1;
        for (var i = 0; i < totCanvasScales; i++) {
            this.rowsList[i] = Math.floor(this.rows / +this.canvasScales[i]);
            this.columnsList[i] = Math.floor(this.columns / +this.canvasScales[i]);
        }
        this.selectScale(selectedScaleId);
        _super.prototype.deferredInit.call(this, props);
    };
    StaticDisplay.prototype.refresh = function () {
        _super.prototype.refresh.call(this);
    };
    StaticDisplay.prototype.selectScale = function (scaleId) {
        this.rows = this.rowsList[scaleId];
        this.columns = this.columnsList[scaleId];
        this.updateSizingDerivates();
        this.scale = +this.canvasScales[scaleId];
    };
    StaticDisplay.prototype.getBoundariesX = function (focusX, limit) {
        return _super.prototype.getBoundariesX.call(this, focusX, limit);
    };
    StaticDisplay.prototype.getBoundariesY = function (focusY, limit) {
        return _super.prototype.getBoundariesY.call(this, focusY, limit);
    };
    return StaticDisplay;
})(AbstractDisplay);
