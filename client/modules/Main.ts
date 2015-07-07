/// <reference path="Display.ts" />
/// <reference path="Input.ts" />
/// <reference path="core/Scene.ts" />

module Main {

    export function start(canvas: HTMLCanvasElement) {
        initDisplay(canvas);
        initInput(canvas);

        Scene.start(canvas);
    }

    function initDisplay(canvas: HTMLCanvasElement) {
        Display.init(canvas);
    }

    function initInput(canvas: HTMLCanvasElement) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.UP] = function(e) { console.log("Up"); };
        inputCallbackMap[Input.Keys.DOWN] = function(e) { console.log("Down"); };
        inputCallbackMap[Input.Keys.LEFT] = function(e) { console.log("Left"); };
        inputCallbackMap[Input.Keys.RIGHT] = function(e) { console.log("Right"); };
        inputCallbackMap[Input.Keys.F1] = function(e) {
            Scene.toggleFPS();
        };
        inputCallbackMap[Input.Keys.F2] = function(e) {
            Scene.toggleGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function(e) {
            Scene.toggleCellNumbering();
        };

        Input.init(
            canvas,
            inputCallbackMap,
            function() { },
            function() { },
            function() { },
            function() { },
            function(x, y) {
                //Ongoing
                Scene.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                Scene.updatePointer(x, y);
            },
            function() {
                console.log("pause");
                Scene.togglePause(true);
            },
            function() {
                console.log("unpause");
                Scene.togglePause(false);
            },
            function() {
                Display.refresh();
                Scene.updateContext(canvas);   
            },
            function() { console.log("rightClick"); },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
            );
    };

}