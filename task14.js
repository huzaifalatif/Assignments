var guestList = ["Mudassir", "Taimoor", "Sabih"];
// Printing an invitation message to each person
console.log("Dear ".concat(guestList[0], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are invited to dinner."));
// Printing the name of the guest who can't make it
console.log("".concat(guestList[1], " can't make it to dinner."));
// Replacing the name and print a second set of invitation messages
guestList[1] = "Sohail";
console.log("Dear ".concat(guestList[0], ", you are still invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are still invited to dinner."));
// Inform about the guest who can't make it
console.log("Unfortunately, ".concat(guestList[1], " can't make it to dinner."));
// Think of someone else to invite
var newGuest = "Ali";
console.log("We're inviting ".concat(newGuest, " instead."));
// Replacing the name and print a third set of invitation messages
guestList[1] = newGuest;
console.log("Dear ".concat(guestList[0], ", you are still invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are still invited to dinner."));
// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests and print a fourth set of invitation messages
guestList.unshift("Jawad"); // Adding to the beginning
guestList.splice(2, 0, "Hamza"); // Adding to the middle
guestList.push("Haris"); // Adding to the end
console.log("Dear ".concat(guestList[0], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are still invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[3], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[4], ", you are still invited to dinner."));
console.log("Dear ".concat(guestList[5], ", you are invited to dinner."));
