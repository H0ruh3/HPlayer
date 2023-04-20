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
const like = document.getElementById("like")

const originalPlaylist = JSON.parse(localStorage.getItem("playlist")) ?? [
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
    },
    {
        songName: "Escudo da Fúria",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/escudo_da_furia.webp",
        song: "./songs/escudo_da_furia.mp3",
        liked: false
    },
    {
        songName: "Rap do Naruto: O Sétimo Hokage",
        artist: "7 Minutoz",
        cover: "./images/rap_do_naruto.webp",
        song: "./songs/rap_do_naruto.mp3",
        liked: false
    },
    {
        songName: "Punho Divergente",
        artist: "Takr, 808 Ander",
        cover: "./images/punho_divergente.webp",
        song: "./songs/punho_divergente.mp3",
        liked: false
    },
    {
        songName: "Chamas Azuis",
        artist: "Takr, 808 Ander",
        cover: "./images/chamas_azuis.webp",
        song: "./songs/chamas_azuis.mp3",
        liked: false
    },
    {
        songName: "Tenham Medo Porque Eu Estou Aqui",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/tenham_medo_porque_eu_estou_aqui.webp",
        song: "./songs/tenham_medo_porque_eu_estou_aqui.mp3",
        liked: false
    },
    {
        songName: "O Novo Símbolo Do Medo",
        artist: "Takr, 808 Ander",
        cover: "./images/o_novo_simbolo_do_medo.webp",
        song: "./songs/o_novo_simbolo_do_medo.mp3",
        liked: false
    },
    {
        songName: "Hiraishin",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/hiraishin.webp",
        song: "./songs/hiraishin.mp3",
        liked: false
    },
    {
        songName: "O Mais Brabo Da Britannia",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/o_mais_brabo_da_britannia.webp",
        song: "./songs/o_mais_brabo_da_britannia.mp3",
        liked: false
    },
    {
        songName: "Invencível",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/invencivel.webp",
        song: "./songs/invencivel.mp3",
        liked: false
    },
    {
        songName: "Tsukuyomi",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/tsukuyomi.webp",
        song: "./songs/tsukuyomi.mp3",
        liked: false
    },
    {
        songName: "Kagemane",
        artist: "Takr, 808 Ander",
        cover: "./images/kagemane.webp",
        song: "./songs/kagemane.mp3",
        liked: false
    },
    {
        songName: "Eu Sou o Mal",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/eu_sou_o_mal.webp",
        song: "./songs/eu_sou_o_mal.mp3",
        liked: false
    },
    {
        songName: "Estilo Kakashi",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/estilo_kakashi.webp",
        song: "./songs/estilo_kakashi.mp3",
        liked: false
    },
    {
        songName: "O Escolhido da Mana",
        artist: "Takr, 808 Ander, ZEP",
        cover: "./images/o_escolhido_da_mana.webp",
        song: "./songs/o_escolhido_da_mana.mp3",
        liked: false
    },
    {
        songName: "Kamuizada",
        artist: "Takr",
        cover: "./images/kamuizada.webp",
        song: "./songs/kamuizada.mp3",
        liked: false
    },
    {
        songName: "Olhos de Falcão",
        artist: "Takr, 808 Ander",
        cover: "./images/olhos_de_falcao.webp",
        song: "./songs/olhos_de_falcao.mp3",
        liked: false
    },
    {
        songName: "Corte Dimensional",
        artist: "Takr, 808 Ander",
        cover: "./images/corte_dimensional.webp",
        song: "./songs/corte_dimensional.mp3",
        liked: false
    },
    {
        songName: "Muryo Kusho",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/muryo_kusho.webp",
        song: "./songs/muryo_kusho.mp3",
        liked: false
    },
    {
        songName: "O Demônio da Névoa",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/o_demonio_da_nevoa.webp",
        song: "./songs/o_demonio_da_nevoa.mp3",
        liked: false
    },
    {
        songName: "Renegado",
        artist: "Takr",
        cover: "./images/renegado.webp",
        song: "./songs/renegado.mp3",
        liked: false
    },
    {
        songName: "Modo Gula",
        artist: "Takr, Sidney Scaccio, Felicia Rock",
        cover: "./images/modo_gula.webp",
        song: "./songs/modo_gula.mp3",
        liked: false
    },
    {
        songName: "Maldição do Ódio",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/maldicao_do_odio.webp",
        song: "./songs/maldicao_do_odio.mp3",
        liked: false
    },
    {
        songName: "Olhos do Senhor",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/olhos_do_senhor.webp",
        song: "./songs/olhos_do_senhor.mp3",
        liked: false
    },
    {
        songName: "O Rei do Vale do Fim",
        artist: "Takr, 808 Ander",
        cover: "./images/o_rei_do_vale_do_fim.webp",
        song: "./songs/o_rei_do_vale_do_fim.mp3",
        liked: false
    },
    {
        songName: "Kira",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/kira.webp",
        song: "./songs/kira.mp3",
        liked: false
    },
    {
        songName: "Mente Obscura",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/mente_obscura.webp",
        song: "./songs/mente_obscura.mp3",
        liked: false
    },
    {
        songName: "Chidori",
        artist: "Takr, Sidney Scaccio",
        cover: "./images/chidori.webp",
        song: "./songs/chidori.mp3",
        liked: false
    },
    {
        songName: "Majin",
        artist: "Takr, Sidney Scaccii",
        cover: "./images/majin.webp",
        song: "./songs/majin.mp3",
        liked: false
    },
    {
        songName: "Eu Sou a Lenda",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/eu_sou_a_lenda.webp",
        song: "./songs/eu_sou_a_lenda.mp3",
        liked: false
    },
    {
        songName: "Estrondo",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/estrondo.webp",
        song: "./songs/estrondo.mp3",
        liked: false
    },
    {
        songName: "Yonkou",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/yonkou.webp",
        song: "./songs/yonkou.mp3",
        liked: false
    },
    {
        songName: "Oni Original",
        artist: "Takr, 808 Ander, Zep, Felicia Rock",
        cover: "./images/oni_original.webp",
        song: "./songs/oni_original.mp3",
        liked: false
    },
    {
        songName: "Rap do Killua: Meu Nome Começa com Kill",
        artist: "7 Minutoz",
        cover: "./images/rap_do_killua.webp",
        song: "./songs/rap_do_killua.mp3",
        liked: false
    },
    {
        songName: "Rap Dos Coringas",
        artist: "7 Minutoz",
        cover: "./images/rap_dos_coringas.webp",
        song: "./songs/rap_dos_coringas.mp3",
        liked: false
    },
    {
        songName: "Rap Da Akatsuki",
        artist: "7 Minutoz",
        cover: "./images/rap_da_akatsuki.webp",
        song: "./songs/rap_da_akatsuki.mp3",
        liked: false
    },
    {
        songName: "O Iluminado",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/o_iluminado.webp",
        song: "./songs/o_iluminado.mp3",
        liked: false
    },
    {
        songName: "Face The King",
        artist: "Takr, 808 Ander, Zep",
        cover: "./images/face_the_king.webp",
        song: "./songs/face_the_king.mp3",
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

function likeRender(){
    if(sortedPlaylist[index].liked === true){
        like.querySelector(".bi").classList.replace("bi-heart", "bi-heart-fill");
        like.classList.add("button-active");
    }
    else{
        like.querySelector(".bi").classList.replace("bi-heart-fill", "bi-heart");
        like.classList.remove("button-active");
    }
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
    likeRender()
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

function likeClicked(){
    if(sortedPlaylist[index].liked === false){
        sortedPlaylist[index].liked = true;
    }
    else{
        sortedPlaylist[index].liked = false;
    }
    likeRender();
    localStorage.setItem("playlist", JSON.stringify(originalPlaylist))
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
like.addEventListener("click", likeClicked)