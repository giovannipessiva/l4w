module Mapper {

    export function start(canvas: HTMLCanvasElement) {
        new StaticGrid(canvas, function(grid: StaticGrid) {
            var scene = new StaticScene(grid);
            initInput(canvas, scene, grid);
            initWidgets(canvas, scene, grid);
            scene.start(canvas);
        }, GridTypeEnum.mapper);
    }

    function initInput(canvas: HTMLCanvasElement, scene: StaticScene, grid: StaticGrid) {
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
            grid,
            inputCallbackMap,
            function() { },
            function(x, y) {
                // Action
                scene.select(x, y);
            },
            function(x, y) {
                // Start action
                scene.select(x, y);
            },
            function(x, y) {
                //End action
                scene.selectEnd(x, y);
            },
            function(x, y) {
                //Ongoing
                scene.selectEnd(x, y);
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

    function initWidgets(canvas: HTMLCanvasElement, scene: StaticScene, grid: StaticGrid) {
        var inputRange: HTMLInputElement = <HTMLInputElement> document.getElementById("zoom");
        inputRange.onchange = function(e: Event) {
            grid.selectScale(+inputRange.value);
            grid.refresh();
            scene.updateContext(canvas);
        };
    };

}