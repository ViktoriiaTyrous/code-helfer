let video = document.getElementById("myVideo");
let videoButton = document.getElementById("video-button");
let videoText = document.getElementById("videoBtn-text");
let backgroundImage = document.querySelector(".main-scrin");
let title = document.querySelector(".main__title");
let btnWrapp = document.querySelector(".buttons__btn-video__wrapper");

videoButton.addEventListener("click", function() {
  if (video.muted) {
    video.play();
    video.muted = false;
    videoButton.querySelector('.buttons__btn-video__icon').src = '../images/video-pause.svg';
    video.style.display = "block";
    videoText.innerHTML = "Videos stoppen";
    // backgroundImage.style.background = "none";
    // backgroundImage.style.height = "auto";
    // title.style.display = "none";
    // btnWrapp.style.bottom= "-20px";
  } else {
    video.pause();
    video.muted = true;
    videoButton.querySelector('.buttons__btn-video__icon').src = '../images/video.svg';
    videoText.innerHTML = "Video abspielen";
    video.style.display = "none";
   
  }
 
});

