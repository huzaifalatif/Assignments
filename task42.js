function orderSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("Sandwich with:");
    if (toppings.length === 0) {
        console.log("   - No toppings");
    }
    else {
        for (var _a = 0, toppings_1 = toppings; _a < toppings_1.length; _a++) {
            var topping = toppings_1[_a];
            console.log("   - ".concat(topping));
        }
    }
    console.log("Enjoy your sandwich!\n");
}
// Calling the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich(); // No toppings
