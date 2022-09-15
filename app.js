// import functions and grab DOM elements
import { mySongs } from './songs-data.js';
import { renderSong } from './render-song.js';
import { lights } from './lights-data.js';

const songList = document.getElementById('song-list');

// initialize global state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

function displaySongs() {
    for (let song of mySongs) {
        let songEl = renderSong(song);
        songList.append(songEl);
    }
}

displaySongs();
