var Constant;
(function (Constant) {
    Constant.DOUBLE_PI = Math.PI * 2;
    var Color = (function () {
        function Color() {
        }
        Color.YELLOW = "yellow";
        Color.RED = "red";
        Color.WHITE = "white";
        return Color;
    })();
    Constant.Color = Color;
})(Constant || (Constant = {}));
