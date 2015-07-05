var Scene;
(function (Scene) {
    ;
    var FPS = 20;
    var refreshInterval = 1000 / FPS;
    var paused = false;
    var hero;
    var events;
    var map;
    var focus;
    var pointer;
    var renderingOtions = new World.Options();
    function start(canvas) {
        mainGameLoop();
        var nextAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || function (callback, canvas) {
            window.setTimeout(mainGameLoop, refreshInterval);
        };
        function mainGameLoop() {
            nextAnimationFrame(mainGameLoop, canvas);
            if (paused) {
                return;
            }
            var context = canvas.getContext("2d");
            var time = Time.getTime();
            hero.update(events, map, time);
            for (var event in events) {
                event.update(events, map, time);
            }
            translate();
            var layers = map.getLayers();
            var minRow = Display.getMinY(focus.y);
            var maxRow = Display.getMaxY(focus.y, map.columns);
            for (var y = minRow; y <= maxRow; y++) {
                for (var layer = 0; layer < layers; layer++) {
                    renderRow(y, layer);
                }
                renderEventRow(y);
            }
            renderPointer(context);
        }
    }
    Scene.start = start;
    function renderRow(row, layer) {
    }
    function renderEventRow(row) {
    }
    function renderPointer(context) {
        context.save();
        context.beginPath();
        context.fillStyle = 'yellow';
        context.arc(Display.getPointerX(pointer.x), Display.getPointerY(pointer.y), 12, 0, Math.PI * 2, true);
        context.closePath();
        context.globalAlpha = 0.4;
        context.fill();
        context.restore();
    }
    function translate() {
    }
    function toggleGrid(enable) {
        if (enable != null) {
            renderingOtions.showGrid = enable;
        }
        else {
            renderingOtions.showGrid = !renderingOtions.showGrid;
        }
    }
    Scene.toggleGrid = toggleGrid;
    function toggleFPS(enable) {
        if (enable != null) {
            renderingOtions.showFPS = enable;
        }
        else {
            renderingOtions.showFPS = !renderingOtions.showFPS;
        }
    }
    Scene.toggleFPS = toggleFPS;
    function toggleCellNumbering(enable) {
        if (enable != null) {
            renderingOtions.showCellNumbers = enable;
        }
        else {
            renderingOtions.showCellNumbers = !renderingOtions.showCellNumbers;
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
})(Scene || (Scene = {}));
