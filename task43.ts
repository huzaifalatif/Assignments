interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    optionalFeature?: string;
}

function createCar(manufacturer: string, model: string, options: { color?: string, optionalFeature?: string } = {}): Car {
    return {
        manufacturer,
        model,
        ...options
    };
}

// Call the function with required and optional information
const carInfo = createCar("Toyota", "Corolla", { color: "Blue", optionalFeature: "Sunroof" });

// Print the Object to check the information
console.log(carInfo);
