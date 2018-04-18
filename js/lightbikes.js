// GOAL: Countdown after receiving some form of start input and then have it execute the draw functions for the players using jquery.

window.onload = function () { 

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // var seconds = document.getElementsByClassName('timer-seconds')
  // console.log(seconds);
  
  // Constructor function for the LightBikes.
  var LightBike = function(bikeX, bikeY, bikeWidth, bikeHeight) {
    this.x = bikeX;
    this.y = bikeY;
    this.width = bikeWidth;
    this.height = bikeHeight;
  };
 
  // Constructor function for each of the two players.
  var Player = function(playerColor, bike) {
    this.color = playerColor;
    this.bike = bike;
    this.moveUp   = function() { this.bike.y -= 15; this.draw(); }; // Accepts movementUp from the switch statements and then re-draws the player object.
    this.moveDown = function() { this.bike.y += 15; this.draw(); }; // Accepts movementDown from the switch statements and then re-draws the player object.
    this.moveRight= function() { this.bike.x -= 15; this.draw(); }; // Accepts movementRight from the switch statements and then re-draws the player object.
    this.moveLeft = function() { this.bike.x += 15; this.draw(); }; // Accepts movementLeft from the switch statements and then re-draws the player object.
    this.draw     = function(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.bike.x, this.bike.y, this.bike.width, this.bike.height);
    };
    this.clear = function() {
      ctx.clearRect(this.bike.x, this.bike.y, this.bike.width, this.bike.height)
    };
  };

  function countdown(){
    var fiveSeconds = $('.col-6 span').text();
    console.log(fiveSeconds);
    setInterval(function(){
      fiveSeconds--;
      if(fiveSeconds >= 0){
        $('.timer').text(fiveSeconds);
        console.log(fiveSeconds);
       }
       if(fiveSeconds == 0){
         console.log("GAME STARTED!")
           // Creates each of the player objects from the Player constructor.
          //DRAW THE PLAYERS THROUGH A FUNCTION CALL?
      }
    },1000);
  }
  
  // Start the countdown
  countdown();



  // Accepts key presses from the DOM and associates them with player movement.
  document.onkeydown = function (e) { 
    switch (e.keyCode) {
      // Key Event Input - (Player 1: WASD)
      case 87:
      setInterval(function() {
        playerOne.moveUp();
        },300);
      break;
      case 83:
      setInterval(function() {
        playerOne.moveDown(); 
      },300);
      break;
      case 68:
      setInterval(function() {
        playerOne.moveLeft();
      },500);
      break;
      case 65:
      setInterval(function() {
        playerOne.moveRight();
      },500);
      break;
      // Key Event Input - (Player 2: IJKL)
      case 73:
        playerTwo.moveUp();
        break;
      case 75:
        playerTwo.moveDown();
        break;
      case 76:
        playerTwo.moveLeft();
        break;
      case 74:
        playerTwo.moveRight();
        break;
      default:
        console.log("You're moving!");
    };
  };
}; 