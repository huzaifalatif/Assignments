
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        const greatMagician = `the Great ${magician}`;
        greatMagicians.push(greatMagician);
    }

    return greatMagicians;
}

// Start with an array of magician’s names
const magiciansArray: string[] = ['Babar', 'Hamza', 'Javed', 'Ahmed'];

// Use the make_great() function to modify the array
const greatMagiciansArray = make_great(magiciansArray);

// Display the modified array
console.log("Original Magicians:");
show_magicians(magiciansArray);

console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);
