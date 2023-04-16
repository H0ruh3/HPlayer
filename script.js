const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById("current-progress");

const asYouWere = {
    songName: "As You Were",
    artist: "TrackTribe",
    file: 'as_you_were'
};

const boomBapFlick = {
    songName: "Boom Bap Flick",
    artist: "Quincas Moreira",
    file: 'boom_bap_flick'
};

const cantHide = {
    songName: "Can't Hide",
    artist: "Otis Mcdonald",
    file: "cant_hide"
};

const playlist = [asYouWere, boomBapFlick, cantHide];
let index = 0

let isPlaying = false;

function playSong(){
    play.querySelector(".bi").classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector(".bi").classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
    song.pause();
    isPlaying = false;
}

function playPause(){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
};

function loadSong(){
    cover.src = `./images/${playlist[index].file}.webp`;
    song.src = `./songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = playlist.length - 1
    }
    else{
        index -= 1
    }
    loadSong();
    playSong();
}

function nextSong(){
    if(index === playlist.length - 1){
        index = 0
    }
    else{
        index += 1
    }
    loadSong();
    playSong();
}

function updateProgressBar(){
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty("--progress", `${barWidth}%`);
}

loadSong()

play.addEventListener("click", playPause);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
song.addEventListener("timeupdate", updateProgressBar);