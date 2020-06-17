
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  thickness = random(22,83);
  wall = createSprite(600,200,thickness,height/2);
  wall.shapeColor = "red"
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,20,20);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255);
  bullet.depth = wall.depth+1;
  //console.log("hello");
}

function draw() {
  background(0);
  //bullet.collide(wall);
  if(hasCollided(bullet,wall))
  {
   bullet.velocityX = 0; 
   var damage =0.5 * weight * speed * speed/(thickness *thickness *thickness);  

  if(damage>10)
  {
   wall.shapeColor = color(255,0,0)  
  }

  if(damage<10)
  {
   wall.shapeColor = color(0,255,0);
  }

  }  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
     return true;
  }
   return false;
}