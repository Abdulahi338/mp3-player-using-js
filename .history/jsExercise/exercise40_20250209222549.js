const video = document.getElementsByName("video");
const artistName = document.getElementById("artist");
const titleText = document.getElementById("title");
const progressBar = document.getElementsByClassName("progress-bar");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector("#prev");
const playBtn =document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const volumeVedio = document.querySelector("#volume");
const speedControll = document.querySelector("#speed");

const videos  = [
    {title:"Local",artist:"Local video ",:"exercise40.mp4"},
    
    {title: "salad" , artist:"sh mustafe" , src:"https://www.youtube.com/watch?v=aIonkyzvT4k&t"},
    {title: "sualo iyo jawabo" , artist:"Sh Umal" , src:"https://www.youtube.com/watch?v=7oQ6spfA2kY"},
    {title: "Quran" , artist:"Sh Abdirashiid" , src:"https://www.youtube.com/watch?v=e4Eu_QuDJsw"},
    {title: "Waano cafimad" , artist:"Dr Weyn" , src:"https://www.youtube.com/watch?v=SguhwXDR2UU"}    
];

let speed = 1;
let isPlay =false;
let videoIndex =0;

function loadVideo(videos){
    titleText.textContent =videos.title;
    artistName.textContent = videos.artist;
    video.src = videos.src;

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
