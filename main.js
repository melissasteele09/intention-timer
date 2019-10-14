var exButton = document.querySelector("#exercise");
var medButton = document.querySelector("#meditate");
var startButton = document.querySelector("#start-btn");
var studyButton = document.querySelector("#study");
var accomplishOutput = document.querySelector("#accomplish-output");
var minuteOutput = document.querySelector("#minute-output");
var secondOutput = document.querySelector("#second-output");
var timerStartButton = document.querySelector("#timer-start-btn");
var categoryColor;

function preventE() {
  if (event.keyCode === 101) {
    return false;
  }
};

studyButton.addEventListener("click", function() {
  buttonColorReset();
  categoryColor = "#B3FD78"
  studyButton.style.borderColor =  categoryColor;
  studyButton.querySelector("#study-pic").src = "assets/images/study-active.svg";
  studyButton.querySelector("#study-head").style.color = categoryColor;
});

medButton.addEventListener("click", function() {
  buttonColorReset();
  categoryColor = "#C278FD";
  medButton.style.borderColor = categoryColor;
  medButton.querySelector("#med-pic").src = "assets/images/meditate-active.svg";
  medButton.querySelector("#med-head").style.color = categoryColor;
});

exButton.addEventListener("click", function() {
  buttonColorReset();
  categoryColor = "#FD8078";
  exButton.style.borderColor = categoryColor;
  exButton.querySelector("#shoe-pic").src = "assets/images/exercise-active.svg";
  exButton.querySelector("#ex-head").style.color = categoryColor;
});

startButton.addEventListener("click", function() {
  var accomplishInputText = document.querySelector("#accomplish-text").value;
  var minuteInput = document.querySelector("#minute-input").value;
  var secondInput = document.querySelector("#second-input").value;
  var currentText = document.querySelector("#main-title")
  accomplishOutput.innerText = accomplishInputText;
  minuteOutput.innerText = minuteInput;
  secondOutput.innerText = secondInput;
  currentText.innerText = "Current Activity"
  document.querySelector('form').style.display = "none";
  document.querySelector('#timer').style.display = "flex";
  timerStartButton.style.borderColor = categoryColor;
});

timerStartButton.addEventListener("click", startTimer);

function startTimer() {
  var min = parseInt(minuteOutput.innerText);
  var sec = parseInt(secondOutput.innerText);
  var totSec = (min * 60) + sec;
  setInterval(function() {
    if (totSec === 0) {
      clearInterval();
    } else {
      totSec--;
      minuteOutput.innerText = Math.floor(totSec / 60);
      secondOutput.innerText = totSec % 60;
    };
  }, 1000);
};

// function doubleDigit(num) {
//
// }

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
};
