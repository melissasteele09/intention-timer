var studyButton = document.querySelector("#study");
var medButton = document.querySelector("#meditate");
var exButton = document.querySelector("#exercise");

function preventE() {
  if (event.keyCode === 101) {
    return false;
  }
};

studyButton.addEventListener("click", function() {
  studyButton.style.borderColor =  "#B3FD78";
  studyButton.querySelector('#study-pic').src = "assets/images/study-active.svg";
  studyButton.querySelector('#study-head').style.color = "#B3FD78";
})

medButton.addEventListener("click", function() {
  medButton.style.borderColor = "#C278FD";
})

exButton.addEventListener("click", function() {
  exButton.style.borderColor = "#FD8078";
})
