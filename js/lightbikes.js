// Global variables to capture movement from each player from the switch statement. 
var playerOneMove;
var playerTwoMove;

window.onload = function () { 

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  // canvasWidth = 950; 
  // canvasHeight = 650;

  // Constructor function for the LightBikes.
  var LightBike = function(bikeX, bikeY, bikeWidth, bikeHeight) {
    this.x = bikeX;
    this.y = bikeY;
    this.width = bikeWidth;
    this.height = bikeHeight;
  };

  // Constructor function for each of the two players.
  var Player = function(playerColor, bike){
    this.color = playerColor;
    this.bike = bike;
    this.moveUp   = function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        console.log(this.bike.y, this.bike.x);
        this.bike.y -= 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove); // Clear the interval when a crash occurs. 
        window.clearInterval(playerTwoMove); // Clear the interval when a crash occurs. 
        this.clear();
        trackPlayerScore();
        gameOver();
      }
    }; 
    this.moveDown = function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        console.log(this.bike.y, this.bike.x);
        this.bike.y += 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove); // Clear the interval when a crash occurs. 
        window.clearInterval(playerTwoMove); // Clear the interval when a crash occurs. 
        this.clear();
        trackPlayerScore();
        gameOver();      
      }
    }; 
    this.moveRight= function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        console.log(this.bike.y, this.bike.x);
        this.bike.x -= 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove); // Clear the interval when a crash occurs. 
        window.clearInterval(playerTwoMove); // Clear the interval when a crash occurs. 
        this.clear();
        trackPlayerScore();
        gameOver();
      }
    };
    this.moveLeft = function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        console.log(this.bike.y, this.bike.x);
        this.bike.x += 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove); // Clear the interval when a crash occurs. 
        window.clearInterval(playerTwoMove); // Clear the interval when a crash occurs. 
        this.clear();
        trackPlayerScore();
        gameOver();
      }
    }; // Accepts movementLeft from the switch statements and then re-draws the player object.
    this.draw = function(){
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

  // Accepts key presses from the DOM and associates them with player movement.
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      // Key Event Input - (Player 1: WASD)
      case 87:
        window.clearInterval(playerOneMove); // For when direction is changed.
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

//   var canvasWalls = [];


//   function checkCollision(){
//     if(playerOne.bikeX.x > canvasWidth) ||
//       (playerOne.bikeX.x > canvasHeight) ||
//       (playerOne.bikeY.y > canvasWidth) ||
//       (playerOne.bikeY.y > canvasHeight) ||
//       (playerTwo.bikeX.x > canvasWidth) ||
//       (playerTwo.bikeX.x > canvasHeight) ||
//       (playerTwo.bikeY.y > canvasWidth) ||
//       (playerTwo.bikeY.y > canvasHeight){
//         return false;
//       };
// };

  function gameOver(){
    // alert("gameOver!")
    console.log("GameOver");
    // setTimeout(function(){
    //   window.location.href = "game.html";
    // }, 1);    
  }


  function trackPlayerScore(){
    playerOneScore = $('#player-1-score').text();
    playerTwoScore = $('#player-2-score').text();

    console.log(playerOneScore);
    console.log(playerTwoScore);
  }
    trackPlayerScore();
}; 

