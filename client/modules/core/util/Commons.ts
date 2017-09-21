/// <reference path="../model/Commons.ts" />

/**
 * Module for common type structures and function interfaces
 */

interface IRange {
    min: number;
    max: number;
};

interface IRectangle {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
};

class RenderConfiguration {
    showGrid: boolean = false;
    showEditorGrid: boolean = false;
    showFPS: boolean = false;
    showCellNumbers: boolean = false;
    showFocus: boolean = false;
    enableSelection: boolean = false;
    showBlocks: boolean = false;
    enableAntialiasing: boolean = true;

    fps: number = 0;
    selectCellStart: ICell;
    selectCellEnd: ICell;
}

interface IPropertiesCallback {
    (props: Map<string, number>): void;
};

interface IProgressCallback {
    (e: ProgressEvent): void;
};

interface IBooleanCallback {
    (result: boolean): void;
};