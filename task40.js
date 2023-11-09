function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        var greatMagician = "the Great ".concat(magician);
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
// Start with an array of magician’s names
var magiciansArray = ['Babar', 'Hamza', 'Javed', 'Ahmed'];
// Use the make_great() function to modify the array
var greatMagiciansArray = make_great(magiciansArray);
// Display the modified array
console.log("Original Magicians:");
show_magicians(magiciansArray);
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);
