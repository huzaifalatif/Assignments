let guestList = ["Mudassir", "Taimoor", "Sohail", "Ali", "Hamza", "Sabih"];

// Print an invitation message to each person
console.log(`Dear ${guestList[0]}, you are invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner.`);
console.log(`Dear ${guestList[3]}, you are invited to dinner.`);
console.log(`Dear ${guestList[4]}, you are invited to dinner.`);
console.log(`Dear ${guestList[5]}, you are invited to dinner.`);

// Informing about the new dinner table
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Removing guests one at a time until only two names remain
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Printing a message to the two people still on the list
console.log(`Dear ${guestList[0]}, you are still invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are still invited to dinner.`);

// Remove the last two names to have an empty list
guestList.pop();
guestList.pop();

// Print the empty list
console.log("Empty guest list:", guestList);
