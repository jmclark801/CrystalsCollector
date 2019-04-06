// Setup global variables
var randomScore = 0;
var userScore = 0;
var gemNumbers = [];
var wins = 0;
var losses = 0;

// On click of start button:
// Variables are reset and classes, text are updated to visually reset the game
// Randomly generated target score is set from 19 - 120
// Gems are given random values (these values are logged for TA testing purposes only)

$('#start-button').on('click', function () {
  userScore = 0
  gemNumbers = [];
  randomScore = Math.ceil((Math.random() * 100) + 18)
  $('#status').text('').removeClass("status-win", "status-lose");
  $(this).text("Play Again")
  $('#target-score').text(randomScore);
  $('#user-score').text(userScore);
  for (var i = 1; i < 5; i++) {
    // Ensure every button has a unique number 2-13 since if the #1 is picked, the user can win too easily.
    var randomGemNumber = Math.floor((Math.random() * 12) + 2)
    if (gemNumbers.indexOf(randomGemNumber) === -1) {
      gemNumbers.push(randomGemNumber)
    } else {
      i--;
    }
    $('#gem-' + i).val(gemNumbers[i - 1]).removeClass('fade');
    // The values for the gems are being logged so the Win condition can be tested.  It's not easy to win without the log!
    console.log("Gem #" + i + " has the value set to: " + $('#gem-' + i).val());
  }
});

// On click of a gem, add the value of that gem to the user's total
for (var i = 0; i <= 4; i++) {
  $('#gem-' + i).on('click', function () {
    if ($(this).val()) { //make sure the gem has been given a value before trying to add it
      userScore += parseInt($(this).val());
      $('#user-score').text(userScore);
      evaluateScore();
    }
  });
}

// Determine if Score Matches
function evaluateScore() {
  if (userScore === randomScore) {
    wins += 1;
    $('#wins').text('Wins: ' + wins);
    $('#status').text('Congrats, You Won!').attr("class", "status-win")
    gameOver()

  } else if (userScore > randomScore) {
    losses += 1;
    $('#losses').text('Losses: ' + losses);
    $('#status').text('You Went Over.  Sorry, You Lost!').attr("class", "status-lose")
    gameOver()
  } else {
    console.log("Keep going!");
  }
}

// Set all the image values to '' so the user can't keep playing
function gameOver() {
  for (var i = 1; i < 5; i++) {
    $('#gem-' + i).val('').addClass('fade');
  }
}
