let fruits = ["Apple", "Banana", "Orange"];

// Intentionally access an index that is out of bounds
console.log(fruits[2]);

// Correct the error by checking the length before accessing the index
if (fruits.length > 3) {
    console.log(fruits[3]);
}
else {
    console.log("Index out of bounds. Please correct it.");
}
