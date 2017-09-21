interface IPoint {
    x: number;
    y: number;
};

interface ICell {
    i: number;
    j: number;
};

interface IExtendedCell extends IPoint, ICell {
};

const enum DirectionEnum {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    NONE
};

class BlockDirection {
    static NONE: number = 0;
    static UP: number = Math.pow(2, 0);
    static DOWN: number = Math.pow(2, 1);
    static LEFT: number = Math.pow(2, 2);
    static RIGHT: number = Math.pow(2, 3);
    static ALL: number = BlockDirection.UP + BlockDirection.DOWN + BlockDirection.LEFT + BlockDirection.RIGHT;
};