var Input;
(function (Input) {
    var Keys = (function () {
        function Keys() {
        }
        Keys.UP = "38";
        Keys.DOWN = "40";
        Keys.LEFT = "37";
        Keys.RIGHT = "39";
        Keys.CTRL = "17";
        Keys.ALT = "18";
        Keys.ENTER = "13";
        Keys.SPACE = "32";
        Keys.CAPS = "20";
        Keys.SHIFT = "16";
        Keys.W = "87";
        Keys.A = "65";
        Keys.D = "68";
        Keys.S = "83";
        Keys.J = "74";
        Keys.K = "75";
        return Keys;
    })();
    Input.Keys = Keys;
    ;
    ;
    function init(canvas, inputCallbacks, resetCallback, actionCallback, startActionCallback, ongoingActionCallback, endActionCallback, hoverCallback, pauseCallback, unpauseCallback, resizeCallback, rightClickCallback, doubleClickCallback, wheelCallback) {
        var actionOngoing = false;
        var lastKey;
        var flagPause = false;
        inputCallbacks[Keys.SPACE] = function () {
            if (flagPause) {
                unpauseCallback();
                flagPause = false;
            }
            else {
                pauseCallback();
                flagPause = true;
            }
        };
        var flagMouseDown = false;
        canvas.addEventListener("click", function (e) {
            var rect = canvas.getBoundingClientRect();
            var mouse_x = e.clientX - rect.left;
            var mouse_y = e.clientY - rect.top;
            actionCallback(mouse_x, mouse_y);
        });
        canvas.addEventListener("mousemove", function (e) {
            var rect = canvas.getBoundingClientRect();
            var position = mapEvent(e);
            if (flagMouseDown) {
                ongoingActionCallback(position.x, position.y);
            }
            else {
                hoverCallback(position.x, position.y);
            }
        });
        canvas.addEventListener("mousedown", function (e) {
            flagMouseDown = true;
            var position = mapEvent(e);
            startActionCallback(position.x, position.y);
        });
        canvas.addEventListener("mouseup", function (e) {
            flagMouseDown = false;
            var position = mapEvent(e);
            endActionCallback(position.x, position.y);
        });
        canvas.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            var position = mapEvent(e);
            rightClickCallback(position.x, position.y);
        });
        canvas.addEventListener("dblclick", function (e) {
            e.preventDefault();
            var position = mapEvent(e);
            doubleClickCallback(position.x, position.y);
        });
        canvas.addEventListener("wheel", function (e) {
            e.preventDefault();
            var position = mapEvent(e);
            wheelCallback(position.x, position.y);
        });
        canvas.addEventListener("touchstart", function (e) {
            e.preventDefault();
            var position = mapEvent(e);
            startActionCallback(position.x, position.y);
        });
        canvas.addEventListener("touchend", function (e) {
            e.preventDefault();
            var position = mapEvent(e);
            endActionCallback(position.x, position.y);
        });
        canvas.addEventListener("touchcancel", function (e) {
            var position = mapEvent(e);
            endActionCallback(position.x, position.y);
        });
        canvas.addEventListener("touchmove", function (e) {
            var position = mapEvent(e);
            ongoingActionCallback(position.x, position.y);
        });
        document.addEventListener("keydown", function (e) {
            var callback = inputCallbacks[String(e.keyCode)];
            if (callback !== undefined) {
                callback();
            }
            lastKey = e.keyCode;
        });
        document.addEventListener("keyup", function (e) {
            if (e.keyCode === lastKey) {
                resetCallback();
            }
        });
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                pauseCallback();
                flagPause = true;
            }
            else {
                unpauseCallback();
                flagPause = false;
            }
        });
        window.addEventListener('resize', function (event) {
            pauseCallback();
            flagPause = true;
            resizeCallback();
        });
        document.addEventListener("orientationchange", function () {
            resizeCallback();
        });
        function mapEvent(e) {
            return Display.mapPosition(e.clientX, e.clientY);
        }
    }
    Input.init = init;
    ;
})(Input || (Input = {}));
