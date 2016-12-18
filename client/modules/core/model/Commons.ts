interface IPoint {
    x: number;
    y: number;
};

interface ICell {
    i: number;
    j: number;
};

const enum DirectionEnum {
    UP,
    DOWN,
    LEFT,
    RIGHT
};