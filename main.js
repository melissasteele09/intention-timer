var exButton = document.querySelector("#exercise");
var medButton = document.querySelector("#meditate");
var startButton = document.querySelector("#start-btn");
var studyButton = document.querySelector("#study");


function preventE() {
  if (event.keyCode === 101) {
    return false;
  }
};

studyButton.addEventListener("click", function() {
  buttonColorReset();
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
  buttonColorReset();
  exButton.style.borderColor = "#FD8078";
  exButton.querySelector("#shoe-pic").src = "assets/images/exercise-active.svg";
  exButton.querySelector("#ex-head").style.color = "#FD8078";
})

startButton.addEventListener("click", function() {
  var accomplishInputText = document.querySelector("#accomplish-text").value;
  var minuteInput = document.querySelector("#minute-input").value;
  var secondInput = document.querySelector("#second-input").value;
  var accomplishOutput = document.querySelector("#accomplish-output");
  var minuteOutput = document.querySelector("#minute-output");
  var secondOutput = document.querySelector("#second-output");
  accomplishOutput.innerText = accomplishInputText;
  minuteOutput.innerText = minuteInput;
  secondOutput.innerText = secondInput;
})

function startTimer() {
  var min = parseInt(minuteInput);
  var sec = parseInt(secondInput);
  var totSec = (min * 60) + sec;
  setInterval(function() {
    if (totSec === 0) {
      clearInterval();
    } else {
      totSec--;
      minuteInput = Math.floor(totSec / 60);
      secondInput = totSec % 60;
    };
  }, 10000;
};


function buttonColorReset() {
  studyButton.style.borderColor = "#FFF";
  studyButton.querySelector("#study-pic").src = "assets/images/study.svg";
  studyButton.querySelector("#study-head").style.color = "#FFF";
  medButton.style.borderColor = "#FFF";
  medButton.querySelector("#med-pic").src = "assets/images/meditate.svg";
  medButton.querySelector("#med-head").style.color = "#FFF";
  exButton.style.borderColor = "#FFF";
  exButton.querySelector("#shoe-pic").src = "assets/images/exercise.svg";
  exButton.querySelector("#ex-head").style.color = "#FFF";
}
