var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Scene;
(function (Scene) {
    var DynamicScene = (function (_super) {
        __extends(DynamicScene, _super);
        function DynamicScene() {
            _super.call(this);
            this.FPS = 20;
            this.refreshInterval = 1000 / this.FPS;
            this.autoFPS = true;
            this.secondFPS = 0;
            this.countFPS = 0;
            this.lastFPS = 0;
            this.FPSPerformance = [22, 21, 20];
            this.paused = false;
            this.hero = new Actor.Event();
        }
        DynamicScene.prototype.mainGameLoop_pre = function () {
            if (this.paused) {
                return false;
            }
            if (!_super.prototype.mainGameLoop_pre.call(this)) {
                return false;
            }
            this.context.fillStyle = '#000000';
            this.context.font = 'bold 40px Arial';
            this.context.fillText("(it's not ready yet)", 160, 260);
            var time = Time.getTime();
            this.hero.update(this.events, this.map, time);
            for (var event in this.events) {
                event.update(this.events, this.map, time);
            }
            return true;
        };
        DynamicScene.prototype.mainGameLoop_post = function () {
            _super.prototype.mainGameLoop_post.call(this);
            this.renderFPS();
        };
        DynamicScene.prototype.togglePause = function (pause) {
            if (pause != null) {
                this.paused = pause;
            }
            else {
                this.paused = !this.paused;
            }
        };
        DynamicScene.prototype.toggleFPS = function (enable) {
            if (enable != null) {
                this.renderingOptions.showFPS = enable;
            }
            else {
                this.renderingOptions.showFPS = !this.renderingOptions.showFPS;
            }
        };
        DynamicScene.prototype.renderFPS = function () {
            var seconds = Math.floor(Time.getTime() / 1000);
            if (seconds == this.secondFPS) {
                this.countFPS++;
            }
            else {
                this.lastFPS = this.countFPS;
                this.countFPS = 1;
                this.secondFPS = seconds;
                if (this.autoFPS == true) {
                    this.FPSPerformance.shift();
                    this.FPSPerformance[2] = this.lastFPS;
                    var avg = (this.FPSPerformance[0] + this.FPSPerformance[1] + this.FPSPerformance[2]) / 3;
                    this.FPS = Math.ceil(avg) + 2;
                }
            }
            if (this.renderingOptions.showFPS) {
                this.context.fillStyle = Constant.Color.RED;
                this.context.font = "bold 18px Arial";
                this.context.fillText("" + this.lastFPS, 10, 20);
            }
        };
        return DynamicScene;
    })(Scene.AbstractScene);
    Scene.DynamicScene = DynamicScene;
})(Scene || (Scene = {}));
