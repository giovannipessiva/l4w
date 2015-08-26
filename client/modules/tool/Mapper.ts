module Mapper {

    export function start(canvas: HTMLCanvasElement) {
        var display = new StaticGrid(canvas, function() {
            var scene = new StaticScene(display);
            initInput(canvas, scene, display);
            initWidgets(canvas, scene, display);
            scene.start(canvas);
        });
    }

    function initInput(canvas: HTMLCanvasElement, scene: StaticScene, display: StaticGrid) {
        var inputCallbackMap: Map<string, Input.IKeyboardCallback> = new Map<string, Input.IKeyboardCallback>();
        inputCallbackMap[Input.Keys.W] = function(e) {
           scene.moveFocus(Constant.Direction.UP); 
        };
        inputCallbackMap[Input.Keys.S] = function(e) {
           scene.moveFocus(Constant.Direction.DOWN); 
        };
        inputCallbackMap[Input.Keys.A] = function(e) {
           scene.moveFocus(Constant.Direction.LEFT); 
        };
        inputCallbackMap[Input.Keys.D] = function(e) {
           scene.moveFocus(Constant.Direction.RIGHT); 
        };

        inputCallbackMap[Input.Keys.F2] = function(e) {
            scene.toggleEditorGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function(e) {
            scene.toggleCellNumbering();
        };
        inputCallbackMap[Input.Keys.F4] = function(e) {
            scene.toggleFocus();
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
            function() { },
            function() { },
            function() { },
            function() { console.log("rightClick"); },
            function() { console.log("doubleClick"); },
            function() { console.log("wheel"); }
            );
    };
    
    function initWidgets(canvas: HTMLCanvasElement, scene: StaticScene, display: StaticGrid) {
        var inputRange: HTMLInputElement = <HTMLInputElement> document.getElementById("zoom");
        inputRange.onchange = function(e: Event){
            display.selectScale(+inputRange.value);
            display.refresh();
            scene.updateContext(canvas);
        };
    };

}