function setup() {
  createCanvas(400, 400);
}

var bally = 30;
var ballSpeed = 3;

var bally2 = 370;
var ballSpeed2 = 5;

function draw() {
  background(220);

  fill(255, 0, 0);
  ellipse(100, bally, 30);
  
  fill(0, 0, 255);
  ellipse(200, bally2, 30);

  bally = bally + ballSpeed;
  bally2 = bally2 + ballSpeed2;

  if (bally >= height) {
    ballSpeed = -3;
  }

  if (bally2 >= height) {
    ballSpeed2 = -5;
  }

  if (bally <= 0) {
    ballSpeed = 3;
  }

  if (bally2 <= 0) {
    ballSpeed2 = 5;
  }

}
