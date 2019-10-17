var accomplishOutput = document.querySelector("#accomplish-output");
var categoryColor;
var currentText;
var i = 0;
var totSec;
var exButton = document.querySelector("#exercise");
var logButton = document.querySelector("#activity-log-btn");
var medButton = document.querySelector("#meditate");
var minuteInput;
var minuteOutput = document.querySelector("#minute-output");
var newActivityButton = document.querySelector("#new-activity-btn")
var secondInput;
var secondOutput = document.querySelector("#second-output");
var startButton = document.querySelector("#start-btn");
var studyButton = document.querySelector("#study");
var timerStartButton = document.querySelector("#timer-start-btn");

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
  minuteInput = document.querySelector("#minute-input").value || 0;
  secondInput = document.querySelector("#second-input").value || 0;
  if (accomplishInputText && categoryColor) {
    currentText = document.querySelector("#main-title")
    accomplishOutput.innerText = accomplishInputText;
    minuteOutput.innerText = doubleDigit(minuteInput);
    secondOutput.innerText = doubleDigit(secondInput);
    currentText.innerText = "Current Activity"
    document.querySelector('form').style.display = "none";
    document.querySelector('#timer').style.display = "flex";
    timerStartButton.style.borderColor = categoryColor;
  } else if (!accomplishInputText) {
    document.querySelector('.error').style.color = "#EFB7EC";
    document.querySelector('.error-symbol').style.opacity = "1";
    document.querySelector('.line-input').style.borderColor = "#EFB7EC";
  } else {
    alert ("Don't Forget to Select a Category");
  };
});

timerStartButton.addEventListener("click", startTimer);

logButton.addEventListener("click", addCard);

function startTimer() {
  var min = parseInt(minuteOutput.innerText);
  var sec = parseInt(secondOutput.innerText);
  totSec = (min * 60) + sec;
  setInterval(function() {
    if (totSec === 0) {
      clearInterval();
      timerStartButton.innerText = "complete!";
      logButton.style.display = "inline";
    } else {
      totSec--;
      minuteOutput.innerText = doubleDigit(Math.floor(totSec / 60));
      secondOutput.innerText = doubleDigit(totSec % 60);
    };
  }, 10);
};

function doubleDigit(num) {
  if (parseInt(num) < 10) {
    return "0" + parseInt(num)
  } else {
    return parseInt(num)
  };
}

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

function findCategory() {
  if (categoryColor === "#B3FD78") {
    return "Study"
  } else if (categoryColor === "#C278FD") {
    return "Meditate"
  } else {
    return "Exercise"
  };
}

function addCard() {
  var category = findCategory();
  var aside = document.querySelector("aside");
  document.querySelector("#card-log").style.display = "none";
  document.querySelector("#card-log2").style.display = "none";
  aside.innerHTML += `
    <section class="card">
      <h4 class="card-cat card-id-${i}">${category}</h4>
      <p class="card-time">${minuteInput} min ${secondInput} seconds</p>
      <p class="card-accomplish">${accomplishOutput.innerText}</p>
    </section>`;
  document.querySelector(`.card-id-${i}`).style.borderColor = categoryColor;
  document.querySelector(".card").style.display = "";
  document.querySelector("form").reset();
  timerStartButton.innerText = "";
  logButton.style.display = "inline";
  document.querySelector("#new-activity-btn").style.display ="inline";
}

newActivityButton.addEventListener("click", returnForm)

function returnForm() {
  currentText.innerText = "New Activity"
  document.querySelector("#new-activity-btn").style.display = "none";
  document.querySelector("form").style.display = "";
  timerStartButton.innerText = "start!";
  i++;
}
