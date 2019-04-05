// Setup global variables
var randomScore = 0;
var userScore = 0;
var gemNumbers = [];
var wins = 0;
var losses = 0;
// On click of start button, add the randomly generated number from 19 - 120
// Add that number to the Target Score div
$('#start-button').on('click', function(){
  gemNumbers = [];
  randomScore = Math.ceil( (Math.random() * 100) + 18)
  $('#target-score').text(randomScore);
  for (var i = 1; i < 5; i++) {
    // Ensure every button has a unique number 2-13 since if the #1 is picked, the user can win too easily.
    var randomGemNumber = Math.floor( (Math.random() * 12) + 2) 
    if (gemNumbers.indexOf(randomGemNumber) === -1) {
      gemNumbers.push(randomGemNumber)
    } else {
      i--;
    } 
    $('#gem-' + i).val(gemNumbers[i-1])
  }
});

// On click of a gem, add the value of that gem to the user's total
for(var i=0; i <= 4; i++){
  $('#gem-' + i).on('click', function(){
    if ($(this).val()) {
      userScore += parseInt($(this).val());
      $('#user-score').text(userScore);
      evaluateScore();
    }
  });
}

// Determine if Score Matches
  function evaluateScore(){
   if (userScore === randomScore){
    wins += 1;
    $('#wins').text('Wins: ' + wins);
    $('#status').text('Congrats, You Won!').attr("id","status-win")

   } else if (userScore > randomScore){
    losses +=1;
    $('#losses').text('Losses: ' + losses);
    $('#status').text('You Went Over.  Sorry, You Lost!').attr("id","status-lose")
    } else {
     console.log("Keep going!");
   }
  }

  //To-Do
  // 1. Change Start Button to 'Play Again' after initial click of start button
  // 2. Clear all variables on 'Play Again' - reset function
  // 3. Clean up presentation
  // 4. Add logging of numbers so 'win' scenario can be tested.