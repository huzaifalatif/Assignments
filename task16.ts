let placesToVisit = ["London", "Paris", "New York", "Barcelona", "Sydney"];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
let sortedPlaces = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedPlaces);

// Show that the array is still in its original order
console.log("Original Order (still):", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
let reverseSortedPlaces = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);

// Show that the array is still in its original order
console.log("Original Order (still):", placesToVisit);

// Reverse the order of the list and print to show the change
let reversedPlaces = [...placesToVisit].reverse();
console.log("Reversed Order:", reversedPlaces);

// Reverse the order of the list again and print to show it's back to its original order
let originalOrderAgain = [...reversedPlaces].reverse();
console.log("Original Order (back again):", originalOrderAgain);

// Sort the array in alphabetical order and print to show the change
let sortedPlacesAgain = [...placesToVisit].sort();
console.log("Sorted Alphabetical Order:", sortedPlacesAgain);

// Sort the array in reverse alphabetical order and print to show the change
let reverseSortedPlacesAgain = [...placesToVisit].sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", reverseSortedPlacesAgain);
