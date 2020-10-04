var wall,thickness;
var bullet,speed,weight;
var bullet2, bullet3;




function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);


  thickness = random(22,83);

  bullet=createSprite(50, 200, 40, 15);
  bullet.shapeColor = color("white");
  bullet.velocityX = speed;

  bullet2=createSprite(50, 250, 40, 15);
  bullet2.shapeColor = color("white");
  bullet2.velocityX = speed;

  bullet3=createSprite(50, 150, 40, 15);
  bullet3.shapeColor = color("white");
  bullet3.velocityX = speed;
  

  wall= createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = color (230,230,230);

 
}
function draw() {
  background(0);  
  if (hasCollided(bullet,wall)) 
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


    if (damage>10) {
      wall.shapeColor = color(255,0,0)
    }
    if (damage<10) {
      wall.shapeColor = color(0,255,0)
    }
  }

  if (hasCollided(bullet2,wall)) 
  {
    bullet2.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


    if (damage>10) {
      wall.shapeColor = color(255,0,0)
    }
    if (damage<10) {
      wall.shapeColor = color(0,255,0)
    }
  }

  if (hasCollided(bullet3,wall)) 
  {
    bullet3.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


    if (damage>10) {
      wall.shapeColor = color(255,0,0)
    }
    if (damage<10) {
      wall.shapeColor = color(0,255,0)
    }
  }

  drawSprites();
}
function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
 

  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){

    return true
  }
  

  return false;
}