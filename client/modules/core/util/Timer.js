var Time;
(function (Time) {
    function getTime() {
        var d = new Date();
        return d.getTime();
    }
    Time.getTime = getTime;
    ;
    var Timer = (function () {
        function Timer() {
            this.startTime = 0;
        }
        Timer.prototype.start = function () {
            this.startTime = getTime();
        };
        Timer.prototype.getDiff = function (currentTime) {
            return currentTime - this.startTime;
        };
        Timer.prototype.update = function () {
            var t = getTime();
            var diff = t - this.startTime;
            this.startTime = t;
            return diff;
        };
        Timer.prototype.isActive = function () {
            return this.startTime != 0;
        };
        Timer.prototype.stop = function () {
            this.startTime = 0;
        };
        return Timer;
    })();
    Time.Timer = Timer;
})(Time || (Time = {}));
