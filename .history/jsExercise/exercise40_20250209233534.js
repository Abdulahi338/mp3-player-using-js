const video = document.querySelector("video");

const artistName = document.getElementById("artist");
const titleText = document.getElementById("title");
const progressBar = document.getElementsByClassName("progress-bar");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector("#prev");
const playBtn =document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const volumeVedio = document.querySelector("#volume");
const speedControll = document.querySelector("#speed");
const videos = [
    { title: "Nature", artist: "Pexels", src: "https://cdn.pixabay.com/video/2025/01/07/251262_large.mp4", type: "direct" },
    { title: "City View", artist: "Pexels", src: https://www.youtube.com/watch?v=TvgOAurTjX0&t=61s&pp=ygURc2ggbXVzdGFmZSBzYWxhZGE%3D, type: "direct" },
    { title: "Ocean Waves", artist: "Pexels", src: "https://player.vimeo.com/external/352714126.sd.mp4?s=2384507aa5e41aa9248821c80cd0d4588231a8ed&profile_id=164", type: "direct" }
];



let speed = 1;
let isPlay =false;
let videoIndex =0;

// function loadVideo(videos){
//     titleText.textContent =videos.title;
//     artistName.textContent = videos.artist;
//     video.src = videos.src;
// }
function loadVideo(videoObj) {
    titleText.textContent = videoObj.title;
    artistName.textContent = videoObj.artist;
    video.src = videoObj.src; // Set the video source
}


loadVideo(videos[videoIndex]);

// play video function

function playVedio(){
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");
    console.log("cliked");
    video.play();
    
}

// all events

playBtn.addEventListener("click",playVedio)
