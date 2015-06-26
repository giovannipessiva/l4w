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
    ;
    function handleInput(canvas, actionCallback, startActionCallback, ongoingActionCallback, endActionCallback, hoverCallback, inputCallbacks, resetCallback, pauseCallback, unpauseCallback, resizeCallback) {
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
        canvas.addEventListener("click", function (e) {
            var rect = canvas.getBoundingClientRect();
            var mouse_x = e.clientX - rect.left;
            var mouse_y = e.clientY - rect.top;
            action(mouse_x, mouse_y);
        }, false);
        canvas.addEventListener("mousemove", function (e) {
            var rect = canvas.getBoundingClientRect();
            var mouse_x = e.clientX - rect.left;
            var mouse_y = e.clientY - rect.top;
            hover(mouse_x, mouse_y);
        }, false);
        var actionOngoing = false;
        canvas.addEventListener("mousedown", function (e) {
            actionOngoing = true;
            var position = mapEvent(e);
            startActionCallback(position.x, position.y);
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            actionOngoing = false;
            var position = mapEvent(e);
            endActionCallback(position.x, position.y);
        }, false);
        canvas.addEventListener("mouseover", function (e) {
            var position = mapEvent(e);
            if (actionOngoing) {
                ongoingActionCallback(position.x, position.y);
            }
            else {
                hoverCallback(position.x, position.y);
            }
        }, false);
        canvas.addEventListener("touchstart", function (e) {
            var position = mapEvent(e);
            startActionCallback(position.x, position.y);
        }, false);
        canvas.addEventListener("touchend", function (e) {
            var position = mapEvent(e);
            endActionCallback(position.x, position.y);
        }, false);
        canvas.addEventListener("touchcancel", function (e) {
            var position = mapEvent(e);
            endActionCallback(position.x, position.y);
        }, false);
        canvas.addEventListener("touchmove", function (e) {
            var position = mapEvent(e);
            ongoingActionCallback(position.x, position.y);
        }, false);
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
        }, false);
        document.addEventListener("orientationchange", function () {
            resizeCallback();
        }, false);
        document.addEventListener("resize", function () {
            resizeCallback();
        }, false);
        function action(x, y) {
            actionCallback(x, y);
        }
        ;
        function startAction(x, y) {
            startActionCallback(x, y);
        }
        ;
        function ongoingAction(x, y) {
            ongoingActionCallback(x, y);
        }
        ;
        function endAction(x, y) {
            endActionCallback(x, y);
        }
        ;
        function hover(x, y) {
            hoverCallback(x, y);
        }
        ;
        function mapEvent(e) {
            var rect = canvas.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            return { x: x, y: y };
        }
    }
    Input.handleInput = handleInput;
    ;
})(Input || (Input = {}));
