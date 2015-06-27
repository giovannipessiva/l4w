var Main;
(function (Main) {
    function start(canvas) {
        initInput(canvas);
    }
    Main.start = start;
    function initInput(canvas) {
        var inputCallbackMap;
        inputCallbackMap[Input.Keys.UP] = function (key) {
            console.log("Up");
        };
        inputCallbackMap[Input.Keys.DOWN] = function (key) {
            console.log("Down");
        };
        inputCallbackMap[Input.Keys.LEFT] = function (key) {
            console.log("Left");
        };
        inputCallbackMap[Input.Keys.RIGHT] = function (key) {
            console.log("Right");
        };
        Input.handleInput(canvas, function () {
            console.log("action");
        }, function () {
            console.log("start");
        }, function () {
            console.log("ongoing");
        }, function () {
            console.log("end");
        }, function () {
            console.log("hover");
        }, inputCallbackMap, function () {
            console.log("reset");
        }, function () {
            console.log("pause");
        }, function () {
            console.log("unpause");
        }, function () {
            console.log("resize");
        });
    }
    ;
})(Main || (Main = {}));
