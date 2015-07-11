/// <reference path="../core/AbstractDisplay.ts" />
 
/**
 * Module for managing canvas autosizing
 */
class DynamicDisplay extends AbstractDisplay {

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        super(cnvs, onCompleted);
    }

    deferredInit(props) {
        this.cellH = props["cellHeight"];
        this.cellW = props["cellWidth"];
        this.rows = props["rows"];
        this.columns = props["columns"];
        this.canvasRatio = props["canvasRatio"];
        super.deferredInit(props);
    }
}