// I need a variable for:
var timer = document.getElementById("timer");
var currentScore = 0;
var wrongAnswer = 10;
var quizQuestion = document.getElementById("quiz");
var quizChoices = document.getElementById("choices");


//array with questions
var quizQuestions = [
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
var endGame = function() {
  //enter high score

  //save in localstorage
  
  //display current high scores
};

var showHighScore = function() {
  //load from local storage
  //display on highscore.html page
};

//present and loop through questions
var answerQuestion = function() {
  if {}
  //answer correct, move to next question
  else {}
  //answer incorrect, deduct points and move to next question
}

//start game and timer on button click
var startGame = function() {
  //Show start quiz page

  //start timer on click

  //show first question and create loop in answerQuestion fucntion
  for (var i=0; i< quizQuestions.length; i++) {
    document.getElementById("quizQuestions").textContent();
  }

  //question should appear in h2 and answers should be list items in ol as buttons
};

startGame();