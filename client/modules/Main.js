var Main;
(function (Main) {
    function start(canvas) {
        initDisplay(canvas);
        initInput(canvas);
    }
    Main.start = start;
    function initDisplay(canvas) {
        Display.init(canvas);
    }
    function initInput(canvas) {
        var inputCallbackMap = {};
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
            console.log("ongoing");
        }, function () {
            console.log("end");
        }, function () {
            console.log("hover");
        }, function () {
            console.log("pause");
        }, function () {
            console.log("unpause");
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
