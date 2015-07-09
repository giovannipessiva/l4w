var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Scene;
(function (Scene) {
    var StaticScene = (function (_super) {
        __extends(StaticScene, _super);
        function StaticScene() {
            _super.call(this);
        }
        StaticScene.prototype.mainGameLoop_pre = function () {
            if (!_super.prototype.mainGameLoop_pre.call(this)) {
                return false;
            }
            return true;
        };
        StaticScene.prototype.mainGameLoop_post = function () {
            _super.prototype.mainGameLoop_post.call(this);
        };
        StaticScene.prototype.toggleEditorGrid = function (enable) {
            if (enable != null) {
                this.renderingOptions.showEditorGrid = enable;
            }
            else {
                this.renderingOptions.showEditorGrid = !this.renderingOptions.showEditorGrid;
            }
        };
        return StaticScene;
    })(Scene.AbstractScene);
    Scene.StaticScene = StaticScene;
})(Scene || (Scene = {}));
