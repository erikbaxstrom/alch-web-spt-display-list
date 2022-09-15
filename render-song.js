export function renderSong(song) {
    // console.log(song);
    const li = document.createElement('li');
    li.textContent = song;
    li.classList.add('song-item');
    return li;
}
