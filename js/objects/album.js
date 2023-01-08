//  ******************** Depeche Mode ********************

const album = {
  band: 'Depeche Mode',
  title: 'Violator',
  year: 1990,
  genre: 'electronic',
  rating: 8,
  track: [
    'World in My Eyes',
    'Sweetest Perfection',
    'Personal Jesus',
    'Halo',
    'Waiting for the Night',
    'Enjoy the Silence',
    'Policy of Truth',
    'Blue Dress',
    'Clean',
  ],

  normalize(data) {
    const lowerCase = ['and', 'in', 'of', 'the'];
    if (typeof data === 'string') {
      const stringToArray = data.trim().toLowerCase().split(/\s+/);

      for (let i = 0; i < stringToArray.length; i += 1) {
        const upper =
          stringToArray[i].at(0).toUpperCase() + stringToArray[i].substring(1);
        stringToArray.splice(i, 1, upper);

        for (const word of lowerCase) {
          if (stringToArray[i].toLocaleLowerCase() === word) {
            const lower = stringToArray[i].toLocaleLowerCase();
            stringToArray.splice(i, 1, lower);
          }
        }
      }
      const normalString = stringToArray.join(' ');
      console.log(normalString);
    }
  },
  trackList() {
    for (const track of this.track) {
      console.log(
        `${String(this.track.indexOf(track) + 1).padStart(2, 0)} - ${track}`
      );
    }
  },
  albumInfo() {
    const { band, title, year, genre, rating, track } = album;
    console.log('-------------------');
    console.log('Band:', band);
    console.log('Title: ', title);
    console.log('Genre: ', genre);
    console.log('Rating: ', rating);
    console.log('Tracks:', track.length);
  },
  addTrack(trackNumber, tracktitle) {
    this.track.splice(trackNumber, 0, tracktitle);
  },
  changeRating(newRating) {
    this.rating = newRating;
  },
};
// -----------------------------------------------------------------------------

// album.addTrack(6, 'Interlude #2 Crucified');
// album.addTrack(9, 'Interlude #3');
// album.trackList();
// album.changeRating(10);
// album.albumInfo();

// console.table(Object.entries(album));

album.normalize('songs of  faith And  devotion');
