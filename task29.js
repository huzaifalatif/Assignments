var usernames = []; // Empty array
// Add some usernames to the array
usernames.push('admin', 'user1', 'user2', 'user3', 'user4');
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print a greeting to each user
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Remove all usernames from the array
usernames = [];
