var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

    video = document.getElementById("player1");

    video.autoplay = false;
    video.loop = false;
    
    document.querySelector("#play").addEventListener("click", function() {
        video.play();
    });

    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate -= 0.25;
    });

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate += 0.25;
    });

    document.querySelector("#skip").addEventListener("click", function() {
        video.currentTime += 5;
    });

    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    });

    var volumeSlider = document.querySelector("#slider");
    var volumeSpan = document.querySelector("#volume");
    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        volumeSpan.textContent = volumeSlider.value + "%";
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add('oldSchool');
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove('oldSchool');
    });
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

