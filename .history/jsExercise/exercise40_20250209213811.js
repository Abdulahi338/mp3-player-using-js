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
    {title: "salad" , artist:"sh mustafe" , src:""},
    {title: "sualo iyo jawabo" , artist:"Sh Umal" , src:""},
    {title: "Quran" , artist:"Sh Abdirashiid" , src:""},
    {title: "Waano cafimad" , artist:"Dr " , src:""},
    
]
