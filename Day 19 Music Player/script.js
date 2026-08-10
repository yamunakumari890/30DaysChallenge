const songs = [
  {
    title : "Khoya Khoya",
    artist : "Mohit Chauhan PRIYA PANCHAL",
    src : "music/Khoya_Khoya.mp3",
    image: "image/images song1.jpg"
  },
   {
        title: "Teri ore",
        artist: "Rahat Fateh Ali Khan and Shreya Ghoshal",
        src: "music/Teri Ore.mp3",
        image: "image/images song2.jpg"
    },
    {
        title: "Yaari",
        artist: "Nikk ft Avneet",
        src: "music/yarri.mp3",
        image: "image/images song3.jpg"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const albumArt = document.getElementById("albumArt");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSong() {
    const song = songs[currentSong];

    songTitle.innerText = song.title;
    artist.innerText = song.artist;

    audio.src = song.src;

    albumArt.src = song.image;

    progress.value = 0;
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸️";
    } else {
        audio.pause();
        playBtn.innerText = "▶️";
    }
}

function nextSong() {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong();
    audio.play();

    playBtn.innerText = "⏸️";
}

function previousSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong();
    audio.play();

    playBtn.innerText = "⏸️";
}

audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
        const progressValue =
            (audio.currentTime / audio.duration) * 100;

        progress.value = progressValue;
    }
});

progress.addEventListener("input", function () {
    if (audio.duration) {
        audio.currentTime =
            (progress.value / 100) * audio.duration;
    }
});

volume.addEventListener("input", function () {
    audio.volume = volume.value;
});

audio.addEventListener("ended", function () {
    nextSong();
});

loadSong();
