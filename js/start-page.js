// Once all HTML elements have finished loading, run the following code.
$(document).ready(function () {

  // CREATE THE CANVAS
  var canvas = document.getElementById("canvas") // Retrieves the Canvas node from the DOM
  var ctx = canvas.getContext("2d"); // Allows us to access the drawing's context. 

  var img = new Image();
  imgScale = 640/480;
  img.onload = function() {
  ctx.drawImage(img, 250, 485,150,150);
  };
  img.src = 'https://static1.squarespace.com/static/56e2e0c520c6472a2586add2/t/594d23b7e6f2e1d4a11b69a3/1498231447084/?format=500w';


  ctx.font = "94px Orbitron";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText("Light Bikes", canvas.width / 2, canvas.height / 2 - 50);
  ctx.font = "24px Orbitron";
  ctx.fillText("Created by Ryan Martin at IronHack Miami", canvas.width / 2, canvas.height / 2 + 35);
});