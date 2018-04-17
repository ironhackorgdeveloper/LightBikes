window.onload = function() {

function setup(){ // Sets up the game.

  // Add players to the canvas.

  // Start the 5 second countdown.
  countDown = function(){
    var seconds = document.getElementById('timer-seconds')
    if(seconds <= 5 && seconds > 0){
      seconds--;
      $("#timer-seconds").html(seconds);
    }
  }
  countDown();


  // Begin tracking the time of the game.





};

// Collision boundaries around the canvas

// Collision Detection


function endGame(){ // Resets the game.

};



};