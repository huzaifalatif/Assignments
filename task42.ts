function orderSandwich(...toppings: string[]): void {
    console.log("Sandwich with:");

    if (toppings.length === 0) {
        console.log("   - No toppings");
    } else {
        for (const topping of toppings) {
            console.log(`   - ${topping}`);
        }
    }

    console.log("Enjoy your sandwich!\n");
}

// Calling the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich(); // No toppings
