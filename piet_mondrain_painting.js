function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230);
  noStroke();
  
  fill(255, 0, 0); 
  rect(0, 0, 130, 130 ); //red rect
  
  fill(0, 0, 255);
  rect(375, 130, 25, 90); //blue rect
  
  fill(255, 255, 51);
  rect(130, 385, 140, 25); //yellow rect
  
  fill(0);
  rect(270, 385, 105, 25); //black rect
  
  stroke(0);
  strokeWeight(10);
  line(130, 0, 130, 400);//left line 
  
  line(0, 130, 400, 130);//top line
  
  line(375, 130, 375, 400);// right line
  
  line(130, 385, 375, 385);// bot line
  
  line(375, 220, 400, 220);// short line
}
