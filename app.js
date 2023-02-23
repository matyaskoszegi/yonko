const firstVid = document.getElementById("first-video")
const secondVid = document.getElementById("second-video")
const thirdVid = document.getElementById("third-video")
const vidContainer = document.getElementById("video-holder")

const btn = document.getElementById("btn");
const videos = [firstVid, secondVid, thirdVid];

console.log(videos)

let i = Math.floor(Math.random() * videos.length)

isWatched = JSON.parse(localStorage.getItem('isWatched')) || false;


console.log(i);
function playVideo() {
    videos[i].style.display = "block";
    videos[i].play();

    videos[i].addEventListener("ended", () => {
        vidContainer.style.display = "none";
        isWatched = true;
        localStorage.setItem('isWatched', JSON.stringify(isWatched));   
    })
}


function trigger(){
    if (!isWatched) {
        playVideo();
        btn.style.display = "none"
    } else {
        vidContainer.style.display = "none";
    }
}



