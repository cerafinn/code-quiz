var back = document.querySelector("#back");
var reset = document.querySelector("#resetScores");
var highScores = document.querySelector("#highScores");

var scoreArray = JSON.parse(localStorage.getItem("scoreArray"));

if (scoreArray !== null) {
  for(var i=0; i < scoreArray.length; i++) {
    var savedScore = document.createElement("li")
    savedScore.textContent = scoreArray[i].initial + " - " + scoreArray[i].score ;
    highScores.appendChild(savedScore);
  }
};


reset.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
});

back.addEventListener("click", function() {
  window.location.replace("./index.html");
});