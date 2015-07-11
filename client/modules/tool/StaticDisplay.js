var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StaticDisplay = (function (_super) {
    __extends(StaticDisplay, _super);
    function StaticDisplay(cnvs, onCompleted) {
        _super.call(this, cnvs, onCompleted);
    }
    StaticDisplay.prototype.deferredInit = function (props) {
        this.cellH = props["cellHeightEditor"];
        this.cellW = props["cellWidthEditor"];
        this.rows = props["rowsEditor"];
        this.columns = props["columnsEditor"];
        this.canvasRatio = props["canvasRatioEditor"];
        _super.prototype.deferredInit.call(this, props);
    };
    return StaticDisplay;
})(AbstractDisplay);
