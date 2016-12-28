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

class BlockDirection {
    static UP: number = Math.pow(2, 0);
    static DOWN: number = Math.pow(2, 1);
    static LEFT: number = Math.pow(2, 2);
    static RIGHT: number = Math.pow(2, 3);
};