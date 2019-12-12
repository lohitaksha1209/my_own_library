var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 80);
 fixedrect.shapeColor="green";
 movingrect= createSprite(400, 200, 80, 30);
movingrect.shapeColor="green";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 if (isTouching(movingrect,fixedrect))
 { 
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="pink";
 }
 else
 {
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
 }
  drawSprites();
}
