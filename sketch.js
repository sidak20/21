var fixedRect, movingRect;
var g1,g2,g3,g4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  g1 = createSprite(100,100,50,50);
  g2 = createSprite(200,100,50,50);
  g3 = createSprite(300,100,50,50);
  g4 = createSprite(400,100,50,50);

}

function draw() {
  background(0,0,0);  

  g1.x = World.mouseX;
  g1.y = World.mouseY;
  if(isTouching(g1,g2)){
    g2.shapeColor = "red";
    g1.shapeColor = "red";
  }
  else{
    g2.shapeColor = "green";
    g1.shapeColor = "green";
  }
 bounceOff(movingRect,fixedRect);
  drawSprites();
}

