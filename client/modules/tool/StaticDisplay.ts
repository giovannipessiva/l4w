/// <reference path="../core/AbstractDisplay.ts" />
 
/**
 * Module for managing canvas autosizing
 */
class StaticDisplay extends AbstractDisplay {

    private rowsList: number[];
    private columnsList: number[];
    private canvasScales: string[];

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        super(cnvs, onCompleted);

    }

    deferredInit(props: Map<string, string>) {
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
        super.deferredInit(props);  
    }

    refresh() {
        super.refresh();
    }

    selectScale(scaleId: number) {
        this.rows = this.rowsList[scaleId];
        this.columns = this.columnsList[scaleId];
        this.updateSizingDerivates();
        this.scale = +this.canvasScales[scaleId];
    }
}