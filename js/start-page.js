// Once all HTML elements have finished loading, run the following code.
$(document).ready(function () {

  // CREATE THE CANVAS
  var canvas = document.getElementById("canvas") // Retrieves the Canvas node from the DOM
  var ctx = canvas.getContext("2d"); // Allows us to access the drawing's context. 

  ctx.font = "84px Impact";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText("Light Bikes", canvas.width / 2, canvas.height / 2 - 50);
  ctx.font = "18px Arial";
  ctx.fillText("Created by Ryan Martin at IronHack Miami", canvas.width / 2, canvas.height / 2 + 35);
});