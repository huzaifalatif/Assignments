var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    return __assign({ manufacturer: manufacturer, model: model }, options);
}
// Call the function with required and optional information
var carInfo = createCar("Toyota", "Corolla", { color: "Blue", optionalFeature: "Sunroof" });
// Print the Object to check the information
console.log(carInfo);
