/// <reference path="../core/AbstractGrid.ts" />
 
/**
 * Module for managing canvas autosizing
 */
class StaticGrid extends AbstractGrid {

    private tileColumns: number;
    private rowsList: number[];
    private columnsList: number[];
    private canvasScales: string[];

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        super(cnvs, onCompleted);

    }

    deferredInit(props: Map<string, string>) {
        super.deferredInit(props); 
        this.rows = props["rowsEditor"];
        this.columns = props["columnsEditor"];
        this.tileColumns = props["tileColumns"];
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
    
    getBoundariesX(focusX: number, limit: number): { min: number; max: number } {
        //TODO seleziona solo il range che può essere cambiato
        return super.getBoundariesX(focusX,limit);
    }

    getBoundariesY(focusY: number, limit: number): { min: number; max: number } {
        //TODO seleziona solo il range che può essere cambiato
        return super.getBoundariesY(focusY,limit);
    }
}