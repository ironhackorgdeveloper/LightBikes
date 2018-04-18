window.onload = function () { // Fired when the entire page loads, including its content.

  function setup() { // Sets up the game.

    // Add players to the canvas. 

    // Start the 5 second countdown.
    // countDown = function(){
    //   var seconds = document.getElementById('timer-seconds')
    //   if(seconds <= 5 && seconds > 0){
    //     seconds--;
    //     $("#timer-seconds").html(seconds);
    //   }
    // }
    // countDown();


    // Begin tracking the time of the game.


    // Track the score for the players

    playerOneScore = document.getElementById('player-1-score').value;
    playerTwoScore = document.getElementById('player-2-score').value;

    console.log(playerOneScore);
    console.log(playerTwoScore);

  };

  // Collision boundaries around the canvas

  // Collision Detection


  function endGame() { // Resets the game & says who scored a point.

  };
}; // END window.onload function