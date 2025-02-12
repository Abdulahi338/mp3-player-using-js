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
    { title: "Local", artist: "Local video", src: "exercise40.mp4", type: "local" },
    { title: "Salad", artist: "Sh Mustafe", src: "https://cdn.pixabay.com/vimeo/293/29395.mp4", type: "direct" },
    { title: "Sualo iyo Jawaabo", artist: "Sh Umal", src: "https://www.youtube.com/embed/7oQ6spfA2kY", type: "youtube" },
    { title: "Quran", artist: "Sh Abdirashiid", src: "https://www.youtube.com/embed/e4Eu_QuDJsw", type: "youtube" },
    { title: "Waano Cafimad", artist: "Dr Weyn", src: "https://www.youtube.com/embed/SguhwXDR2UU", type: "youtube" }
];


let speed = 1;
let isPlay =false;
let videoIndex =5;

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
    // video.play();
    
}

// all events

playBtn.addEventListener("click",playVedio)
