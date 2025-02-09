const aoudioElemnt = document.createElement("audio");
ReportBody.appendChild(aoudioElemnt);

const duration = document.querySelector("#duration");
const current_time = document.querySelector("#current-time");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title")
const cover = document.querySelector("#cover");

const nextBtn = document.querySelector("#next");
const playbtn = document.querySelector("#play");
const pevBtn  = Document.querySelector("#prev");
const speed = document.querySelector("#speed");
const volume = document.querySelector("#volume");
const progreess_bar =document.querySelector(".progreess-bar");
const progress = document.querySelector(".progress");

// songs
const songs =[
    {title:"song 1", artist:"T. Schürger", cover:"https://placehold.co/250/36122a/ffffff" , src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    {title:"song 8", artist:"T. Schürger", cover:"https://placehold.co/250/63220a/ffffff", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"},
    {title:"local song", artist:"Mlayaqano", cover:"https://placehold.co/250/b3b019/ffffff", src:"./localSong.mp3"}
] 

let songIndex = 0;
let isPlay = false;
let SongSpeed = 1;

function LoadSong(song){
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song
}

