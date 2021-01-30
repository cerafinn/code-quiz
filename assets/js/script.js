// I need a variable for:
var timer = document.querySelector("#timer");
var timerCountdown;
var secondsLeft = 75;
var wrongAnswer = 10;
var currentScore = 0;
var quizQuestion = document.querySelector("#quizQuestion");
var quizChoices = document.querySelector("#choices");
var introP = document.querySelector("#intro");
var startBtn = document.querySelector("#startBtn")
var quizDiv = document.querySelector("#quiz")
var quizDiv = document.querySelector("#highScore")
var questionIndex = 0;

startBtn.addEventListener("click", startGame);

//array with questions
var codeQuestions = [
  {
    question: "An if/else statement is enclosed with ______________.",
    possibleAnswers: ["Parentheses", "Curly Brackets", "Square Brackets", "Quotations"],
    correctAnswer: "Curly Brackets" 
  },
  {
    question: "To target HTML element, you would target it by its _______",
    possibleAnswers: ["Class", "Title", "ID", "Semantic tag"],
    correctAnswer: "ID"
  },
  {
    question: "Question",
    possibleAnswers: ["A", "B", "C", "D"],
    correctAnswer: "B" 
  },
  {
    question: "Question",
    possibleAnswers: ["A", "B", "C", "D"],
    correctAnswer: "D" 
  },
  {
    question: "Question",
    possibleAnswers: ["A", "B", "C", "D"],
    correctAnswer: "A" 
  },
];


// timer that starts on click of button
//game ends when timer ends or end of questions
function endGame() {
  quizDiv.innerHTML = "";

  currentScore += secondsLeft;
  //enter high score
  clearInterval(timerCountdown);

  highScore.setAttribute("style", "display: block")
  //save in localstorage
  
  //display current high scores
};

function showHighScore() {
  //load from local storage
  //display on highscore.html page
};

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
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = codeQuestions[questionIndex].possibleAnswers[i];
    choiceBtn.addEventListener("click", answerQuestion);
    choiceOption.appendChild(choiceBtn);
    quizChoices.appendChild(choiceOption);
  }
  //on click, start the answerQuestion function
};