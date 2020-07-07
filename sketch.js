var wall,thickness;
var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 30, 15);
  fill("white");
  wall= createSprite(1200, 200,thickness,height/2);
  fill("yellow");

  bullet.velocityX = speed;
  
 
 
  speed = random(55,90);
  weight = random(400,1500)
  thickness = random(22,83)
}
function draw() {
  background("red");  
  
  drawSprites();
}