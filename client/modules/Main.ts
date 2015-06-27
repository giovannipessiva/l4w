/// <reference path="Input.ts" />

module Main {
   
    export function start(canvas) {
        initInput(canvas);
    }

    function initInput(canvas) {
        var inputCallbackMap: { Keys: Input.IKeyCallback; };
        inputCallbackMap[Input.Keys.UP] = function(key) { console.log("Up"); };
        inputCallbackMap[Input.Keys.DOWN] = function(key) { console.log("Down"); };
        inputCallbackMap[Input.Keys.LEFT] = function(key) { console.log("Left"); };
        inputCallbackMap[Input.Keys.RIGHT] = function(key) { console.log("Right"); };

        Input.handleInput(
            canvas,
            function() { console.log("action"); },
            function() { console.log("start"); },
            function() { console.log("ongoing"); },
            function() { console.log("end"); },
            function() { console.log("hover"); },
            inputCallbackMap,
            function() { console.log("reset"); },
            function() { console.log("pause"); },
            function() { console.log("unpause"); },
            function() { console.log("resize"); }
        );
    };
    
}