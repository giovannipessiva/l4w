var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DynamicDisplay = (function (_super) {
    __extends(DynamicDisplay, _super);
    function DynamicDisplay(cnvs, onCompleted) {
        _super.call(this, cnvs, onCompleted);
    }
    DynamicDisplay.prototype.deferredInit = function (props) {
        this.cellH = props["cellHeight"];
        this.cellW = props["cellWidth"];
        this.rows = props["rows"];
        this.columns = props["columns"];
        this.canvasRatio = props["canvasRatio"];
        _super.prototype.deferredInit.call(this, props);
    };
    return DynamicDisplay;
})(AbstractDisplay);
