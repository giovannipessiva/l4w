export interface IPoint {
    x: number;
    y: number;
};

export interface ICell {
    i: number;
    j: number;
};

export interface ISize {
    w: number;
    h: number;
};

/**
 * Represent a point, and contains both the ICell and the IPoint representation
 */
export interface IExtendedCell extends IPoint, ICell {
};

/**
 * Represent a rectangular area as the top-left vertex and its width and height
 */
export interface IRectangle extends IPoint, ISize {
};

export const enum DirectionEnum {
    UP,
    RIGHT,
    DOWN,
    LEFT,
    NONE
};

export const enum SelectionAreaEnum {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    CENTER
};

export class BlockDirection {
    static NONE: number = 0;
    static UP: number = Math.pow(2, 0);
    static DOWN: number = Math.pow(2, 1);
    static LEFT: number = Math.pow(2, 2);
    static RIGHT: number = Math.pow(2, 3);
    static ALL: number = BlockDirection.UP + BlockDirection.DOWN + BlockDirection.LEFT + BlockDirection.RIGHT;
};

export const enum ActionTriggerEnum {
    CLICK,
    TOUCH,
    OVER,
    AUTO
};

export const enum RotationEnum {
    OFF,
    CLOCKWISE,
    COUNTERCLOCKWISE
};

export const enum ScaleEnum {
    VERY_LOW,
    LOW,
    MEDIUM_LOW,
    MEDIUM,
    MEDIUM_HIGH,
    HIGH,
    VERY_HIGH
};

export enum LanguageEnum {
    IT = "it",
    EN = "en"    
}

export interface IEmptyCallback {
    (): void;
};

export interface IResponseCallback {
    (response?: string): void;
};

export interface IBooleanCallback {
    (success: boolean): void;
};
