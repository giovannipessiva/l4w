import { AbstractGrid, GridTypeEnum } from "../core/AbstractGrid"
import { Utils } from "../core/util/Utils"
import { IRange } from "../core/util/Commons"

/**
 * Module for managing canvas autosizing
 */
export class StaticGrid extends AbstractGrid {

    private rowsList: number[];
    private columnsList: number[];
    private canvasScales: number[];
    private overriddenProps: Map<string, number>;

    constructor(
        canvas: HTMLCanvasElement,
        onCompleted: { (grid: StaticGrid): void },
        gridType: GridTypeEnum,
        overriddenProperties?: Map<string, number>
        ) {
        super(canvas, <{ (grid: AbstractGrid): void }> onCompleted, gridType);
        if(overriddenProperties !== undefined) {
            this.overriddenProps = overriddenProperties;
        } else {
            this.overriddenProps = new Map<string, number>();
        }
    }

    deferredInit(props: Map<string, number>) {
        if (!Utils.isEmpty(this.overriddenProps)) {
            props = Utils.mergeMaps(this.overriddenProps, props);
        }
        super.deferredInit(props);

        switch (this.gridType) {
            case GridTypeEnum.mapper:
                this.canvasScales = [];
                this.canvasScales.push(props.get("canvasScaleD")!);
                this.canvasScales.push(props.get("canvasScaleC")!);
                this.canvasScales.push(props.get("canvasScaleB")!);
                this.canvasScales.push(props.get("canvasScaleA")!);

                var totCanvasScales = this.canvasScales.length;
                this.rowsList = new Array(totCanvasScales);
                this.columnsList = new Array(totCanvasScales);

                var selectedScaleId = totCanvasScales - 1;
                for (var i = 0; i < totCanvasScales; i++) {
                    this.rowsList[i] = Math.floor(this.rows / this.canvasScales[i]);
                    this.columnsList[i] = Math.floor(this.columns / this.canvasScales[i]);
                }
                this.selectScale(selectedScaleId);
                break;
            case GridTypeEnum.tilePicker:
                this.scaleX = 1;
                this.scaleY = 1;
                // Use the canvas size, which have been set according to the tile
                this.updateSize(this.canvas.width,this.canvas.height);
        }
    }

    /**
     * Usato quando cambia la scala
     */
    selectScale(scaleId: number) {
        this.rows = this.rowsList[scaleId];
        this.columns = this.columnsList[scaleId];
        this.updateSizingDerivates();
        this.scaleX = this.canvasScales[scaleId];
        this.scaleY = this.canvasScales[scaleId];
    }
    
    /**
     * Usato quando cambia la dimensione 
     */
    updateSize(widthPx: number, heightPx: number) {
        this.rows = Math.floor(heightPx / this.cellH);
        this.columns = Math.floor(widthPx / this.cellW);
        this.updateSizingDerivates();
    }

    getBoundariesX(focusX: number, columns: number): IRange {
        //TODO seleziona solo il range che puo' essere cambiato
        return super.getBoundariesX(focusX, columns);
    }

    getBoundariesY(focusY: number, rows: number): IRange {
        //TODO seleziona solo il range che puo' essere cambiato
        return super.getBoundariesY(focusY, rows);
    }

    refresh() {
        super.refresh();

    }
}