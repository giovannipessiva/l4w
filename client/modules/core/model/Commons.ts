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
    RIGHT,
    DOWN,
    LEFT,
    NONE
};

const enum SelectionAreaEnum {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    CENTER
};

class BlockDirection {
    static NONE: number = 0;
    static UP: number = Math.pow(2, 0);
    static DOWN: number = Math.pow(2, 1);
    static LEFT: number = Math.pow(2, 2);
    static RIGHT: number = Math.pow(2, 3);
    static ALL: number = BlockDirection.UP + BlockDirection.DOWN + BlockDirection.LEFT + BlockDirection.RIGHT;
};

const enum ActionTriggerEnum {
    CLICK,
    TOUCH,
    OVER,
    AUTO
};

const enum RotationEnum {
    OFF,
    CLOCKWISE,
    COUNTERCLOCKWISE
};

const enum ScaleEnum {
    VERY_LOW,
    LOW,
    MEDIUM_LOW,
    MEDIUM,
    MEDIUM_HIGH,
    HIGH,
    VERY_HIGH
};

const enum LanguageEnum {
    IT,
    EN    
}
