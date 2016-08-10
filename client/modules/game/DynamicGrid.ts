/// <reference path="../core/AbstractGrid.ts" />

/**
 * Module for managing canvas autosizing
 */
class DynamicGrid extends AbstractGrid {

    canvasRatio: number;
    scaleStepX: number;
    scaleStepY: number; 

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (grid: DynamicGrid): void }) {
        super(cnvs, onCompleted, GridTypeEnum.game);
    }

    deferredInit(props: Map<string, number>) {
        super.deferredInit(props);
        this.canvasRatio = props.get("canvasRatio");
        this.scaleStepX = this.cellW * Math.pow(2,-10);
        this.scaleStepY = this.cellH * Math.pow(2,-10);
    }

    refresh() {
        var ratioH = this.baseH / this.height();
        var ratioW = this.baseW / this.width();
        var newScale = this.canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        /*
            Not sure why, but this works against white rumor at cells border
            (the white rumor become more visible when the scale is high)
            0.03125 = CELL_SIZE * 2^-10
        */
        this.scaleX = newScale - (newScale % this.scaleStepX);
        this.scaleY = newScale - (newScale % this.scaleStepY);
        super.refresh();
    }

    private width() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    }

    private height() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    }
}