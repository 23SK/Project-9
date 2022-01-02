
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)) {
    background("red");
  }

  if (keyIsDown(LEFT_ARROW)) {
    background("blue");
  }

  if (keyIsDown(UP_ARROW)) {
    background("yellow");
  }

  if (keyIsDown(DOWN_ARROW)) {
    background("green");
  }

  drawSprites();
}

