var studyButton = document.querySelector("#study");
var medButton = document.querySelector("#meditate");
var exButton = document.querySelector("#exercise");

function preventE() {
  if (event.keyCode === 101) {
    return false;
  }
};

studyButton.addEventListener("click", function() {
  buttonColorReset()
  studyButton.style.borderColor =  "#B3FD78";
  studyButton.querySelector("#study-pic").src = "assets/images/study-active.svg";
  studyButton.querySelector("#study-head").style.color = "#B3FD78";
})

medButton.addEventListener("click", function() {
  buttonColorReset();
  medButton.style.borderColor = "#C278FD";
  medButton.querySelector("#med-pic").src = "assets/images/meditate-active.svg";
  medButton.querySelector("#med-head").style.color = "#C278FD";
})

exButton.addEventListener("click", function() {
  buttonColorReset()
  exButton.style.borderColor = "#FD8078";
  exButton.querySelector("#shoe-pic").src = "assets/images/exercise-active.svg";
  exButton.querySelector("#ex-head").style.color = "#FD8078";
})

function buttonColorReset() {
  studyButton.style.borderColor =  "#FFF";
  studyButton.querySelector("#study-pic").src = "assets/images/study.svg";
  studyButton.querySelector("#study-head").style.color = "#FFF";
  medButton.style.borderColor = "#FFF";
  medButton.querySelector("#med-pic").src = "assets/images/meditate.svg";
  medButton.querySelector("#med-head").style.color = "#FFF";
  exButton.style.borderColor = "#FFF";
  exButton.querySelector("#shoe-pic").src = "assets/images/exercise.svg";
  exButton.querySelector("#ex-head").style.color = "#FFF";
}
