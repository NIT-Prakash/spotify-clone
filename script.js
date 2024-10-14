// Song list
const songs = [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
    'song4.mp3',
    'song5.mp3',
    'song6.mp3'
];

let songIndex = 0;

// Get elements
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const albums = document.querySelectorAll('.album');

// Create audio element
const audio = new Audio(`audio/${songs[songIndex]}`);

// Play/Pause Button functionality
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = 'Play';
    } else {
        audio.play();
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

// Previous Button functionality
prevButton.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audio.src = `audio/${songs[songIndex]}`;
    if (isPlaying) {
        audio.play();
    }
});

// Next Button functionality
nextButton.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audio.src = `audio/${songs[songIndex]}`;
    if (isPlaying) {
        audio.play();
    }
});

// Play song when an album is clicked
albums.forEach((album) => {
    album.addEventListener('click', () => {
        songIndex = album.getAttribute('data-index');
        audio.src = `audio/${songs[songIndex]}`;
        audio.play();
        isPlaying = true;
        playButton.textContent = 'Pause';
    });
});
