var shooter,bgImg

function preload() {
  bgImg=loadImage("background1.webp")
}
function setup() {
  createCanvas(1500,800);
  shooter=createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);
 
  //w for moving up
  if(keyDown("w")) {
    shooter.y=shooter.y-2
  }

    //a for moving left
    if(keyDown("a")) {
      shooter.x=shooter.x-2
    }

      //s for moving down
  if(keyDown("s")) {
    shooter.y=shooter.y+2
  }

    //d for moving right
    if(keyDown("d")) {
      shooter.x=shooter.x+2
    }
  drawSprites();
}