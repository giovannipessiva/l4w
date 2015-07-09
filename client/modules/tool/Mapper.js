var Mapper;
(function (Mapper) {
    function start(canvas) {
        var scene = new Scene.StaticScene();
        initInput(canvas, scene);
        initDisplay(canvas, function () {
            scene.start(canvas);
        });
    }
    Mapper.start = start;
    function initDisplay(canvas, onCompleted) {
        Display.init(canvas, onCompleted, false);
    }
    function initInput(canvas, scene) {
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
        inputCallbackMap[Input.Keys.F2] = function (e) {
            scene.toggleEditorGrid();
        };
        inputCallbackMap[Input.Keys.F3] = function (e) {
            scene.toggleCellNumbering();
        };
        Input.init(canvas, inputCallbackMap, function () {
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
})(Mapper || (Mapper = {}));
