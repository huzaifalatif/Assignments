function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Make an array of magician’s names
const magiciansArray: string[] = ['Babar', 'Hamza', 'Javed', 'Ahmed'];

// Pass the array to the show_magicians() function
show_magicians(magiciansArray);
