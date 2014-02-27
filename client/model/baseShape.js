define(['model/point'], function(Point) {
    var BaseShape = function BaseShape() {
        this.origin = new Point();
    };

    return BaseShape;
});