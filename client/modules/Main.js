var Main;
(function (Main) {
    function start(canvas) {
        initDisplay(canvas);
        initInput(canvas);
        Scene.start(canvas.getContext("2d"));
    }
    Main.start = start;
    function initDisplay(canvas) {
        Display.init(canvas);
    }
    function initInput(canvas) {
        var inputCallbackMap = new Map();
        inputCallbackMap[Input.Keys.UP] = function () {
            console.log("Up");
        };
        inputCallbackMap[Input.Keys.DOWN] = function () {
            console.log("Down");
        };
        inputCallbackMap[Input.Keys.LEFT] = function () {
            console.log("Left");
        };
        inputCallbackMap[Input.Keys.RIGHT] = function () {
            console.log("Right");
        };
        Input.init(canvas, inputCallbackMap, function () {
            console.log("reset");
        }, function () {
            console.log("action");
        }, function () {
            console.log("start");
        }, function () {
            console.log("end");
        }, function (x, y) {
            console.log("ongoing");
            Scene.updatePointer(x, y);
        }, function (x, y) {
            console.log("hover");
            Scene.updatePointer(x, y);
        }, function () {
            console.log("pause");
            Scene.togglePause(true);
        }, function () {
            console.log("unpause");
            Scene.togglePause(false);
        }, function () {
            console.log("resize");
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
