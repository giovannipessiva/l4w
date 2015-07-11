/// <reference path="../core/AbstractDisplay.ts" />
 
/**
 * Module for managing canvas autosizing
 */
class StaticDisplay extends AbstractDisplay {

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (): void }) {
        super(cnvs, onCompleted);
    }

    deferredInit(props) {
        this.cellH = props["cellHeightEditor"];
        this.cellW = props["cellWidthEditor"];
        this.rows = props["rowsEditor"];
        this.columns = props["columnsEditor"];
        this.canvasRatio = props["canvasRatioEditor"];
        super.deferredInit(props);
    }

}