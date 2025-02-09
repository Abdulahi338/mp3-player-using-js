const aoudioElemnt = document.createElement("audio");
document.body.appendChild(aoudioElemnt);

const duration = document.querySelector("#duration");
const current_time = document.querySelector("#current-time");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title")
const cover = document.querySelector("#cover");

const nextBtn = document.querySelector("#next");
const playbtn = document.querySelector("#play");
const pevBtn  = document.querySelector("#prev");
const speedSlider = document.querySelector("#speed");
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
let speed = 2 ;

function LoadSong(song){
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    aoudioElemnt.src = song.src;
}

LoadSong(songs[songIndex]);

function playSong(){
    playbtn.querySelector("i").classList.remove("fa-play");
    playbtn.querySelector("i").classList.add("fa-pause");
    aoudioElemnt.play();
    isPlay =true;
    
}



function pauseSong(){
    playbtn.querySelector("i").classList.remove("fa-pause");
    playbtn.querySelector("i").classList.add("fa-play");
    aoudioElemnt.pause();
    isPlay =false;
}
//
function nextSong(){
    pauseSong();
    songIndex++;
    setTimeout(() => {
        if(songIndex >songs.length-1){
            songIndex = 0;
    
        }
        LoadSong(songs[songIndex]);
        playSong();
        
    }, 300);
  
}

function pervioseSong(){
    pauseSong();
    setTimeout(()=>{
        songIndex--;
        if(songIndex<0){
            songIndex = songs.length - 1;

        }
        LoadSong(songs[songIndex]);
        playSong();

    },300)
}
    
function updateProgress(e){
   
  
    const {duration , currentTime} =e.srcElement;
    const progrssPercentage =(currentTime /duration)*100;
    progress.style.width =`${progrssPercentage}%`;

    //Time
    const duarationMin = Math.floor(duration/60);
    let durationSec = Math.floor(duration %60);
    if(du){

    }
    current_time.textContent = `${duarationMin}:${durationSec}`

    }

// events
playbtn.addEventListener("click",()=>{
    if(isPlay){
        pauseSong();

    }else{
        playSong();

    }
 
})

nextBtn.addEventListener("click",()=>{
    nextSong();
})

pevBtn.addEventListener("click",pervioseSong);

aoudioElemnt.addEventListener("timeupdate",updateProgress)



