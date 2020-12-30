/**
 * Identify a point on the map, in pixels
 */
export interface IPoint {
    x: number;
    y: number;
};

/**
 * Identify the coordinates of a cell on the map
 */
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

export const enum RelativeDirectionEnum {
    STRAIGHT,
    RIGHT,
    BACK,
    LEFT
};

export const enum SelectionAreaEnum {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    CENTER
};

/**
 * Set of constants that can be summed in a single number
 * to represent which of the four directions are blocked
 */
export class BlockDirection {
    static NONE: number = 0;
    static UP: number = Math.pow(2, 0);
    static DOWN: number = Math.pow(2, 1);
    static LEFT: number = Math.pow(2, 2);
    static RIGHT: number = Math.pow(2, 3);
    static ALL: number = BlockDirection.UP + BlockDirection.DOWN + BlockDirection.LEFT + BlockDirection.RIGHT;
};

/**
 * Set of constants that can be summed in a single number
 * to represent a boolean state for each of the 8 adiacent cells
 */
export class CardinalDirection {
    static NONE: number = 0;
    static N: number = Math.pow(2, 0);
    static S: number = Math.pow(2, 1);
    static W: number = Math.pow(2, 2);
    static E: number = Math.pow(2, 3);
    static NE: number = Math.pow(2, 4);
    static SE: number = Math.pow(2, 5);
    static SW: number = Math.pow(2, 6);
    static NW: number = Math.pow(2, 7);
    static ALL: number = Math.pow(2, 8) - 1;
};
export let CardinalDirections = [ CardinalDirection.N, CardinalDirection.NE, CardinalDirection.E, CardinalDirection.SE, CardinalDirection.S, CardinalDirection.SW, CardinalDirection.W, CardinalDirection.NW ];

/**
 * Types of action required in order to trigger an action
 */
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

export enum PathfinderEnum {
    BASIC,
    D_STAR_LITE
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

export interface ICellCallback {
    (c: ICell): void,
};
