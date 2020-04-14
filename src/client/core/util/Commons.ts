import { ICell } from "../../../common/model/Commons"

/**
 * Module for common type structures and function interfaces
 */

export interface IRange {
    min: number;
    max: number;
};

//TODO omg why config flags together with positions???
export class RenderConfiguration {
    showGrid: boolean = false;
    showEditorGrid: boolean = false;
    showFPS: boolean = false;
    showCellNumbers: boolean = false;
    showFocus: boolean = false;
    enableSelection: boolean = false;
    showBlocks: boolean = false;
    showOnTops: boolean = false;
    enableAntialiasing: boolean = true;

    fps: number = 0;
    selectCellStart?: ICell;
    selectCellEnd?: ICell;
    selectEventCell?: ICell;
}

export interface IPropertiesCallback {
    (props: Map<string, number>): void;
};

export interface IResponseCallback {
    (response?: string): void;
};

export interface INumberCallback {
    (n?: number): void;
};

export interface IListCallback {
    (values?: string[]): void;
};

export interface IProgressCallback {
    (this: XMLHttpRequest, e: ProgressEvent): any;
};

export interface IBooleanCallback {
    (success: boolean): void;
};

export interface ICoordinatesCallback {
    (x: number, y: number): void,
};

export interface ICellCallback {
    (c: ICell): void,
};

export interface IEmptyCallback {
    (): void;
};

export function emptyFz(): void {
};
