function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        const greatMagician = `the Great ${magician}`;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original array of magician names
const magiciansArray: string[] = ["Babar", "Hamza", "Ahmed"];

// Call make_great with a copy of the original array
const greatMagiciansArray: string[] = make_great([...magiciansArray]);

// Show the original magicians array
console.log("Original Magicians:");
show_magicians(magiciansArray);

// Show the array with 'the Great' added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);
