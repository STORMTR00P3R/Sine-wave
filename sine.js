let x, y, angle;

function setup() {
  createCanvas(600, 400);
  background(220);
  angle = 0;
  x = 0;
  y = 0;
  angleDelta = 0.01;
}

function draw() {
  // background(220);
  translate(width / 2, height / 2); // origin is the middle of the screen
  
  // X Axis
  line(-width, 0, width, 0);
  
  // Y Axis
  line(0, height, 0, -height);
  
  
  // Markers at (0, 1)
  line(-10, -100, 10, -100);
  text("(0, 1)", 15, -120)
  
   // Markers at (1, 1)
  line(100, 10, 100, -10);
  text("(1, 0)", 100, -10)
  
  // Markers at (0, -1)
  line(-10, 100, 10, 100);
  text("(0, -1)", 15, 100)
  
  // Markers at (-1, 0)
  line(-100, 10, -100, -10);
  text("(-1, 0)", -135, -25)
  
  // Unit Circle
  // circle(0, 0, 200);
  
  
  y = sin(angle);
  y = map(y, -1, 1, -100, 100);
  circle(x, y, 5);
  
  
  
  // x movement
  x += 0.5;
  if (x > (width / 2) || x < (-width / 2))  {
    x = -width / 2;
    angle = angle * -1.25;
  } 
  
  angle += angleDelta;
  console.log("(" + x + "," + y + ")")
}