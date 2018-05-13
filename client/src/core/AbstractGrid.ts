/// <reference path="model/Commons.ts" />
/// <reference path="util/Resource.ts" />
/// <reference path="util/Commons.ts" />

enum GridTypeEnum {
    game, mapper, tilePicker
};

/**
 * Module for managing canvas sizing
 */
class AbstractGrid {

    protected canvas: HTMLCanvasElement;
    protected baseH: number;
    protected baseW: number;
    protected rows: number;
    protected columns: number;
    cellH: number;
    cellW: number;
    protected halfRows: number;
    protected halfColumns: number;
    private currentTranslation: IPoint;
    protected gridType: GridTypeEnum;
    scaleX: number;
    scaleY: number;

    constructor(
        canvas: HTMLCanvasElement,
        onCompleted: { (grid: AbstractGrid): void },
        gridType: GridTypeEnum) {
        this.canvas = canvas;
        this.currentTranslation = { x: 0, y: 0 };
        this.gridType = gridType;

        //Make sure properties file is available, then start init process
        (function(grid: AbstractGrid) {
            Resource.loadProperties(function(props: Map<string, number>) {
                grid.deferredInit(props);
                grid.updateSizingDerivates();
                grid.refresh();
                onCompleted(grid);
            });
        })(this);
    }

    deferredInit(props: Map<string, number>) {
        this.cellH = props.get("cellHeight");
        this.cellW = props.get("cellWidth");
        this.rows = props.get(GridTypeEnum[this.gridType] + "Rows");
        this.columns = props.get(GridTypeEnum[this.gridType] + "Columns");
    }

    updateSizingDerivates() {
        this.baseH = this.cellH * this.rows;
        this.baseW = this.cellW * this.columns;
        this.halfRows = Math.floor(this.rows / 2);
        this.halfColumns = Math.floor(this.columns / 2);
    }

    refresh() {
        this.canvas.width = this.baseW * this.scaleX;
        this.canvas.height = this.baseH * this.scaleY;
    }

    clear(context: CanvasRenderingContext2D) {
        context.clearRect(
            this.currentTranslation.x,
            this.currentTranslation.y,
            this.baseW + this.currentTranslation.x,
            this.baseH + this.currentTranslation.y);
    }

    /**
     * Convert a position in the webpage to a position on the grid (cell coordinates)
     * @param position : position in pixels (absolute coordinates in the page)
     */
    mapPositionToGrid(position: IPoint): IExtendedCell {
        let rect = this.canvas.getBoundingClientRect(); // TODO puo' essere recuperato una volta sola
        let x = Math.floor((position.x - rect.left) / this.scaleX + this.currentTranslation.x);
        let y = Math.floor((position.y - rect.top) / this.scaleY + this.currentTranslation.y);
        //TODO optimize        
        let i = Math.floor((position.x - rect.left) / (this.cellW * this.scaleX) + this.currentTranslation.x / this.cellW); //TODO precalcola le cell scalate
        let j = Math.floor((position.y - rect.top) / (this.cellH * this.scaleY) + this.currentTranslation.y / this.cellH);
        return {
            i: i,
            j: j,
            x: x,
            y: y
        };
    }

    /**
     * Convert a position on the grid to a position on the canvas (relative coordinates in pixels)
     * @param position : position in cell coordinates
     */
    mapCellToCanvas(position: ICell): IPoint {
        return {
            x: position.i * this.cellW,
            y: position.j * this.cellH
        };
    }

    /**
     * Convert a position on the map to a map cell
     * @param position : position in pixels
     */
    mapCanvasToCell(position: IPoint): ICell {
        return {
            i: Math.floor(position.x / this.cellW),
            j: Math.floor(position.y / this.cellH)
        };
    }

    /**
     * Translate the context, using the new focus coordinates (as pixels)
     */
    changeTranslation(focusX: number, focusY: number, maxColumns: number, maxRows: number): IPoint {
        // Compute new left-top point
        let leftTopX = focusX - (this.halfColumns * this.cellW);
        if (leftTopX < 0) {
            leftTopX = 0;
        } else {
            let maxTranslationX = (maxColumns - this.columns) * this.cellW;
            if (leftTopX > maxTranslationX) {
                leftTopX = maxTranslationX;
            }
        }
        let leftTopY = focusY - (this.halfRows * this.cellH);
        if (leftTopY < 0) {
            leftTopY = 0;
        } else {
            let maxTranslationY = (maxRows - this.rows) * this.cellH;
            if (leftTopY > maxTranslationY) {
                leftTopY = maxTranslationY;
            }
        }
        // Translate the context, considering the currently applied translation
        return this.applyTranslate(leftTopX, leftTopY);
    }
    
    /**
     * When size changes (canvas resized and/or canvas scale changed??),
     * it is necessary to reapply the translation. Not sure why...
     */
    reappyTranslation() {
        let leftTopX = this.currentTranslation.x;
        let leftTopY = this.currentTranslation.y;
        this.currentTranslation.x = 0;
        this.currentTranslation.y = 0;    
        this.applyTranslate(leftTopX, leftTopY);
    }
    
    private applyTranslate(leftTopX: number, leftTopY: number) {
        let context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        // Apply relative translation (
        context.translate(this.currentTranslation.x - leftTopX, this.currentTranslation.y - leftTopY);
        // Save new translation
        this.currentTranslation = {
            x: leftTopX,
            y: leftTopY
        };
        return this.currentTranslation;
    }

    getCurrentTranslation() {
        return this.currentTranslation;
    }

    resetTranslation() {
        let context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        context.translate(this.currentTranslation.x, this.currentTranslation.y);
        this.currentTranslation = { x: 0, y: 0 };
    }

    /**
     * Return min and max visible columns
     */
    getBoundariesX(focusX: number, columns: number): IRange {
        let focusColumn = Math.floor(focusX / this.cellW);
        let min = focusColumn - this.halfColumns - 1;
        let max = focusColumn + this.halfColumns + 1;
        return this.checkBoundariesLimit(min, max, columns);
    }

    /**
     * Return min and max visible rows
     */
    getBoundariesY(focusY: number, rows: number): IRange {
        let focusRow = Math.floor(focusY / this.cellH);
        let min = focusRow - this.halfRows - 1;
        let max = focusRow + this.halfRows + 1;
        return this.checkBoundariesLimit(min, max, rows);
    }

    /**
     * Adjust the values of min and max visible cells checking the grid limits,
     * so that there is no scrolling near the border
     */
    private checkBoundariesLimit(min: number, max: number, maxLimit: number): IRange {
        if (min < 0) {
            max -= min;
            min = 0;
        }
        if (max >= maxLimit) {
            min -= (max - maxLimit + 1);
            max = maxLimit - 1;
        }
        return {
            min: min,
            max: max
        };
    }
}