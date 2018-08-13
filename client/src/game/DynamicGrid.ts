/// <reference path="../core/AbstractGrid.ts" />

/**
 * Module for managing canvas autosizing
 */
class DynamicGrid extends AbstractGrid {

    protected canvasRatio: number;
    protected scaleStepX: number;
    protected scaleStepY: number;
    
    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (grid: AbstractGrid): void }) {
        super(cnvs, onCompleted, GridTypeEnum.game);
    }

    public deferredInit(props: Map<string, number>) {
        super.deferredInit(props);
        let tmpRatio = props.get("canvasRatio");
        if(tmpRatio === undefined) {
            tmpRatio = 1;
        }
        this.canvasRatio = tmpRatio;
        this.scaleStepX = this.cellW * Math.pow(2,-10);
        this.scaleStepY = this.cellH * Math.pow(2,-10);
    }

    public refresh() {
        let ratioH = this.baseH / this.height();
        let ratioW = this.baseW / this.width();
        let newScale = this.canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        /*
            Not sure why, but this works against white rumor at cells border
            (the white rumor become more visible when the scale is high)
            SCALE_STEP = CELL_SIZE * 2^-10
        */
        this.scaleX = newScale - (newScale % this.scaleStepX);
        this.scaleY = newScale - (newScale % this.scaleStepY);
        super.refresh();
    }
    
    public updateSizingDerivates() {
        super.updateSizingDerivates();
    }

    private width() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    }

    private height() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    }
}