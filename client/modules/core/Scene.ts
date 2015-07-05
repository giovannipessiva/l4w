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

    var paused = false;

    var hero: Actor.Event;
    var events: Actor.Event[];
    var map: World.Map;

    var focus: Point;
    var pointer: Point;

    var renderingOtions: World.Options;

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
        context = ctx;

        mainGameLoop();
    }

    function mainGameLoop() {
        nextAnimationFrame(mainGameLoop);
        if (paused) {
            return;
        }

        context.clearRect(0, 0, Display.canvasW, Display.canvasH); //TODO rimuovere a regime
        context.fillStyle = '#000000';
        context.font = 'bold 40px Arial';
        context.fillText("(it's not ready yet)", 150, 260);

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

        renderPointer();
    }

    function renderRow(row: number, layer: number) {

    }

    function renderEventRow(row: number) {

    }

    function renderPointer() {
        if (pointer.x != null && pointer.y != null) {
            context.save();
            context.beginPath();
            context.fillStyle = Constant.Color.yellow;
            context.arc(Display.getPointerX(pointer.x), Display.getPointerY(pointer.y), 12, 0, Constant.DOUBLE_PI, true);
            context.closePath();
            context.globalAlpha = 0.4;
            context.fill();
            context.restore();
        }
    }

    function translate() {
        //TODO calculate display offset by focus coordinates
    }

    export function toggleGrid(enable?: boolean) {
        if (enable != null) {
            renderingOtions.showGrid = enable;
        } else {
            renderingOtions.showGrid = !renderingOtions.showGrid;
        }

    }

    export function toggleFPS(enable?: boolean) {
        if (enable != null) {
            renderingOtions.showFPS = enable;
        } else {
            renderingOtions.showFPS = !renderingOtions.showFPS;
        }

    }

    export function toggleCellNumbering(enable?: boolean) {
        if (enable != null) {
            renderingOtions.showCellNumbers = enable;
        } else {
            renderingOtions.showCellNumbers = !renderingOtions.showCellNumbers;
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