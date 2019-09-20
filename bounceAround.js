function setup() {
  createCanvas(400, 400);
}

var ballx = 100;  // yellow ball
var bally = 30;
var ballxSpeed = 3
var ballySpeed = 3;

var ballx2 = 300;
var bally2 = 370;
var ballxSpeed2 = 5;
var ballySpeed2 = 5;

function draw() {
  background(220);

  fill(255, 255, 0);
  ellipse(ballx, bally, 50); // yellow ball
  
  fill(0, 255, 0);
  ellipse(ballx2, bally2, 50); // green ball

  ballx = ballx + ballxSpeed; // yellow ball
  bally = bally + ballySpeed; 
  
  ballx2 = ballx2 + ballxSpeed2; // green ball
  bally2 = bally2 + ballySpeed2;

  if ( ballx >= width ) {
    ballxSpeed = -5;
  }  // yellow ball
  
  if ( ballx <= 0){
    ballxSpeed = 9;
  } // yellow ball
  
  if (bally >= height) {
    ballySpeed = -3;
  } // yellow ball

   if (bally <= 0) {
    ballySpeed = 3;
  } // yellow ball
  
  if ( ballx2 >= width ) {
    ballxSpeed2 = -5;
  }  // green ball
  
  if ( ballx2 <= 0){
    ballxSpeed2 = 9;
  } // green ball
  
  if (bally2 >= height) {
    ballySpeed2 = -5;
  } // green ball
 
  if (bally2 <= 0) {
    ballySpeed2 = 5;
  }// green ball

}
