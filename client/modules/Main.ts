/// <reference path="Display.ts" />
/// <reference path="Input.ts" />

module Main {
   
    export function start(canvas: HTMLCanvasElement) {
        initDisplay(canvas);
        initInput(canvas);
    }
    
    function initDisplay(canvas: HTMLCanvasElement) {
       Display.init(canvas); 
    }

    function initInput(canvas: HTMLCanvasElement) {
        var inputCallbackMap: { [key: string] : Input.IEventCallback; } = {};
        inputCallbackMap[Input.Keys.UP] = function() { console.log("Up"); };
        inputCallbackMap[Input.Keys.DOWN] = function() { console.log("Down"); };
        inputCallbackMap[Input.Keys.LEFT] = function() { console.log("Left"); };
        inputCallbackMap[Input.Keys.RIGHT] = function() { console.log("Right"); };

        Input.init(
            canvas,
            inputCallbackMap,
            function() { console.log("reset"); },
            function() { console.log("action"); },
            function() { console.log("start"); },
            function() { console.log("ongoing"); },
            function() { console.log("end"); },
            function() { console.log("hover"); },
            function() { console.log("pause"); },
            function() { console.log("unpause"); },
            function() { console.log("resize"); },
            function() { console.log("rightClick"); },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
        );
    };
    
}