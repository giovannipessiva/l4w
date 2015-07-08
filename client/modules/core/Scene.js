var Scene;
(function (Scene) {
    ;
    var FPS = 20;
    var refreshInterval = 1000 / FPS;
    var autoFPS = true;
    var secondFPS = 0;
    var countFPS = 0;
    var lastFPS = 0;
    var FPSPerformance = [22, 21, 20];
    var paused = false;
    var hero;
    var events;
    var map;
    var focus;
    var pointer;
    var renderingOptions;
    var layers;
    var context;
    var nextAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(mainGameLoop, refreshInterval);
    };
    function start(canvas) {
        hero = new Actor.Event();
        map = new World.Map();
        focus = {
            x: 0,
            y: 0
        };
        pointer = {
            x: 0,
            y: 0
        };
        renderingOptions = new World.Options();
        layers = map.getLayers();
        updateContext(canvas);
        mainGameLoop();
    }
    Scene.start = start;
    function mainGameLoop() {
        nextAnimationFrame(mainGameLoop);
        if (paused) {
            return;
        }
        Display.clear(context);
        context.fillStyle = '#000000';
        context.font = 'bold 40px Arial';
        context.fillText("(it's not ready yet)", 160, 260);
        var time = Time.getTime();
        hero.update(events, map, time);
        for (var event in events) {
            event.update(events, map, time);
        }
        translate();
        var boundaries = Display.getBoundariesY(focus.y, map.rows);
        var minRow = boundaries.min;
        var maxRow = boundaries.max;
        for (var y = minRow; y <= maxRow; y++) {
            renderRow(y);
            renderEventRow(y);
        }
        renderPointer();
        renderFPS();
    }
    function renderRow(y) {
        var boundaries = Display.getBoundariesX(focus.x, map.columns);
        var minColumn = boundaries.min;
        var maxColumn = boundaries.max;
        for (var x = minColumn; x <= maxColumn; x++) {
            map.render(context, x, y, renderingOptions);
        }
    }
    function renderEventRow(row) {
    }
    function renderPointer() {
        if (pointer.x != null && pointer.y != null) {
            context.save();
            context.beginPath();
            context.fillStyle = Constant.Color.YELLOW;
            context.arc(Display.getPointerX(pointer.x), Display.getPointerY(pointer.y), 18, 0, Constant.DOUBLE_PI);
            context.closePath();
            context.globalAlpha = 0.4;
            context.fill();
            context.restore();
        }
    }
    function renderFPS() {
        var seconds = Math.floor(Time.getTime() / 1000);
        if (seconds == secondFPS) {
            countFPS++;
        }
        else {
            lastFPS = countFPS;
            countFPS = 1;
            secondFPS = seconds;
            if (autoFPS == true) {
                FPSPerformance.shift();
                FPSPerformance[2] = lastFPS;
                var avg = (FPSPerformance[0] + FPSPerformance[1] + FPSPerformance[2]) / 3;
                FPS = Math.ceil(avg) + 2;
            }
        }
        if (renderingOptions.showFPS) {
            context.fillStyle = Constant.Color.RED;
            context.font = "bold 18px Arial";
            context.fillText("" + lastFPS, 10, 20);
        }
    }
    function translate() {
    }
    function toggleGrid(enable) {
        if (enable != null) {
            renderingOptions.showGrid = enable;
        }
        else {
            renderingOptions.showGrid = !renderingOptions.showGrid;
        }
    }
    Scene.toggleGrid = toggleGrid;
    function toggleFPS(enable) {
        if (enable != null) {
            renderingOptions.showFPS = enable;
        }
        else {
            renderingOptions.showFPS = !renderingOptions.showFPS;
        }
    }
    Scene.toggleFPS = toggleFPS;
    function toggleCellNumbering(enable) {
        if (enable != null) {
            renderingOptions.showCellNumbers = enable;
        }
        else {
            renderingOptions.showCellNumbers = !renderingOptions.showCellNumbers;
        }
    }
    Scene.toggleCellNumbering = toggleCellNumbering;
    function togglePause(pause) {
        if (pause != null) {
            paused = pause;
        }
        else {
            paused = !paused;
        }
    }
    Scene.togglePause = togglePause;
    function updatePointer(x, y) {
        pointer.x = x;
        pointer.y = y;
    }
    Scene.updatePointer = updatePointer;
    function updateContext(canvas) {
        context = canvas.getContext("2d");
        context.scale(Display.scale, Display.scale);
    }
    Scene.updateContext = updateContext;
})(Scene || (Scene = {}));
