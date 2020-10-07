var fixedRect, movingRect;
var ob1, ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 ob1 = createSprite(100,100,50,50)
 ob1.shapeColor = "green"
 ob2 = createSprite(200,100,50,50)
 ob2.shapeColor = "green"
 movingRect.velocityY = -5
 fixedRect.velocityY = 5
 movingRect.velocityX = -5
 fixedRect.velocityX = 5

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,ob1, ob2 )){
  movingRect.shapeColor = "blue";
  ob1.shapeColor = "blue";
  ob2.shapeColor = "blue";
 
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    

  }
bounceOff(movingRect, fixedRect)
  drawSprites();
}

