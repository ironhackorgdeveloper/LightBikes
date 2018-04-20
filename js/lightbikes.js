// Global variables to capture movement from each player from the switch statement. 
var playerOneMove;
var playerTwoMove;

var playerOneDirection;
var playerTwoDirection;

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
  var Player = function(playerColor, bike){
    this.color = playerColor;
    this.bike = bike;
    this.moveUp   = function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        this.bike.y -= 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove, playerTwoMove); // Clear the interval for P1 when a border crash occurs.
        this.clear();
        borderCollision();
        trackPlayerScore();
        gameOver();
      }
    }; 
    this.moveDown = function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        this.bike.y += 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove, playerTwoMove); // Clear the interval for P1 when a border crash occurs. 
        this.clear();
        borderCollision();
        trackPlayerScore();
        gameOver();      
      }
    }; 
    this.moveRight= function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        this.bike.x -= 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove, playerTwoMove); // Clear the interval for P1 when a border crash occurs.
        this.clear();
        borderCollision();        
        trackPlayerScore();
        gameOver();
      }
    };
    this.moveLeft = function(){
      if((this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)){
        this.bike.x += 15;
        this.draw(); 
      }
      else{
        window.clearInterval(playerOneMove, playerTwoMove); // Clear the interval for P1 when a border crash occurs.
        this.clear();
        borderCollision();        
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

  // function borderCrash() { // FOR REFACTORING
  //   if((this.bike.y < 0 || this.bike.x < 0 || this.bike.y > 650 || this.bike.x > 950)){
  //     console.log(this.bike.y, this.bike.x);
  //     window.clearInterval(playerOneMove); // Clear the interval when a crash occurs. 
  //     window.clearInterval(playerTwoMove); // Clear the interval when a crash occurs. 
  //     this.clear();
  //     trackPlayerScore();
  //     gameOver();
  //   }
  // };

  function countdown(){ // This function counts down from 5 using JQuery and updates the seconds displayed on the screen.
    var threeSeconds = $('.col-6 span').text();
    setInterval(function(){
      threeSeconds--;
      if(threeSeconds >= 0){
        $('.timer').text(threeSeconds);
       }
       if(threeSeconds == 0){
         $('.col-6 span' ).remove();
         $('.col-6 #timer' ).text("GO!");
         drawPlayersOnBoard();
      }
    },1000); // = One Second
  }
  
  function borderCollision(){
    alert("Player hit a border!")
  };

  function playerCollision(){
    alert("One player hit another.")
  }
  // Starts the countdown by calling the countdown function.
  countdown();

  // Creates each of the player objects from the Player constructor.
  var playerOne = new Player('red', new LightBike(425, 300, 15, 15));
  var playerTwo = new Player('blue', new LightBike(500, 300, 15, 15));

  function drawPlayersOnBoard(){ // Draws the two players on the canvas.
    playerOne.draw();
    playerTwo.draw();
  };

  var travelLog = [];
  console.log(playerOne.bike.x);

  

  // Accepts key presses from the DOM and associates them with player movement.
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      // Key Event Input - (Player 1: WASD)
      case 87:
        if(playerOneDirection === 83){ // Clear the interval when a crash occurs. 
          window.clearInterval(playerOneMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP1();
        }
        else{
          window.clearInterval(playerOneMove); // Clears the interval when direction is changed.
          playerOneMove = setInterval(function() {
          travelLog.push({x: playerOne.bike.x, y: playerOne.bike.y})
          playerOne.moveUp();
          playerOneDirection = 87;
          collisionCheck();
          console.log('did this run?');             
          },300);
        };
      break;

      case 83:
        if(playerOneDirection === 87){ // Clear the interval when a self crash occurs. 
          window.clearInterval(playerOneMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP1();
        }
        else {
          window.clearInterval(playerOneMove); // Clears the interval when direction is changed.
          playerOneMove = setInterval(function() {
          travelLog.push({x: playerOne.bike.x, y: playerOne.bike.y})        
          playerOne.moveDown();     
          playerOneDirection = 83;
          collisionCheck();
          console.log('did this run?');             
          },300);
        };
      break;

      case 68:
        if(playerOneDirection === 65){ // Clear the interval when a self crash occurs. 
          window.clearInterval(playerOneMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP1();
        }
        else{
          window.clearInterval(playerOneMove); // Clears the interval when direction is changed.
          playerOneMove = setInterval(function() {
          travelLog.push({x: playerOne.bike.x, y: playerOne.bike.y})        
          playerOne.moveLeft();       
          playerOneDirection = 68;
          collisionCheck();
          console.log('did this run?');   
          },300);
        }
      break;

      case 65:
        if(playerOneDirection === 68){ // Clear the interval when a self crash occurs. 
          window.clearInterval(playerOneMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP1();
        }
        else{
          window.clearInterval(playerOneMove); // Clears the interval when direction is changed.
          playerOneMove = setInterval(function() {
          travelLog.push({x: playerOne.bike.x, y: playerOne.bike.y})        
          playerOne.moveRight();
          playerOneDirection = 65;
          collisionCheck();
          console.log('did this run?');             
          },300);
        }
      break;

      // Key Event Input - (Player 2: IJKL)
      case 73:
        if(playerTwoDirection === 75){
          window.clearInterval(playerTwoMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP2();
        }
        else{
          window.clearInterval(playerTwoMove);
          playerTwoMove = setInterval(function() {
          travelLog.push({x: playerTwo.bike.x, y: playerTwo.bike.y})
          playerTwo.moveUp();
          playerTwoDirection = 73;
          collisionCheck();       
          console.log('did this run?');   
          },300);
        }
      break;

      case 75:
        if(playerTwoDirection === 73){
          window.clearInterval(playerTwoMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP2();
        }
        else{
          window.clearInterval(playerTwoMove);
          playerTwoMove = setInterval(function() {
          travelLog.push({x: playerTwo.bike.x, y: playerTwo.bike.y})
          playerTwo.moveDown();
          playerTwoDirection = 75;
          collisionCheck();
          console.log('did this run?');             
          },300);
        }
      break;

      case 76:
        if(playerTwoDirection === 74){
          window.clearInterval(playerTwoMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP2();
        }
        else{
          window.clearInterval(playerTwoMove);
          playerTwoMove = setInterval(function() {
          travelLog.push({x: playerTwo.bike.x, y: playerTwo.bike.y})
          playerTwo.moveLeft();
          playerTwoDirection = 76;
          collisionCheck();      
          console.log('did this run?');                 
          },300);
        }
      break;
  
      case 74:
        if(playerTwoDirection === 76){
          window.clearInterval(playerTwoMove); 
          this.clear();
          trackPlayerScore();
          selfCrashP2();
        }
        else{
          window.clearInterval(playerTwoMove);
          playerTwoMove = setInterval(function() {
          travelLog.push({x: playerTwo.bike.x, y: playerTwo.bike.y})
          playerTwo.moveRight();
          },300);
          playerTwoDirection = 74;
          collisionCheck();        
          console.log('did this run?');               
        }
      break;

      default: console.log("You're moving!");
    }
  };

    function collisionCheck() {
      console.log(travelLog);
    travelLog.forEach(function (eachCoordinate){
      if(playerOne.bike.x === eachCoordinate.x && playerOne.bike.y === eachCoordinate.y ||
         playerTwo.bike.x === eachCoordinate.x && playerTwo.bike.y === eachCoordinate.y){
        setTimeout(function() {

          alert("COLLIDED!")
        }, 1);

        window.location.reload();
      }
    });
  };

  function trackPlayerScore(){
    playerOneScore = $('#player-1-score').text();
    playerTwoScore = $('#player-2-score').text();

    playerOneScore = parseInt(playerOneScore,10);
    playerTwoScore = parseInt(playerTwoScore,10);
  }

  function gameOver(){
    countdown();
  }

  function checkIfPlayerOneWins(){ // Should be combined into one CHECK IF PLAYER WON FUNCTION
    if(playerOneScore === 3){
      alert("Player One Wins!");
      playerTwoScore = 0;
      playerOneScore = 0; 
      $('#player-1-score').text(playerOneScore);
      $('#player-2-score').text(playerTwoScore);
      gameOver();
    }
  }

  function checkIfPlayerTwoWins(){ // Should be combined into one CHECK IF PLAYER WON FUNCTION
    if(playerTwoScore === 3){
      alert("Player Two Wins!");
      playerTwoScore = 0;
      playerOneScore = 0; 
      $('#player-1-score').text(playerOneScore);
      $('#player-2-score').text(playerTwoScore);     
    }
  }
  
  function selfCrashP1(){ // Should be combined into one SELF CRASH FUNCTION
    alert("Player 1 crashed into itslef!")
    playerTwoScore++;
    $('#player-2-score').text(playerTwoScore);
    checkIfPlayerOneWins();    
    checkIfPlayerTwoWins();    
  }

  function selfCrashP2(){ // Should be combined into one SELF CRASH FUNCTION
    alert("Player 2 crashed into itslef!")
    playerOneScore++;
    $('#player-1-score').text(playerOneScore);
    checkIfPlayerOneWins();    
    checkIfPlayerTwoWins();    
  }
};



