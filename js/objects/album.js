//  ******************** Depeche Mode ********************

const album = {
  band: 'Depeche Mode',
  name: 'Violator',
  year: 1990,
  trackCount: 9,
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
  rating: 8,
  changeRating(newRating) {
    this.rating = newRating;
  },
  trackTotal() {
    console.log('total tracks: ', this.track.length);
  },
  addTrack(trackNumber, trackName) {
    this.track.splice(trackNumber, 0, trackName);
  },
  trackList() {
    for (const track of this.track) {
      console.log(
        `${String(this.track.indexOf(track) + 1).padStart(2, 0)} - ${track}`
      );
    }
  },
};
// -----------------------------------------------------------------------------

// console.log('album: ', album);
// album.addTrack(6, 'Interlude #2 Crucified');
// album.addTrack(9, 'Interlude #3');
// album.trackList();
// album.genre = 'electronic';
// album.changeRating(10);
// console.log('rating: ', album.rating);
// delete album.trackCount;
// console.log('trackCount: ', album.trackCount);
// album.trackTotal();
// // // ******************** //
// console.log('keys: ', Object.keys(album));
// for (const key of Object.keys(album)) {
//   console.log(`${key}: ${album[key]}`);
// }
// // ******************** //
// console.log('track: ', album['track']);
// const propertyKey = 'track';
// console.log('track: ', album[propertyKey]);
// console.table(Object.entries(album));
