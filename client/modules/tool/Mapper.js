var Mapper;
(function (Mapper) {
    function start(canvas) {
        var display = new StaticDisplay(canvas, function () {
            var scene = new StaticScene(display);
            initInput(canvas, scene, display);
            initWidgets(canvas, scene, display);
            scene.start(canvas);
        });
    }
    Mapper.start = start;
    function initInput(canvas, scene, display) {
        var inputCallbackMap = new Map();
        inputCallbackMap[Input.Keys.W] = function (e) {
            scene.moveFocus(Constant.Direction.UP);
        };
        inputCallbackMap[Input.Keys.S] = function (e) {
            scene.moveFocus(Constant.Direction.DOWN);
        };
        inputCallbackMap[Input.Keys.A] = function (e) {
            scene.moveFocus(Constant.Direction.LEFT);
        };
        inputCallbackMap[Input.Keys.D] = function (e) {
            scene.moveFocus(Constant.Direction.RIGHT);
        };
        inputCallbackMap[Input.Keys.F2] = function (e) {
            scene.toggleEditorGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function (e) {
            scene.toggleCellNumbering();
        };
        inputCallbackMap[Input.Keys.F4] = function (e) {
            scene.toggleFocus();
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
        }, function () {
        }, function () {
        }, function () {
            console.log("rightClick");
        }, function () {
            console.log("doubleClick");
        }, function () {
            console.log("wheel");
        });
    }
    ;
    function initWidgets(canvas, scene, display) {
        var inputRange = document.getElementById("zoom");
        inputRange.onchange = function (e) {
            display.selectScale(+inputRange.value);
            display.refresh();
            scene.updateContext(canvas);
        };
    }
    ;
})(Mapper || (Mapper = {}));
