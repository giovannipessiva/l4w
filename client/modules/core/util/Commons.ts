/**
 * Module for common type structures and function interfaces
 */
interface IPoint {
    x: number;
    y: number;
};

interface IJQueryCallback {
   (element: JQuery): void;
};

interface IPropertiesCallback {
   (props: Map<string, string>): void;
};

