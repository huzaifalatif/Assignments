var fruitsArray = ['apple', 'banana', 'orange'];
var targetFruit1 = 'banana';
var targetFruit2 = 'grape';
// Test whether an item is in an array
var isTargetFruit1InArray = fruitsArray.indexOf(targetFruit1) !== -1;
console.log("Is '".concat(targetFruit1, "' in the fruitsArray? I predict ").concat(isTargetFruit1InArray, "."));
// Test whether an item is not in an array
var isTargetFruit2NotInArray = fruitsArray.indexOf(targetFruit2) === -1;
console.log("Is '".concat(targetFruit2, "' not in the fruitsArray? I predict ").concat(isTargetFruit2NotInArray, "."));
var string_var1 = 'apple';
var string_var2 = 'orange';
var number1 = 10;
var number2 = 20;
var fruitsArray = ['apple', 'banana', 'orange'];
// Tests for equality and inequality with strings
console.log("Are string1 and string2 equal? I predict False.");
console.log(string_var1 == string_var2); // False
// Test using the lowercase function
console.log("Are string1 and string2 equal after converting to lowercase? I predict True.");
console.log(string_var1.toLowerCase() == string_var2.toLowerCase()); // True
// Numerical tests
console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2); // True
console.log("Is number1 less than or equal to number2? I predict True.");
console.log(number1 <= number2); // True
// Tests using "and" and "or" operators
console.log("Is number1 greater than 5 and number2 less than 30? I predict True.");
console.log(number1 > 5 && number2 < 30); // True
console.log("Is number1 greater than 15 or number2 less than 15? I predict True.");
console.log(number1 > 15 || number2 < 15); // True
// Test whether an item is in an array
console.log("Is 'banana' in the fruitsArray? I predict True.");
console.log(fruitsArray.includes('banana')); // True
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruitsArray? I predict True.");
console.log(!fruitsArray.includes('grape')); // True
