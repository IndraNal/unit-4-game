// Make our variables global to the runtime of our application
var winScore;
var lossScore;
var totalScore;
var randomNumber;
var diamond;
var square;
var round;
var oval;

function initializeCrytsalCollector() {
  winScore = 0;
  lossScore = 0;
  totalScore = 0;
  max = 100;
  min = 10;
  randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
  square = Math.floor(Math.random() * 24);
  oval = Math.floor(Math.random() * 24);
  diamond = Math.floor(Math.random() * 24);
  round = Math.floor(Math.random() * 24);
  $("#winScore").text("wins : " + winScore);
  $("#lossScore").text("Losses :" + lossScore);
  $("#randomNumber").text(randomNumber);
  $("#totalScore").text(totalScore);
  console.log(totalScore);
}

function ResetCrytsalCollector() {
  totalScore = 0;
  $("#totalScore").text(totalScore);
  console.log(totalScore);
  max = 100;
  min = 10;
  randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
  square = Math.floor(Math.random() * 24);
  oval = Math.floor(Math.random() * 24);
  diamond = Math.floor(Math.random() * 24);
  round = Math.floor(Math.random() * 24);
}

initializeCrytsalCollector();

$("#square").on("click", function() {
  totalScore += square;
  console.log(totalScore);
  $("#totalScore").text(totalScore);
  calWinLoss(totalScore);
});

$("#diamond").on("click", function() {
  totalScore += diamond;
  console.log(totalScore);
  $("#totalScore").text(totalScore);
  calWinLoss(totalScore);
});

$("#oval").on("click", function() {
  totalScore += oval;
  console.log(totalScore);
  $("#totalScore").text(totalScore);
  calWinLoss(totalScore);
});
$("#round").on("click", function() {
  totalScore += round;
  console.log(totalScore);
  $("#totalScore").text(totalScore);
  calWinLoss(totalScore);
});

function calWinLoss(totalScore) {
  if (totalScore === randomNumber) {
    winScore += 1;
    $("#scoremessage").text(" you won !");
    ResetCrytsalCollector();
  } else if (totalScore > randomNumber) {
    lossScore += 1;
    $("#scoremessage").text(" you lost!");
    ResetCrytsalCollector();
  }
  $("#winScore").text("wins : " + winScore);
  $("#lossScore").text("Losses :" + lossScore);
  $("#randomNumber").text(randomNumber);
}
