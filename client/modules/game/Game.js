var Game;
(function (Game) {
    function start(canvas) {
        var display = new DynamicDisplay(canvas, function () {
            var scene = new DynamicScene(display);
            initInput(canvas, scene, display);
            scene.start(canvas);
        });
    }
    Game.start = start;
    function initInput(canvas, scene, display) {
        var inputCallbackMap = new Map();
        inputCallbackMap[Input.Keys.UP] = function (e) {
            console.log("Up");
        };
        inputCallbackMap[Input.Keys.DOWN] = function (e) {
            console.log("Down");
        };
        inputCallbackMap[Input.Keys.LEFT] = function (e) {
            console.log("Left");
        };
        inputCallbackMap[Input.Keys.RIGHT] = function (e) {
            console.log("Right");
        };
        inputCallbackMap[Input.Keys.F1] = function (e) {
            scene.toggleFPS();
        };
        inputCallbackMap[Input.Keys.F2] = function (e) {
            scene.toggleGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function (e) {
            scene.toggleCellNumbering();
        };
        Input.init(canvas, display, inputCallbackMap, function () {
        }, function () {
        }, function () {
        }, function () {
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function (x, y) {
            scene.updatePointer(x, y);
        }, function () {
            console.log("pause");
            scene.togglePause(true);
        }, function () {
            console.log("unpause");
            scene.togglePause(false);
        }, function () {
            display.refresh();
            scene.updateContext(canvas);
        }, function () {
            console.log("rightClick");
        }, function () {
            console.log("doubleClick");
        }, function () {
            console.log("wheel");
        });
    }
    ;
})(Game || (Game = {}));
