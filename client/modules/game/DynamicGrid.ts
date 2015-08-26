/// <reference path="../core/AbstractGrid.ts" />
 
/**
 * Module for managing canvas autosizing
 */
class DynamicDisplay extends AbstractDisplay {

    canvasRatio: number;
    
    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        super(cnvs, onCompleted);
    }

    deferredInit(props: Map<string,string>) {
        this.cellH = props["cellHeight"];
        this.cellW = props["cellWidth"];
        this.rows = props["rows"];
        this.columns = props["columns"];
        this.canvasRatio = props["canvasRatio"];
        super.deferredInit(props);
    }
    
    refresh() {
        var ratioH = this.baseH / this.height();
        var ratioW = this.baseW / this.width();
        this.scale = this.canvasRatio / (ratioH > ratioW ? ratioH : ratioW);
        super.refresh();
    }
    
    private width() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    }

    private height() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    }
}