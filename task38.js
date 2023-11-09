function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    // Add tracks to the album Object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album('Artist1', 'AlbumTitle1');
var album2 = make_album('Artist2', 'AlbumTitle2', 12);
var album3 = make_album('Artist3', 'AlbumTitle3', 8);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
