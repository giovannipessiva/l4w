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
        this.canvasScales = props["canvasScale"].split(",");
        var totCanvasScales = this.canvasScales.length;
        this.rowsList = new Array(totCanvasScales);
        this.columnsList = new Array(totCanvasScales);
        var selectedScaleId = totCanvasScales - 1;
        for (var i = 0; i < totCanvasScales; i++) {
            this.rowsList[i] = Math.floor(this.rows / +this.canvasScales[i]);
            this.columnsList[i] = Math.floor(this.columns / +this.canvasScales[i]);
        }
        this.selectScale(selectedScaleId);
        _super.prototype.deferredInit.call(this, props);
    };
    StaticDisplay.prototype.refresh = function () {
        _super.prototype.refresh.call(this);
    };
    StaticDisplay.prototype.selectScale = function (scaleId) {
        this.rows = this.rowsList[scaleId];
        this.columns = this.columnsList[scaleId];
        this.updateSizingDerivates();
        this.scale = +this.canvasScales[scaleId];
    };
    return StaticDisplay;
})(AbstractDisplay);
