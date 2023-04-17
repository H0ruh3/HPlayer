const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

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

const originalPlaylist = [asYouWere, boomBapFlick, cantHide];
let sortedPlaylist = [...originalPlaylist];

let index = 0;
let isPlaying = false;
let isShuffled = false;
let repeatOn = false;

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
    cover.src = `./images/${sortedPlaylist[index].file}.webp`;
    song.src = `./songs/${sortedPlaylist[index].file}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    }
    else{
        index -= 1;
    }
    loadSong();
    playSong();
}

function nextSong(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }
    loadSong();
    playSong();
}

function updateProgress(){
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty("--progress", `${barWidth}%`);
    updateSongTime();
}

function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width)*song.duration;
    song.currentTime = jumpToTime;
}

function shufflePlaylist(playlist){
    const size = playlist.length;
    let currentIndex = size - 1;
    while(currentIndex > 0){
        let randomIndex = Math.floor(Math.random() * size);
        let aux = playlist[currentIndex];
        playlist[currentIndex] = playlist[randomIndex];
        playlist[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function shuffleClicked(){
    if (isShuffled === false){
        isShuffled = true;
        shufflePlaylist(sortedPlaylist);
        shuffle.classList.add("button-active");
    }
    else {
        isShuffled = false;
        sortedPlaylist = [...originalPlaylist];
        shuffle.classList.remove("button-active");
    }
}

function repeatClicked(){
    if (repeatOn === false){
        repeatOn = true;
        repeat.classList.add("button-active");
    }
    else {
        repeatOn = false;
        repeat.classList.remove("button-active");
    }
}

function nextOrRepeat(){
    if (repeatOn === false){
        nextSong();
    }
    else {
        playSong();
    }
}

function toHHMMSS(timeSec){
    hh = Math.floor(timeSec / 3600).toString().padStart(2, "0");
    mm = Math.floor((timeSec - hh * 3600) / 60).toString().padStart(2, "0");
    ss = Math.floor(timeSec - hh * 3600 - mm * 60).toString().padStart(2, "0");
    if(hh === "00"){
        return `${mm}:${ss}`;
    }
    else{
        return`${hh}:${mm}:${ss}`;
    }
}

function updateSongTime(){
    songTime.innerText = toHHMMSS(song.currentTime);
}

function updateTotalTime(){
    totalTime.innerText = toHHMMSS(song.duration);
}

loadSong();

play.addEventListener("click", playPause);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
song.addEventListener("timeupdate", updateProgress);
song.addEventListener("ended", nextOrRepeat);
song.addEventListener("loadedmetadata", updateTotalTime);
progressContainer.addEventListener("click", jumpTo);
shuffle.addEventListener("click", shuffleClicked);
repeat.addEventListener("click", repeatClicked);