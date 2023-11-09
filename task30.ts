let current_users: string[] = ['user1', 'admin', 'user3', 'user4', 'user2'];
let new_users: string[] = ['user3', 'user5', 'user4', 'admin', 'user6'];

// Loop through the new_users list
for (let new_username of new_users) {
    // Check if the new username has already been used (case-insensitive)
    if (current_users.some(username => username.toLowerCase() === new_username.toLowerCase())) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Great! The username '${new_username}' is available.`);
    }
}
