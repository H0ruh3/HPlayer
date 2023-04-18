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

const originalPlaylist = [
    {
        songName: "O Herói do Escudo",
        artist: "Takr, 808 Ander, ZEP, Enygma Rapper",
        cover: "./images/o_heroi_do_escudo.webp",
        song: "./songs/o_heroi_do_escudo.mp3",
        liked: false
    },
    {
        songName: "Um Bilhão",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/um_bilhao.webp",
        song: "./songs/um_bilhao.mp3",
        liked: false
    },
    {
        songName: "Caçador de Heróis",
        artist: "Takr",
        cover: "./images/cacador_de_herois.webp",
        song: "./songs/cacador_de_herois.mp3",
        liked: false
    },
    {
        songName: "Tipo Um Raio",
        artist: "Takr, 808 Ander",
        cover: "./images/tipo_um_raio.webp",
        song: "./songs/tipo_um_raio.mp3",
        liked: false
    },
    {
        songName: "Rap do Zoro: O Maior Espadachim do Mundo",
        artist: "7 Minutoz",
        cover: "./images/rap_do_zoro.webp",
        song: "./songs/rap_do_zoro.mp3",
        liked: false
    },
    {
        songName: "Anti Magia",
        artist: "Takr, 808 Ander, Felicia Rock",
        cover: "./images/anti_magia.webp",
        song: "./songs/anti_magia.mp3",
        liked: false
    },
    {
        songName: "Jan Ken Guu",
        artist: "Takr, 808 Ander",
        cover: "./images/jan_ken_guu.webp",
        song: "./songs/jan_ken_guu.mp3",
        liked: false
    },
    {
        songName: "Nukenin",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/nukenin.webp",
        song: "./songs/nukenin.mp3",
        liked: false
    },
    {
        songName: "Vai Desejar Não Estar Vivo",
        artist: "Takr, 808 Ander",
        cover: "./images/vai_desejar_nao_estar_vivo.webp",
        song: "./songs/vai_desejar_nao_estar_vivo.mp3",
        liked: false
    },
    {
        songName: "Glock Da Akatsuki",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/glock_da_akatsuki.webp",
        song: "./songs/glock_da_akatsuki.mp3",
        liked: false
    },
    {
        songName: "Modo Orgulho",
        artist: "Takr, VG Beats",
        cover: "./images/modo_orgulho.webp",
        song: "./songs/modo_orgulho.mp3",
        liked: false
    },
    {
        songName: "O Rei Das Maldições",
        artist: "Takr, 808 Ander, ZEP, Felicia Rock",
        cover: "./images/o_rei_das_maldicoes.webp",
        song: "./songs/o_rei_das_maldicoes.mp3",
        liked: false
    },
    {
        songName: "Modo Orgulho 2",
        artist: "Takr, Sidney Scaccio, MHRAP, Tauz",
        cover: "./images/modo_orgulho_2.webp",
        song: "./songs/modo_orgulho_2.mp3",
        liked: false
    },
    {
        songName: "Cria Da Folha",
        artist: "Takr, Sidney Scaccio, MHRAP",
        cover: "./images/cria_da_folha.webp",
        song: "./songs/cria_da_folha.mp3",
        liked: false
    },
    {
        songName: "Tipo Um Dragão",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/tipo_um_dragao.webp",
        song: "./songs/tipo_um_dragao.mp3",
        liked: false
    },
    {
        songName: "O Maior Serial Killer",
        artist: "Takr, 808 Ander",
        cover: "./images/o_maior_seial_killer.webp",
        song: "./songs/o_maior_seial_killer.mp3",
        liked: false
    },
    {
        songName: "Ragnarok",
        artist: "Takr, 808 Ander, ZEP",
        cover: "./images/ragnarok.webp",
        song: "./songs/ragnarok.mp3",
        liked: false
    }
];
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
    cover.src = sortedPlaylist[index].cover;
    song.src = sortedPlaylist[index].song;
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