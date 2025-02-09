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
    {title:"", artist:"", cover:"" , src:""},
    {title:"",artist:"",cover:""}
]
