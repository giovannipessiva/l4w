var Main;
(function (Main) {
    function start(canvas) {
        initInput(canvas);
        initDisplay(canvas, function () {
            Scene.start(canvas);
        });
    }
    Main.start = start;
    function initDisplay(canvas, onCompleted) {
        Display.init(canvas, onCompleted);
    }
    function initInput(canvas) {
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
            Scene.toggleFPS();
        };
        inputCallbackMap[Input.Keys.F2] = function (e) {
            Scene.toggleGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function (e) {
            Scene.toggleCellNumbering();
        };
        Input.init(canvas, inputCallbackMap, function () {
        }, function () {
        }, function () {
        }, function () {
        }, function (x, y) {
            Scene.updatePointer(x, y);
        }, function (x, y) {
            Scene.updatePointer(x, y);
        }, function () {
            console.log("pause");
            Scene.togglePause(true);
        }, function () {
            console.log("unpause");
            Scene.togglePause(false);
        }, function () {
            Display.refresh();
            Scene.updateContext(canvas);
        }, function () {
            console.log("rightClick");
        }, function () {
            console.log("doubleClick");
        }, function () {
            console.log("wheel");
        });
    }
    ;
})(Main || (Main = {}));
