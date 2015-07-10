var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StaticScene = (function (_super) {
    __extends(StaticScene, _super);
    function StaticScene() {
        _super.call(this);
        this.renderingOptions.showEditorGrid = true;
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
    StaticScene.prototype.renderPointer = function () {
        if (this.pointer.x != null && this.pointer.y != null) {
            this.context.save();
            this.context.globalAlpha = 0.4;
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.fillRect(this.pointer.x * Display.cellW, this.pointer.y * Display.cellH, Display.cellW, Display.cellH);
            this.context.restore();
        }
    };
    return StaticScene;
})(AbstractScene);
