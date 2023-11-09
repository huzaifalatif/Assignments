var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        var greatMagician = "the Great ".concat(magician);
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Original array of magician names
var magiciansArray = ["Babar", "Hamza", "Ahmed"];
// Call make_great with a copy of the original array
var greatMagiciansArray = make_great(__spreadArray([], magiciansArray, true));
// Show the original magicians array
console.log("Original Magicians:");
show_magicians(magiciansArray);
// Show the array with 'the Great' added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);
