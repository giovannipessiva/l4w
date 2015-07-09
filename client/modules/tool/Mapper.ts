module Mapper {

    export function start(canvas: HTMLCanvasElement) {
        var scene = new Scene.StaticScene();
        initInput(canvas,scene);
        initDisplay(canvas, function() {
            scene.start(canvas);
        });
        
    }

    function initDisplay(canvas: HTMLCanvasElement, onCompleted: { (): void }) {
        Display.init(canvas, onCompleted);
    }

    function initInput(canvas: HTMLCanvasElement, scene: Scene.StaticScene) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.UP] = function(e) { console.log("Up"); };
        inputCallbackMap[Input.Keys.DOWN] = function(e) { console.log("Down"); };
        inputCallbackMap[Input.Keys.LEFT] = function(e) { console.log("Left"); };
        inputCallbackMap[Input.Keys.RIGHT] = function(e) { console.log("Right"); };
        inputCallbackMap[Input.Keys.F2] = function(e) {
            scene.toggleGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function(e) {
            scene.toggleCellNumbering();
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
                scene.updatePointer(x, y);
            },
            function(x, y) {
                //Hover
                scene.updatePointer(x, y);
            },
            function() { },
            function() { },
            function() {
                Display.refresh();
                scene.updateContext(canvas);
            },
            function() { console.log("rightClick"); },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
            );
    };

}