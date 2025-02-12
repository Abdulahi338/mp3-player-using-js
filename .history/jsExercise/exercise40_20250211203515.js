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
    { title: "Nature", artist: "Pexels", src: "https://media.istockphoto.com/id/1198474553/video/landscape-at-snowdonia-national-park-in-wales-uk-crane-shot.mp4?s=mp4-640x640-is&k=20&c=cMhMPgAPc9vU52PWxWxNxgnR0zAXOMabqk1Df4qyj7s=", type: "direct" },
    { title: "City View", artist: "Pexels", src: "https://media.istockphoto.com/id/1682072807/video/beautiful-landscape-in-the-mountains-of-wales.mp4?s=mp4-640x640-is&k=20&c=SgiiLDYGKK2hsFhHQvgNHCRu0zCwQ1bkt_z7QFSy3BA=", type: "direct" },
    { title: "Ocean Waves", artist: "Pexels", src: "https://media.istockphoto.com/id/1479135181/video/firework-with-audio.mp4?s=mp4-640x640-is&k=20&c=m_PN_5lsIh1oVrWz_siAQyMGOcbwRr9Kuv_JsHRw5x0=", type: "direct" },
    { title: "Lion Sound", artist: "Pexels", src: "https://media.istockphoto.com/id/1874742292/video/lion-roaring.mp4?s=mp4-640x640-is&k=20&c=nxx0_OKPxt6vajpfwCDwXRXtq5_7dihgN5C6EOtwSZo=", type: "direct" }
];



let speed = 4 ;
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
    video.play();
    isPlay = true;
    
}

// paose Functiuon

function pause(){
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");
    video.pause();
    isPlay = false;

}



// all events

playBtn.addEventListener("click",()=>{
    if(isPlay){
        pause();

    }else{
        playVedio();
    }
})

// next 

nextBtn.addEventListener("click",()=>{
    pause()
    videoIndex ++;
    if(videoIndex ++ >= videos.length - 1){
        videoIndex = 0;

    }  
    loadVideo(videos[videoIndex]);
    playVedio();
    console.log("clickkkkk")

})

// prev
prevBtn.addEventListener("click", ()=>{
    pause();
    videoIndex--;
      if(videoIndex<0){
        videoIndex = videos.length -1;
    }
    loadVideo(videos[videoIndex]);
    playVedio();
    console.log("Playing previous video:", videos[videoIndex].title);
})

progress.style.width = '40%';
