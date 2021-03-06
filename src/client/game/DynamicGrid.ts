import { AbstractGrid, GridTypeEnum } from "../core/AbstractGrid"

/**
 * Module for managing canvas autosizing
 */
export class DynamicGrid extends AbstractGrid {

    protected canvasRatio: number;
    protected scaleStepX: number;
    protected scaleStepY: number;

    protected naturalScale: boolean;
    protected doubleScale: boolean;
    
    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (grid: AbstractGrid): void }) {
        super(cnvs, onCompleted, GridTypeEnum.game);
    }

    protected deferredInit(props: Map<string, number>) {
        super.deferredInit(props);
        let tmpRatio = props.get("canvasRatio");
        if(tmpRatio === undefined) {
            tmpRatio = 1;
        }
        this.canvasRatio = tmpRatio;
        this.scaleStepX = this.cellW * Math.pow(2,-10);
        this.scaleStepY = this.cellH * Math.pow(2,-10);
    }

    refreshCanvasSize() {
        if(!this.naturalScale) {
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
        } else if(this.doubleScale) {
            this.scaleX = 2;
            this.scaleY = 2;
        } else {
            this.scaleX = 1;
            this.scaleY = 1;
        }
        super.refreshCanvasSize();
    }

    private width() {
        return window.innerWidth || (document.documentElement !== null? document.documentElement.clientWidth : document.body.clientWidth || 0);
    }

    private height() {
        return window.innerHeight || (document.documentElement !== null? document.documentElement.clientHeight : document.body.clientHeight || 0);
    }

    toggleNaturalScale(enabled?: boolean, double?: boolean) {
        this.naturalScale = enabled !== undefined? enabled : !this.toggleNaturalScale;
        this.doubleScale = double? double : false;
    }
}