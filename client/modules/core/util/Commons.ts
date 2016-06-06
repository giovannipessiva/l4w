/// <reference path="../../interfaces/collections.es6.d.ts" />

/**
 * Module for common type structures and function interfaces
 */

interface IPoint {
    x: number;
    y: number;
};

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

    fps: number = 0;
    selectPointStart: IPoint;
    selectPointEnd: IPoint;
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