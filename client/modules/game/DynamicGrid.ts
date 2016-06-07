/// <reference path="../core/AbstractGrid.ts" />

/**
 * Module for managing canvas autosizing
 */
class DynamicGrid extends AbstractGrid {

    canvasRatio: number;

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (grid: DynamicGrid): void }) {
        super(cnvs, onCompleted, GridTypeEnum.game);
    }

    deferredInit(props: Map<string, number>) {
        super.deferredInit(props);
        this.canvasRatio = props.get("canvasRatio");
    }

    refresh() {
        var ratioH = this.baseH / this.height();
        var ratioW = this.baseW / this.width();
        var newScale = this.canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        /*
            Not sure why, but this works against white rumor at cells border
            (the white rumor become visible when the scale is high)
            0.03125 = CELL_SIZE * 2^-10
        */
        this.scale = newScale - (newScale % 0.03125);
        super.refresh();
    }

    private width() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    }

    private height() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    }
}