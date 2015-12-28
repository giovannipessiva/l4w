/// <reference path="../../interfaces/collections.es6.d.ts" />

/**
 * Module for common type structures and function interfaces
 */
interface IPoint {
    x: number;
    y: number;
};

interface IRectangle {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
};

interface JSTreeNodeData {
    w: number;
    h: number;
    tile: string;
}

interface IJQueryCallback {
    (element: JQuery): void;
};

interface IPropertiesCallback {
    (props: Map<string, number>): void;
};
