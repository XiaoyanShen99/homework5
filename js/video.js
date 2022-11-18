// Add js here.
var vid = document.querySelector('video');

vid.autoplay = "none";
vid.loop = "none";
vid.load();


var playButton = document.getElementById("play");
playButton.addEventListener('click', function(){vid.play()});

var pauseButton = document.getElementById("pause");
pauseButton.addEventListener('click', function(){vid.pause()});

var slowButton = document.getElementById("slower");
slowButton.addEventListener('click', function(){
    if (vid.playbackRate == 0.5) {
        alert("Video is at slowest speed!");
        return;
    }
    vid.playbackRate = 0.5*vid.playbackRate;
    console.log(vid.playbackRate);
});

var fastButton = document.getElementById("faster");
fastButton.addEventListener('click', function(){
    if (vid.playbackRate == 2) {
        alert("Video is at fastest speed!");
        return;
    }
    vid.playbackRate = 2*vid.playbackRate;
    console.log(vid.playbackRate);
});

var skipButton = document.getElementById("skip");
skipButton.addEventListener('click', function(){
    if (vid.currentTime + 15 > vid.duration) {
        vid.currentTime = 0;
        vid.pause();
        return;
    }
    vid.currentTime += 15;
});

var muteButton = document.getElementById("mute");
muteButton.addEventListener('click', function(){
    if (vid.muted == true){
        vid.muted = false;
        muteButton.textContent = "Mute";
    } else {
        vid.muted = true;
        muteButton.textContent = "Unmute";
    }
});

var slider = document.getElementById("slider");
var vol = document.getElementById("volume");
vol.textContent = "100%";
slider.addEventListener('input', function(){
    vid.volume = slider.value / 100;
    vol.textContent = vid.volume*100+"%";
})


