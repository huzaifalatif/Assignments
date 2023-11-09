let alien_color: string;

// First version: Alien color is green
alien_color = 'green';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    // This block won't be executed in the first version
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    // This block won't be executed in the first version
    console.log("Player earned 15 points.");
}

// Second version: Alien color is yellow
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    // This block will be executed in the second version
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    // This block won't be executed in the second version
    console.log("Player earned 15 points.");
}

// Third version: Alien color is red
alien_color = 'red';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    // This block won't be executed in the third version
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    // This block will be executed in the third version
    console.log("Player earned 15 points.");
}
