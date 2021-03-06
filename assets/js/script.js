// I need a variable for:
var timerCountdown;
var initials;
var secondsLeft = 75;
var wrongAnswer = 10;
var currentScore = 0;

var timer = document.querySelector("#timer");
var quizQuestion = document.querySelector("#quizQuestion");
var quizChoices = document.querySelector("#choices");
var introP = document.querySelector("#intro");
var startBtn = document.querySelector("#startBtn");
var quizDiv = document.querySelector("#quiz");
var scoreDiv = document.querySelector("#scoreEntry");
var endScore = document.querySelector("#finalScore");
var scoreBtn = document.querySelector("#scoreBtn");
var initialsInput = document.querySelector("#userInitials");
var questionIndex = 0;

startBtn.addEventListener("click", startGame);
scoreBtn.addEventListener("click", addScore);

//array with questions
var codeQuestions = [
  {
    question: "An if/else statement is enclosed with:",
    possibleAnswers: ["Parentheses", "Curly Brackets", "Square Brackets", "Quotations"],
    correctAnswer: "Curly Brackets" 
  },
  {
    question: "To target HTML element, you would target it by its:",
    possibleAnswers: ["Class", "Title", "ID", "Semantic tag"],
    correctAnswer: "ID"
  },
  {
    question: "Where is the right place to put a Javascript?",
    possibleAnswers: ["The head section", "The body section", "Neither the body or head sections", "Either the body or head sections"],
    correctAnswer: "The body section"
  },
  {
    question: "Which value is not a falsy value?",
    possibleAnswers: ["False", "Null", "Undefined", "Unknown"],
    correctAnswer: "Unknown" 
  },
  {
    question: "Where should you declare global variables?",
    possibleAnswers: ["At the beginning of the .js file", "Inside a variable", "At the end of the .js file", "Nowhere"],
    correctAnswer: "At the beginning of the .js file" 
  },
];

//game ends when timer ends or end of questions
function endGame() {
  quizDiv.innerHTML = "";
  currentScore += secondsLeft;
  clearInterval(timerCountdown);
  timer.innerHTML = "";

  //enter high score
  scoreDiv.setAttribute("style", "display: block");
  endScore.textContent = "Your final score is " + currentScore + ".";
  //save in localstorage
}

function addScore() {
  initials = initialsInput.value.toUpperCase();
  if(initials === null) {
    alert("You need to enter your initials!")
  }

  var setScore = {
    initial: initials,
    score: currentScore
  }
  console.log(setScore);

  var scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
  if (scoreArray == null) {
    scoreArray =[]
  }
  scoreArray.push(setScore);
  localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
  window.location.replace("./high-scores.html");
}

//present and loop through questions
function answerQuestion(event) {
  if(codeQuestions[questionIndex].correctAnswer === this.textContent) {
    currentScore++;
    questionIndex++;
    if(questionIndex == codeQuestions.length) {
      endGame()
    }  
    else {nextQuestion()
    };
  }
  //answer incorrect
  else {
    secondsLeft -= wrongAnswer;
    if(secondsLeft<= 0) {
      endGame()
    };
    timer.textContent = "Time: " + secondsLeft;
    questionIndex++;
    if(questionIndex == codeQuestions.length) {
      endGame()
    }
    else{
      nextQuestion()
    };
  }
}

//start game and timer on button click
function startGame() {
  //start timer on click
  timer.textContent = "Time: " + secondsLeft;
  timerCountdown = setInterval( function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if(secondsLeft <= 0) {
      endGame();
    }
  },
    1000)
  
    startBtn.setAttribute("style", "display: none");
    introP.setAttribute("style", "display: none");

  nextQuestion();
}

function nextQuestion() {
  quizChoices.innerHTML = ""
  quizQuestion.textContent = codeQuestions[questionIndex].question;

  for(var i = 0; i < codeQuestions[questionIndex].possibleAnswers.length; i ++) {
    var choiceOption = document.createElement("li");
    choiceOption.setAttribute("style", "line-height: 3")
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = codeQuestions[questionIndex].possibleAnswers[i];
    choiceBtn.addEventListener("click", answerQuestion);
    choiceOption.appendChild(choiceBtn);
    quizChoices.appendChild(choiceOption);
  }
  //on click, start the answerQuestion function
};