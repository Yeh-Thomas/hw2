function setup() {
  createCanvas(400, 400);
}

var ballx = 100;  // yellow ball
var bally = 30;
var ballxSpeed = 3
var ballySpeed = 3;

var ballx2 = 300; // green ball
var bally2 = 370;
var ballxSpeed2 = 5;
var ballySpeed2 = 1;

var ballx3 = 50; // pink ball
var bally3 = 25;
var ballxSpeed3 = 2;
var ballySpeed3 = 4;


var ballShape = 50;
var ballSize = 5

function draw() {
  background(220);

  fill(205, 255, 0);
  ellipse(ballx, bally, ballShape); // yellow ball
  
  fill(0, 250, 206);
  ellipse(ballx2, bally2, ballShape); // green ball
  
  fill(229, 204, 255, 150);
  ellipse(ballx3, bally3, ballShape);

  ballx = ballx + ballxSpeed; // yellow ball
  bally = bally + ballySpeed; 
  
  ballx2 = ballx2 + ballxSpeed2; // green ball
  bally2 = bally2 + ballySpeed2;

  ballx3 = ballx3 + ballxSpeed3; // green ball
  bally3 = bally3 + ballySpeed3;
  
  ballShape = ballShape + ballSize ;
  
  if ( ballShape >= width ) {
    ballSize =  -1;
  }
  
  if ( ballShape <= 0){
    ballSize = 1;
  }
  
  if ( ballx >= width ) {
    ballxSpeed = -5;
  }  // yellow ball
  
  if ( ballx <= 0){
    ballxSpeed = 5;
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
    ballxSpeed2 = 5;
  } // green ball
  
  if (bally2 >= height) {
    ballySpeed2 = -5;
  } // green ball
 
  if (bally2 <= 0) {
    ballySpeed2 = 5;
  }// green ball
  
  if ( ballx3 >= width ) {
    ballxSpeed3 = -5;
  }  // pink ball
  
  if ( ballx3 <= 0){
    ballxSpeed3 = 5;
  } // pink ball
  
  if (bally3 >= height) {
    ballySpeed3 = -5;
  } // pink ball
 
  if (bally3 <= 0) {
    ballySpeed3 = 5;
  } // pink ball

}
