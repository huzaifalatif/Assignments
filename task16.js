var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["London", "Paris", "New York", "Barcelona", "Sydney"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
var sortedPlaces = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedPlaces);
// Show that the array is still in its original order
console.log("Original Order (still):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
var reverseSortedPlaces = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
// Show that the array is still in its original order
console.log("Original Order (still):", placesToVisit);
// Reverse the order of the list and print to show the change
var reversedPlaces = __spreadArray([], placesToVisit, true).reverse();
console.log("Reversed Order:", reversedPlaces);
// Reverse the order of the list again and print to show it's back to its original order
var originalOrderAgain = __spreadArray([], reversedPlaces, true).reverse();
console.log("Original Order (back again):", originalOrderAgain);
// Sort the array in alphabetical order and print to show the change
var sortedPlacesAgain = __spreadArray([], placesToVisit, true).sort();
console.log("Sorted Alphabetical Order:", sortedPlacesAgain);
// Sort the array in reverse alphabetical order and print to show the change
var reverseSortedPlacesAgain = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", reverseSortedPlacesAgain);
