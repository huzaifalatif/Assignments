let alien_color: string;

alien_color = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
} else {
    // This block won't be executed in the first version
    console.log("No points earned.");
}

// Second version: Alien color is not green (fails the if test)
alien_color = 'red';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
} else {
    // This block will be executed in the second version
    console.log("No points earned.");
}
