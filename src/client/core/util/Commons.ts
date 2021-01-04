import { DynamicScene } from "../../game/DynamicScene";
import { IEvent } from "../../../common/model/Event";
import { ICell } from "../../../common/Commons"
import { IDialogEdge } from "../../../common/model/Dialog";

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

export interface INumberCallback {
    (n?: number): void;
};

export interface IListCallback {
    (values?: string[]): void;
};

export interface IProgressCallback {
    (this: XMLHttpRequest, e: ProgressEvent): any;
};

export interface ICoordinatesCallback {
    (x: number, y: number): void,
};

export function emptyFz(): void {
};

export interface IEventScriptLauncher {
    (event: IEvent, scene: DynamicScene, hero: IEvent, state: number, parameters?: any): void
};

export interface IDialogScriptLauncher {
    (event: IEvent, edge: IDialogEdge, scene: DynamicScene, hero: IEvent, parameter?: string): Promise<void> | void
};

export let dialogScriptLauncherStub: IDialogScriptLauncher = function (event: IEvent, edge: IDialogEdge, scene: DynamicScene, hero: IEvent, parameter?: string): void {
}
