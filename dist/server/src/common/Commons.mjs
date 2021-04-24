;
;
;
;
;
;
;
;
export class BlockDirection {
}
BlockDirection.NONE = 0;
BlockDirection.UP = Math.pow(2, 0);
BlockDirection.DOWN = Math.pow(2, 1);
BlockDirection.LEFT = Math.pow(2, 2);
BlockDirection.RIGHT = Math.pow(2, 3);
BlockDirection.ALL = BlockDirection.UP + BlockDirection.DOWN + BlockDirection.LEFT + BlockDirection.RIGHT;
;
export class CardinalDirection {
}
CardinalDirection.NONE = 0;
CardinalDirection.N = Math.pow(2, 0);
CardinalDirection.S = Math.pow(2, 1);
CardinalDirection.W = Math.pow(2, 2);
CardinalDirection.E = Math.pow(2, 3);
CardinalDirection.NE = Math.pow(2, 4);
CardinalDirection.SE = Math.pow(2, 5);
CardinalDirection.SW = Math.pow(2, 6);
CardinalDirection.NW = Math.pow(2, 7);
CardinalDirection.ALL = Math.pow(2, 8) - 1;
;
export let CardinalDirections = [CardinalDirection.N, CardinalDirection.NE, CardinalDirection.E, CardinalDirection.SE, CardinalDirection.S, CardinalDirection.SW, CardinalDirection.W, CardinalDirection.NW];
;
;
;
export var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["IT"] = "it";
    LanguageEnum["EN"] = "en";
})(LanguageEnum || (LanguageEnum = {}));
export var PathfinderEnum;
(function (PathfinderEnum) {
    PathfinderEnum[PathfinderEnum["BASIC"] = 0] = "BASIC";
    PathfinderEnum[PathfinderEnum["D_STAR_LITE"] = 1] = "D_STAR_LITE";
})(PathfinderEnum || (PathfinderEnum = {}));
;
;
;
;
