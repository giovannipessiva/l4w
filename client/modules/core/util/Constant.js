var Constant;
(function (Constant) {
    Constant.DOUBLE_PI = Math.PI * 2;
    var Color = (function () {
        function Color() {
        }
        Color.yellow = "yellow";
        return Color;
    })();
    Constant.Color = Color;
})(Constant || (Constant = {}));
