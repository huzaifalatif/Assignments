var current_users = ['user1', 'admin', 'user3', 'user4', 'user2'];
var new_users = ['user3', 'user5', 'user4', 'admin', 'user6'];
var _loop_1 = function (new_username) {
    // Check if the new username has already been used (case-insensitive)
    if (current_users.some(function (username) { return username.toLowerCase() === new_username.toLowerCase(); })) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Great! The username '".concat(new_username, "' is available."));
    }
};
// Loop through the new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
