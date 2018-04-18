// Countdown and then have it execute the draw functions.

window.onload = function () { 

  // var currentGame;
  // var canStart = true;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Constructor function for LightBikes
  const LightBike = function(bikeX, bikeY, bikeWidth, bikeHeight) {
    this.x = bikeX;
    this.y = bikeY;
    this.width = bikeWidth;
    this.height = bikeHeight;
  }
 
  // Constructor function for Players
  const Player = function(playerColor, bike) {
    this.color = playerColor;
    this.bike = bike;
    this.moveUp =   function() { this.bike.y -= 15; this.draw() },
    this.moveDown = function() { this.bike.y += 15; this.draw() },
    this.moveLeft = function() { this.bike.x -= 15; this.draw() },
    this.moveRight =function() { this.bike.x += 15; this.draw() },
    this.draw = function(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.bike.x, this.bike.y, this.bike.width, this.bike.height);
    }
    this.clear = function() {
      ctx.clearRect(this.bike.x, this.bike.y, this.bike.width, this.bike.height)
    }
  }

  const playerOne = new Player('blue', new LightBike(400, 300, 15, 15))
  const playerTwo = new Player('red', new LightBike(475, 300, 15, 15))

  playerOne.draw();
  playerTwo.draw(); 
    
  // console.log(playerOne);
  // console.log(playerTwo);


  // // playerOne() prototype.
  // Player.prototype = Object.create(LightBike.prototype);
  // Player.prototype.constructor = Player;

  // Player.prototype.draw = function(){
  //   ctx.fillStyle = this.color;
  //   ctx.fillRect(this.x, this.y, this.width, this.height);
  // }
 
  // var playerOne = new Player("red", 400, 300, 15, 15);
  // var playerTwo = new Player("blue", 475, 300, 15, 15);

  // var playerOne = { 
  //   x: 400,
  //   y: 300,
  //   width: 15,
  //   height: 15,
  //   moveUp:    function() { this.y -= 25 },
  //   moveDown:  function() { this.y += 25 },
  //   moveLeft:  function() { this.x -= 25 },
  //   moveRight: function() { this.x += 25 },
  //   draw: function(){
  //     ctx.fillStyle = this.color;
  //     ctx.fillRect(this.x, this.y, this.width, this.height);
  //   }
  // }

  
  // var playerTwo = {
    
  //   x: 475,
  //   y: 300,
  //   width: 15,
  //   height: 15,
  //   moveUp:    function() { this.y -= 25 },
  //   moveDown:  function() { this.y += 25 },
  //   moveLeft:  function() { this.x -= 25 },
  //   moveRight: function() { this.x += 25 },
  //   draw: function(){
  //     ctx.fillStyle = this.color;
  //     ctx.fillRect(this.x, this.y, this.width, this.height);
  //   }
  // }

 

  // // KeyCodes for playerOne (WASD)  NOT NEEDED?
  // playerOneKeys = {
  //   north: 87, // W
  //   south: 83, // S
  //   east: 68, // D 
  //   west: 65  // A
  // };

  // // KeyCodes for playerTwo (IJKL) NOT NEEDED?
  // playerTwoKeys = {
  //   north: 73, // I
  //   south: 75, // K
  //   east: 76, // L
  //   west: 74  // J
  // };

  document.onkeydown = function (e) { // The switch will break after one input is accepted. Need to turn this into IF statements? 
    console.log('switch', e.key) 
    switch (e.keyCode) {
      // Switch statement
        //cases for Key Event Input - (Player 1: WASD)
      case 87:
        playerOne.moveUp();
        break;
      case 83:
        playerOne.moveDown();
        break;
      case 68:
        playerOne.moveLeft();
        break;
      case 65:
        playerOne.moveRight();
        break;
      // Switch statement cases for Key Event Input - (Player 2: IJKL)
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
    }
  }

  // Switch Statement for Key Event Input - (Player 1: WASD)
  //   playerOne.move = function(keyCode) { 
  //   switch(keyCode){ // Updates the location of the bikes based on the key pressed.
  //     case 87:
  //     if(this.canMove(this.x - 5,this.y)){
  //       this.x -= 5;
  //     }
  //       break;
  //     case 83:
  //     if(this.canMove(this.x,this.y - 5)){
  //       this.y -= 5;
  //     }
  //       break;
  //     case 68:
  //     if(this.canMove(this.x + 5,this.y)){
  //       this.x += 5;
  //     }
  //       break;
  //     case 65:
  //     if(this.canMove(this.x,this.y + 5)){
  //       this.y += 5;
  //     }
  //       break;
  //     default: 
  //       // console.log("Oops!");
  //   };
  // };

  // Switch Statement for Key Event Input - (Player 2: IJKL)
  //     playerOne.move = function(keyCode) { 
  //     switch(keyCode){ // Updates the location of the bikes based on the key pressed.
  //       case 73:
  //       if(this.canMove(this.x - 5,this.y)){
  //         this.x -= 5;
  //       }
  //         break;
  //       case 75:
  //       if(this.canMove(this.x,this.y - 5)){
  //         this.y -= 5;
  //       }
  //         break;
  //       case 76:
  //       if(this.canMove(this.x + 5,this.y)){
  //         this.x += 5;
  //       }
  //         break;
  //       case 74:
  //       if(this.canMove(this.x,this.y + 5)){
  //         this.y += 5;
  //       }
  //         break;
  //       default: 
  //         // console.log("Oops!");
  //     } 
  //   }

};