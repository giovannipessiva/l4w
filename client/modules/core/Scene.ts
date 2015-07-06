/// <reference path="Actor.ts" />
/// <reference path="World.ts" />
/// <reference path="util/Constant.ts" />
/// <reference path="util/Time.ts" />

/**
 * Module to handle rendering operations
 */
module Scene {

    interface Point {
        x: number;
        y: number;
    };

    var FPS = 20;
    var refreshInterval = 1000 / FPS;

    var autoFPS = true;
    var secondFPS = 0;
    var countFPS = 0;
    var lastFPS = 0;
    var FPSPerformance = [22, 21, 20];

    var paused = false;

    var hero: Actor.Event;
    var events: Actor.Event[];
    var map: World.Map;

    var focus: Point;
    var pointer: Point;

    var renderingOptions: World.Options;
    var layers: number;

    var context: CanvasRenderingContext2D;

    var nextAnimationFrame =
        window.requestAnimationFrame ||
        //window.mozRequestAnimationFrame ||
        //window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(mainGameLoop, refreshInterval);
        };

    export function start(ctx: CanvasRenderingContext2D) {
        hero = new Actor.Event();
        map = new World.Map();
        focus = {
            x: 0, y: 0
        };
        pointer = {
            x: 0, y: 0
        };
        renderingOptions = new World.Options();
        layers = map.getLayers();
        context = ctx;

        mainGameLoop();
    }

    function mainGameLoop() {
        nextAnimationFrame(mainGameLoop);
        if (paused) {
            return;
        }

        Display.clear(); //TODO rimuovere a regime
        context.fillStyle = '#000000';
        context.font = 'bold 40px Arial';
        context.fillText("(it's not ready yet)", 160, 260);

        var time = Time.getTime();
        hero.update(events, map, time);
        for (var event in events) {
            event.update(events, map, time);
        }

        translate();

        var minRow = Display.getMinY(focus.y);
        var maxRow = Display.getMaxY(focus.y, map.rows);
        for (var y = minRow; y <= maxRow; y++) {

            renderRow(y);
            renderEventRow(y);
        }

        renderPointer();
        renderFPS();
    }

    function renderRow(y: number) {
        var minColumn = Display.getMinX(focus.x);
        var maxColumn = Display.getMaxX(focus.x, map.columns);
        for (var x = minColumn; x <= maxColumn; x++) {
            map.render(context, x, y, renderingOptions);
        }
    }

    function renderEventRow(row: number) {

    }

    function renderPointer() {
        if (pointer.x != null && pointer.y != null) {
            context.save();
            //context.scale(1, 0.9);
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
        } else {
            lastFPS = countFPS;
            countFPS = 1;
            secondFPS = seconds;
            if (autoFPS == true) {
                FPSPerformance.shift();
                FPSPerformance[2] = lastFPS;
                var avg: number = (FPSPerformance[0] + FPSPerformance[1] + FPSPerformance[2]) / 3;
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
        //TODO calculate display offset by focus coordinates
    }

    export function toggleGrid(enable?: boolean) {
        if (enable != null) {
            renderingOptions.showGrid = enable;
        } else {
            renderingOptions.showGrid = !renderingOptions.showGrid;
        }

    }

    export function toggleFPS(enable?: boolean) {
        if (enable != null) {
            renderingOptions.showFPS = enable;
        } else {
            renderingOptions.showFPS = !renderingOptions.showFPS;
        }

    }

    export function toggleCellNumbering(enable?: boolean) {
        if (enable != null) {
            renderingOptions.showCellNumbers = enable;
        } else {
            renderingOptions.showCellNumbers = !renderingOptions.showCellNumbers;
        }

    }

    export function togglePause(pause?: boolean) {
        if (pause != null) {
            paused = pause;
        } else {
            paused = !paused;
        }
    }

    export function updatePointer(x: number, y: number) {
        pointer.x = x;
        pointer.y = y;
    }
}