var ballx = 300
var bally = 300
var ballSize = 50
var count = 0

function setup() {
 createCanvas(800, 600)
 textAlign(CENTER)
 textSize(30)

}

function draw() {
  background(225);

  levelOne();
  text(("CHASE THE BALL!"),width/2,50);
  text(("Count: " + count),width/2,80);
}

function levelOne(){
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    count = count + 1;
  }

  if(count> 5){
    background(225, 0, 0);
  }
  if(count> 10){
    background(255, 77, 0);
   ballSize = ballSize -5;
  }
  if(count> 15){
    background(255, 116, 0);
      ballSize = ballSize -5;

  }
  if(count> 20){
    background(255, 167, 0);
      ballSize = ballSize -5;

  }
  if(count> 25){
    background(255, 225, 0);
      ballSize = ballSize -5;

  }
  if(count> 30){
    background(128,255,0);
  }
  if(count> 35){
    background(17,147,0);
  }
  if(count> 40){
    background(87,246,218);
  }
  if(count> 45){
    background(0,184,255);
  }
  if(count> 50){
    background(0, 0, 225);
  }
  if(count> 55){
    background(25,25,112);
  }
  if(count> 60){
    background(50,18,122);
  }
  if(count> 65){
    background(131,0,196);
  }
  if(count> 70){
    background(208,29,155);
  }
  if(count> 75){
    background(255,98,137);
  }
  if(count> 80){
    background(244,13,48);
  }


  ellipse(ballx, bally, ballSize)
}
