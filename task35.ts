function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
}

// Calling the function with default values (Large size, default message)
make_shirt();

// Call the function with medium size and default message
make_shirt('Medium');

// Call the function with a custom size and message
make_shirt('Small', 'Custom message');
