let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");
video.style.display = "none";

videoButton.addEventListener("click", function() {
  if (video.muted) {
    video.play();
    video.muted = false;
    videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video-pause.svg";
  } else {
    video.pause();
    videoButton.querySelector('.buttons__btn-video__icon').src = "../images/video.svg";
  }
});






