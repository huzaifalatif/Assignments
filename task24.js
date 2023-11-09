var alien_color;
// First version: Alien color is green (runs the if block)
alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    // This block won't be executed in the first version
    console.log("Player just earned 10 points for shooting the alien.");
}
// Second version: Alien color is not green (runs the else block)
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    // This block will be executed in the second version
    console.log("Player just earned 10 points for shooting the alien.");
}
