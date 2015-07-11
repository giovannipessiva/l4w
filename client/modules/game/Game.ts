/// <reference path="../core/AbstractDisplay.ts" />
/// <reference path="../core/util/Input.ts" />
/// <reference path="../core/AbstractScene.ts" />
/// <reference path="DynamicScene.ts" />
/// <reference path="DynamicDisplay.ts" />

/**
 * Module for initializing and launching a game
 */
module Game {

    export function start(canvas: HTMLCanvasElement) {
        var display = new DynamicDisplay(canvas, function() {
            var scene = new DynamicScene(display);
            initInput(canvas, scene, display);
            scene.start(canvas);
        });
    }

    function initInput(canvas: HTMLCanvasElement, scene: DynamicScene, display: DynamicDisplay) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.UP] = function(e) { console.log("Up"); };
        inputCallbackMap[Input.Keys.DOWN] = function(e) { console.log("Down"); };
        inputCallbackMap[Input.Keys.LEFT] = function(e) { console.log("Left"); };
        inputCallbackMap[Input.Keys.RIGHT] = function(e) { console.log("Right"); };
        inputCallbackMap[Input.Keys.F1] = function(e) {
            scene.toggleFPS();
        };
        inputCallbackMap[Input.Keys.F2] = function(e) {
            scene.toggleGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function(e) {
            scene.toggleCellNumbering();
        };

        Input.init(
            canvas,
            display,
            inputCallbackMap,
            function() { },
            function() { },
            function() { },
            function() { },
            function(x, y) {
                //Ongoing
                scene.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                scene.updatePointer(x, y);
            },
            function() {
                console.log("pause");
                scene.togglePause(true);
            },
            function() {
                console.log("unpause");
                scene.togglePause(false);
            },
            function() {
                display.refresh();
                scene.updateContext(canvas);
            },
            function() { console.log("rightClick"); },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
            );
    };

}