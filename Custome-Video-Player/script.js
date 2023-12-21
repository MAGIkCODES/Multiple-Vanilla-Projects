const video_El = document.getElementById('video');
const play_El = document.getElementById('play');
const stop_El = document.getElementById('stop');
const progress_El = document.getElementById('progress');
const timestamp_El = document.getElementById('timestamp');

// play & pause video
function toggleVideoStatus() {
    // console.log('play');
    if (video_El.paused) {
        video_El.play();
    } else {
        video_El.pause();
    }
}

// Update play/pause icon
function updatePlayIcon() {
    // console.log('update pause and play');
    if (video_El.paused) {
       play_El.innerHTML = '<i class="fa fa-play fa-2x"></i>'; 
    } else {
      play_El.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Update progress & timestamp
function updateProgress() {
    // console.log('updateProgress')
    progress_El.value = (video.currentTime / video.duration) * 100;

    // Get the minutes
    let mins = Math.floor(video_El.currentTime / 60);
    if(mins < video_El.duration) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video_El.currentTime % 60);
    if(secs < video.duration){
        secs = '0' + String(secs);
    }

    timestamp_El.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
    video_El.currentTime = (+progress_El.value * video_El.duration) / 100;
}

// stop video
function stopVideo() {
    video_El.currentTime = 0;
    video_El.pause();
}

// Event Listeners
video_El.addEventListener('click', toggleVideoStatus);
video_El.addEventListener('pause', updatePlayIcon);
video_El.addEventListener('play', updatePlayIcon);
video_El.addEventListener('timeupdate', updateProgress);

play_El.addEventListener('click', toggleVideoStatus);

stop_El.addEventListener('click', stopVideo);

progress_El.addEventListener('change', setVideoProgress);