function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size));
    console.log("Message: ".concat(message));
}
// Calling the function with default values (Large size, default message)
make_shirt();
// Call the function with medium size and default message
make_shirt('Medium');
// Call the function with a custom size and message
make_shirt('Small', 'Custom message');
