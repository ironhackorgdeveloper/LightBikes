window.onload = function() {

  var currentGame;
  var canStart = true;

  // Constructor function for LightBikes
  function LightBike(xCoordinate, yCoorinate, width, height, direction){
    this.xCoordinate = canvasWidth / 2;
    this.yCoorinate = canvasHeight / 2;
    this.width = 10;
    this.height = 10;
    // this.direction = ;
  }

  // playerOne() prototype.
  LightBike.prototype.playerOne = function(){
      color: "red";
      x: 925;
      y: 625;
      width: 15;
      height: 15;
      draw: this.playerOne = function(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
  playerOne.draw();
  };

  // playerTwo() prototype.
  LightBike.prototype.playerTwo = function(){
    color: "blue";
    x: 925;
    y: 625;
    width: 15;
    height: 15;
    draw: this.playerTwo = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    };
  playerTwo.draw();    
  };

  // function draw(){
  //   var canvas = document.getElementById('canvas');
  //   var ctx = canvas.getContext('2d');
  //   playerOne.draw();
  //   playerTwo.draw();
  // }

  // KeyCodes for playerOne (WASD)
  playerOneKeys = { 
    north: 87, // W
    south: 83, // S
    east:  68, // D 
    west:  65  // A
  };

  // KeyCodes for playerTwo (IJKL)
  playerTwoKeys = { 
    north: 73, // I
    south: 75, // K
    east:  76, // L
    west:  74  // J
  };

  document.onkeydown = function(event){
    var directionCode = event.which; // Works with player prototypes to accept movement.
    playerOne.move(directionCode); 
    playerTwo.move(directionCode); 
    if(event.which === playerOneKeys.north || event.which === playerOneKeys.south 
      || event.which === playerOneKeys.east || event.which === playerOneKeys.west 
      || event.which === playerTwoKeys.north || event.which === playerTwoKeys.south 
      || event.which === playerTwoKeys.east || event.which === playerTwoKeys.west){
      event.preventDefault();  // Doesn't let the page scroll. 
    } 
  };

  // Switch Statement for Key Event Input (Player 1: WASD) (Player 2: IJKL)
    playerOne.move = function(keyCode) { 
    switch(keyCode){ // Updates the location of the bikes based on the key pressed.
      case 87:
      if(this.canMove(this.x - 5,this.y)){
        this.x -= 5;
      }
        break;
      case 83:
      if(this.canMove(this.x,this.y - 5)){
        this.y -= 5;
      }
        break;
      case 68:
      if(this.canMove(this.x + 5,this.y)){
        this.x += 5;
      }
        break;
      case 65:
      if(this.canMove(this.x,this.y + 5)){
        this.y += 5;
      }
        break;
      default: 
        console.log("Oops!");
    };
  };

  // Switch Statement for Key Event Input (Player 1: WASD) (Player 2: IJKL)
    playerOne.move = function(keyCode) { 
    switch(keyCode){ // Updates the location of the bikes based on the key pressed.
      case 73:
      if(this.canMove(this.x - 5,this.y)){
        this.x -= 5;
      }
        break;
      case 75:
      if(this.canMove(this.x,this.y - 5)){
        this.y -= 5;
      }
        break;
      case 76:
      if(this.canMove(this.x + 5,this.y)){
        this.x += 5;
      }
        break;
      case 74:
      if(this.canMove(this.x,this.y + 5)){
        this.y += 5;
      }
        break;
      default: 
        console.log("Oops!");
    } 
  }
}
