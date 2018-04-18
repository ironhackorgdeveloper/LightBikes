// Global variables to capture movement from each player from the switch statement. 
var playerOneMove;
var playerTwoMove;

window.onload = function () { 

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
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

  function countdown(){ // This function counts down from 5 using JQuery and updates the seconds displayed on the screen.
    var threeSeconds = $('.col-6 span').text();
    setInterval(function(){
      threeSeconds--;
      if(threeSeconds >= 0){
        $('.timer').text(threeSeconds);
       }
       if(threeSeconds == 0){
         console.log("GAME STARTED!") 	
         $('.col-6 span' ).remove();
         $('.col-6 #timer' ).text("GO!");
         drawPlayersOnBoard();
      }
    },1000); // = One Second
  }
  
  // Starts the countdown by calling the countdown function.
  countdown();

  // Creates each of the player objects from the Player constructor.
  var playerOne = new Player('blue', new LightBike(425, 325, 15, 15));
  var playerTwo = new Player('red', new LightBike(500, 325, 15, 15));

  function drawPlayersOnBoard(){ // Draws the two players on the canvas.
    playerOne.draw();
    playerTwo.draw();
  };

//   function limits(x,y, id){
//     if(x <= 0 || y <= 0 || x >= 950 || y >= 650){ // max width and height of the canvas
//         clearInterval(id);
//         return false;
//     }else {return true;}
// }

  // Accepts key presses from the DOM and associates them with player movement.
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      // Key Event Input - (Player 1: WASD)
      case 87:
        window.clearInterval(playerOneMove);
        playerOneMove = setInterval(function() {
        playerOne.moveUp();
        },50);
      break;
      case 83:
        window.clearInterval(playerOneMove);
        playerOneMove = setInterval(function() {
        playerOne.moveDown();
        },50);
      break;
      case 68:
        window.clearInterval(playerOneMove);
        playerOneMove = setInterval(function() {
        playerOne.moveLeft();
        },50);
      break;
      case 65:
        window.clearInterval(playerOneMove);
        playerOneMove = setInterval(function() {
        playerOne.moveRight();
        },50);
      break;
      // Key Event Input - (Player 2: IJKL)
      case 73:
        window.clearInterval(playerTwoMove);
        playerTwoMove = setInterval(function() {
        playerTwo.moveUp();
        },50);
        break;
      case 75:
        window.clearInterval(playerTwoMove);
        playerTwoMove = setInterval(function() {
        playerTwo.moveDown();
        },50);
        break;
      case 76:
        window.clearInterval(playerTwoMove);
        playerTwoMove = setInterval(function() {
        playerTwo.moveLeft();
        },50);
        break;
      case 74:
        window.clearInterval(playerTwoMove);
        playerTwoMove = setInterval(function() {
        playerTwo.moveRight();
        },50);
        break;
      default:
        console.log("You're moving!");
    }
  };

  function trackPlayerScore(){
    playerOneScore = $('#player-1-score').text();
    playerTwoScore = $('#player-2-score').text();

    console.log(playerOneScore);
    console.log(playerTwoScore);
  }
    trackPlayerScore();
}; 

