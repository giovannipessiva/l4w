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
    scale: number;

    constructor(
        cnvs: HTMLCanvasElement,
        onCompleted: { (grid: AbstractGrid): void },
        gridType: GridTypeEnum) {
        this.canvas = cnvs;
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
        this.canvas.height = this.baseH * this.scale;
        this.canvas.width = this.baseW * this.scale;
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
    mapPositionToGrid(position: IPoint): IPoint {
        var rect = this.canvas.getBoundingClientRect(); // TODO puo' essere recuperato una volta sola
        var i = Math.floor((position.x - rect.left) / (this.cellW * this.scale) + this.currentTranslation.x / this.cellW); //TODO precalcola le cell scalate
        var j = Math.floor((position.y - rect.top) / (this.cellH * this.scale) + this.currentTranslation.y / this.cellH);
        return { x: i, y: j };
    }
    
    /**
     * Convert a position on the grid to a position on the canvas (relative coordinates in pixels)
     * @param position : position in cell coordinates
     */
    mapCellToCanvas(position: IPoint): IPoint {
        var x = (position.x + 0.5) * this.cellW;
        var y = (position.y + 0.5) * this.cellH;
        return { x: x, y: y };
    }

    /**
     * Returns the translation (as cell numbers) applied to the canvas
     */
    getTranslation(focusX: number, focusY: number, maxColumns: number, maxRows: number): IPoint {
        var leftTopX = focusX - (this.halfColumns * this.cellW);
        if (leftTopX < 0) {
            leftTopX = 0;
        } else {
            var maxTranslationX = (maxColumns - this.columns) * this.cellW;
            if (leftTopX > maxTranslationX) {
                leftTopX = maxTranslationX;
            }
        }
        var leftTopY = focusY - (this.halfRows * this.cellH);
        if (leftTopY < 0) {
            leftTopY = 0;
        } else {
            var maxTranslationY = (maxRows - this.rows) * this.cellH;
            if (leftTopY > maxTranslationY) {
                leftTopY = maxTranslationY;
            }
        }
        var newTranslation = { x: leftTopX, y: leftTopY };
        leftTopX = this.currentTranslation.x - leftTopX;
        leftTopY = this.currentTranslation.y - leftTopY;
        this.currentTranslation = newTranslation;
        return { x: leftTopX, y: leftTopY };
    }

    /**
     * Return min and max visible columns
     */
    getBoundariesX(focusX: number, columns: number): IRange {
        var focusColumn = Math.round(focusX / this.cellW);
        var min = focusColumn - this.halfColumns;
        var max = focusColumn + this.halfColumns;
        return this.checkBoundariesLimit(min, max, columns);
    }

    /**
     * Return min and max visible rows
     */
    getBoundariesY(focusY: number, rows: number): IRange {
        var focusRow = Math.round(focusY / this.cellH);
        var min = focusRow - this.halfRows;
        var max = focusRow + this.halfRows;
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

    getOffsetX(focusX: number) {
        return focusX % this.cellW;
    }
    getOffsetY(focusY: number) {
        return focusY % this.cellH;
    }
}