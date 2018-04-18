window.onload = function () { // Fired when the entire page loads, including its content.

  function setup() { // Sets up the game.

    function countdown(){
      var fiveSeconds = $('.col-6 span').html();
      console.log(fiveSeconds);
      $('.timer-seconds').text(fiveSeconds);
      setInterval(function(){
        fiveSeconds--;
        if(fiveSeconds >= 0){
          $('.timer').text(fiveSeconds);
        }
        if(fiveSeconds == 0){
        }
      },1000);
    }
    // Start
    countdown();
    
    
    // Loop
    setInterval(function(){
      countdown();
    },5000);


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