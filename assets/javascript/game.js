// Setup global variables
var randomScore = 0;
var userScore = 0;
var gemNumbers = [];
// On click of start button, add the randomly generated number from 19 - 120
// Add that number to the Target Score div
$('#start-button').on('click', function(){
  gemNumbers = [];
  randomScore = Math.ceil( (Math.random() * 100) + 18)
  $('#target-score').text(randomScore);
  console.log("Random Score: ", randomScore);
  for (var i = 1; i < 5; i++) {
    // Ensure every button has a unique number 
    var randomGemNumber = Math.floor( (Math.random() * 12) + 2) 
    if (gemNumbers.indexOf(randomGemNumber) === -1) {
      gemNumbers.push(randomGemNumber)
    } else {
      i--;
    } 
    $('#gem-' + i).val(gemNumbers[i-1])
  }
  console.log("Value of gem-1: ", $('#gem-1').val());
  console.log("Value of gem-2: ", $('#gem-2').val());
  console.log("Value of gem-3: ", $('#gem-3').val());
  console.log("Value of gem-4: ", $('#gem-4').val());
});
var number = 1;
// On click of a gem, add the value of that gem to the user's total
$('#gem-' + number).on('click', function(){
  // Update the userScore if there is a value for the gem
  if ($(this).val()) {
    userScore += parseInt($(this).val());
    $('#user-score').text(userScore);
    evaluateScore();
  }
});

// Determine if Score Matches
  function evaluateScore(){
   if (userScore === randomScore){
     console.log("You Win!");
   } else if (userScore > randomScore){
     console.log("You went over. So sad, you are a loser and no one likes you.");
   } else {
     console.log("Keep going!");
   }
  }