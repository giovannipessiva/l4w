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
;
;
function initInputHandler(canvas, inputCallbacks, resetCallback, pauseCallback, unpauseCallback) {
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
    document.addEventListener("visibilitychange", function onVisibilityChange() {
        if (document.hidden) {
            pauseCallback();
            flagPause = true;
        }
        else {
            unpauseCallback();
            flagPause = false;
        }
    }, false);
}
;
