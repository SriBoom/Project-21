var thickness,wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white"; 
  bullet.velocityX = speed;

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
}

function draw() {
  background(255,255,255);  

if(wall.x - bullet.x < (bullet.width + wall.width)/2)
{
  bullet.velocityX = 0;
  var deformation = 0.5 * width * speed * speed/22500;

  if(deformation < 100){
    bullet.shapeColor = color(0, 2550, 0);
  }

  if(deformation > 100 && deformation < 180){
    bullet.shapeColor = color(230, 230, 0);
  }

  if(deformation > 180){
    bullet.shapeColor = color(255, 0, 0);
  }
}

if(hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = color(255, 0 , 0)
  }

  if(damage < 10){
    wall.shapeColor = color(0, 255, 0);
  }
}


  drawSprites();
}

function hasCollided(bullet, wall){

bulletRightEdge = buller.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletrRightEdge>=wallLeftEdge){
  return true;
}

return false;

}