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
  var Player = function(id, playerColor, bike){
    this.id = id
    this.color = playerColor;
    this.bike = bike;
    this.delta  = 15;
    this.travelLog = [];
    this.score = 0;
    this.opponent = {};
    this.direction = null;
    this.enteredKeyCode = null;
    this.updateScoreboard = function() {
      $(this.id).text(this.score);
    } 

    this.isWithinBoundary =  function() {
      return (this.bike.y > -1 && this.bike.x > -1) && (this.bike.y < 650 && this.bike.x < 950)
    }
    this.move =  function(bike, direction){
    
      if(this.isWithinBoundary()){
        if (direction === 'UP') {
          bike['y'] -= this.delta;
        } else if (direction === 'DOWN') {
          bike['y'] += this.delta;
        } else if  (direction === 'LEFT') {
          bike['x'] += this.delta;
        } else if (direction === 'RIGHT') {
          bike['x'] -= this.delta;
        } 
        this.draw();
      }
      else{
        window.clearInterval(playerOneMove, playerTwoMove); // Clear the interval for P1 when a border crash occurs.
        this.clear();
        borderCollision();
      }
    }

    this.moveUp   = function(){
      this.move(this.bike, "UP")
    }; 
    this.moveDown = function(){
      this.move(this.bike, "DOWN")
    }; 
    this.moveRight= function(){
      this.move(this.bike, "RIGHT")
    };
    this.moveLeft = function(){
      this.move(this.bike, "LEFT")
    };

     // Accepts movementLeft from the switch statements and then re-draws the player object.
    this.draw = function(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.bike.x, this.bike.y, this.bike.width, this.bike.height);
    };
    this.clear = function() {
      ctx.clearRect(this.bike.x, this.bike.y, this.bike.width, this.bike.height)
    };

    this.intervalCallback = function(enteredKeyCode, direction) {
      let { x, y } = this.bike;
      this.travelLog.push({ x, y})
      this[direction]();
      //collisionCheck();
      this.enteredKeyCode = enteredKeyCode;
      }
  };

  var GameManager = function(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;

    this.startGame = function() {
      this.playerOne.draw();
      this.playerTwo.draw();
    }

    this.alterScore = function(player) {
      player.score += 1;
      player.updateScoreboard();
    }

    this.isGameOver = function(){
      let playerOneScore = this.playerOne.score;
      let playerTwoScore = this.playerTwo.score;

      return (playerOneScore >= 3 || playerTwoScore >= 3) 
    }
    this.announceWinner = function() {
      let playerOneScore = this.playerOne.score;
      let playerTwoScore = this.playerTwo.score;

      if (playerOneScore > playerTwoScore) {
        alert("Player One Wins")
      } else {
        alert("Player Two Wins")
      }
    }

    this.switchHandler = function(eventKeyCode, enteredKeyCode, player, opponent, direction) {
      if(player.enteredKeyCode === enteredKeyCode) {
        window.clearInterval(player.interval); 
        this.alterScore(opponent);
      } else {
        window.clearInterval(player.interval); 
        this.playerOne.interval = setInterval(player.intervalCallback(eventKeyCode, direction), 300)
        this.didPlayerCollide(player, opponent, direction)
      }
    }

    this.didPlayerCollide = function(player, opponent, direction) {
      let {x, y } = player.travelLog[player.travelLog.length - 1];
      let playerX = x;
      let playerY = y;

      opponent.travelLog.map(function({x, y}) {
        let opponentX = x;
        let opponentY = y;

          console.log("check", (playerX + 15), opponentX, direction, ["moveLeft", "moveRight"].includes(direction) )
          if ((playerX + 15) === opponentX && ["moveLeft", "moveRight"].includes(direction)) {
            alert("Collided")
          }
          
          if ((playerY - 15) === opponentY && ["moveUp", "moveDown"].includes(direction)) {
            alert("Collided!")
          }
      })
    }

    this.onKeyDownHandler = function(event) {

      // console.log('p1', this.playerOne.travelLog)
      // console.log('p2', this.playerTwo.travelLog)
      if ([87,83,65,68].includes(event.keyCode)) {
        switch(event.keyCode) {
          case 87: {
            this.switchHandler(event.keyCode, 83, this.playerOne, this.playerTwo, "moveUp")
            break;
          }
          case 83: {
            this.switchHandler(event.keyCode, 87, this.playerOne, this.playerTwo, "moveDown")
            break;
          }
          case 65: {
            this.switchHandler(event.keyCode, 68, this.playerOne, this.playerTwo, "moveRight")
            break;
          }
          case 68: {
            this.switchHandler(event.keyCode, 65, this.playerOne, this.playerTwo, "moveLeft")
            break;
          }
        }    
      }

      if ([75,73,74,76].includes(event.keyCode)) {
        switch(event.keyCode) {
          case 73: {
            this.switchHandler(event.keyCode, 75, this.playerTwo, this.playerOne, "moveUp")
            break;
          }
          case 75: {
            this.switchHandler(event.keyCode, 73, this.playerTwo, this.playerOne, "moveDown")
            break;
          }
          case 74: {
            this.switchHandler(event.keyCode, 76, this.playerTwo, this.playerOne, "moveRight")
            break;
          }
          case 76: {
            this.switchHandler(event.keyCode, 74, this.playerTwo, this.playerOne, "moveLeft")
            break;
          }
        }

      }



      if (this.isGameOver()) {
        this.announceWinner()
      }

    }
  }


  // Creates each of the player objects from the Player constructor.
  var playerOne = new Player('#player-1', 'red', new LightBike(425, 300, 15, 15));
  var playerTwo = new Player('#player-2', 'blue', new LightBike(500, 300, 15, 15));

  let gameManager = new GameManager(playerOne, playerTwo);

 document.onkeydown = function(e) {
   gameManager.onKeyDownHandler(e)
 }

 

 
  
  // function collisionCheck() {
  //   console.log("Collision check")
  //   travelLog.forEach(function (eachCoordinate){
  //     console.log(eachCoordinate.x, eachCoordinate.y)
     
  //     if(playerOne.bike.x === eachCoordinate.x && playerOne.bike.y === eachCoordinate.y){
  //       console.log("COLLIDED!")
  //     }
  //   });
  // };
  
  // travelLog.forEach(function(coordinate, index){
  //   if(index !==0){
  //     if(coordinate.x === eachCoordinate.x && coordinate.y === eachCoordinate.y){
  //       alert("hello!")
  //     }
  //   }

  // });


  // for(i = 0; i < travelLog.length; i++){
    //   console.log("collision for loop")
    //   if(playerOne.bike.x === travelLog.playerX[i] && playerOne.bikeY === travelLog.playerY[i]){
    //     console.log("collision if statement")
    //     alert("Game Over - Collision!")
    //   }
    // }
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
         gameManager.startGame();
      }
    },1000); // = One Second
  }

  // Starts the countdown by calling the countdown function.
  countdown();
};



