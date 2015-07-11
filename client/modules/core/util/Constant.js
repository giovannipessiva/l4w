var Constant;
(function (Constant) {
    Constant.DOUBLE_PI = Math.PI * 2;
    var Color = (function () {
        function Color() {
        }
        Color.YELLOW = "yellow";
        Color.RED = "red";
        Color.WHITE = "white";
        Color.GREY = "grey";
        Color.BLACK = "black";
        return Color;
    })();
    Constant.Color = Color;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Constant.Direction || (Constant.Direction = {}));
    var Direction = Constant.Direction;
})(Constant || (Constant = {}));
