let guestList = ["Mudassir", "Taimoor", "Sabih"];

// Print an invitation message to each person
console.log(`Dear ${guestList[0]}, you are invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner.`);

// Print the name of the guest who can't make it
console.log(`${guestList[1]} can't make it to dinner.`);

// Replace the name and print a second set of invitation messages
guestList[1] = "Sohail";
console.log(`Dear ${guestList[0]}, you are still invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are still invited to dinner.`);
