window.onload = function () { // Fired when the entire page loads, including its content.

  // var currentGame;
  // var canStart = true;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Constructor function for LightBikes
  function LightBike(bikeX, bikeY, bikeWidth, bikeHeight) {
    this.x = bikeX;
    this.y = bikeY;
    this.width = bikeWidth;
    this.height = bikeHeight;
  }

  function Player(playerColor, bikeX, bikeY, bikeWidth, bikeHeight) {
    LightBike.call(this, bikeX, bikeY, bikeWidth, bikeHeight);
    this.color = playerColor;
    
    // moveUp: function(){ this.x -= 5; },
  
    // moveDown: function(){ this.y -= 5; },
  
    // moveLeft: function(){ this.x += 5; },
  
    // moveRight: function(){ this.y += 5; },
  // }
  }
  
      // Player.prototype.moveUp = function(){
      //   this.x -= 5;
      // }
    
      // Player.prototype.moveDown = function(){
      //   this.y -= 5;
      // }
    
      // Player.prototype.moveLeft = function(){
      //   this.x += 5;
      // }
    
      // Player.prototype.moveRight = function(){
      //   this.y += 5;
      // }
  
  // playerOne() prototype.
  Player.prototype = Object.create(LightBike.prototype);
  Player.prototype.constructor = Player;

  Player.prototype.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

 
  var playerOne = new Player("red", 400, 300, 15, 15);
  var playerTwo = new Player("blue", 475, 300, 15, 15);

  console.log(playerOne);

  playerOne.draw();
  playerTwo.draw();  

  // KeyCodes for playerOne (WASD)
  playerOneKeys = {
    north: 87, // W
    south: 83, // S
    east: 68, // D 
    west: 65  // A
  };

  // KeyCodes for playerTwo (IJKL)
  playerTwoKeys = {
    north: 73, // I
    south: 75, // K
    east: 76, // L
    west: 74  // J
  };

  document.onkeydown = function (e) {
    console.log(e);
    switch (e.keyCode) {
      // Switch statement cases for Key Event Input - (Player 1: WASD)
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


