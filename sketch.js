var bullet, wall;
var speed, weight;
var damage;
var thickness;


function setup() {

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22, 83);


  createCanvas(1600,400);
 bullet=createSprite(5,200,50,20);
 bullet.velocityX=speed;
 bullet.shapeColor="cyan";

 wall=createSprite(1500,200,thickness, 200);
wall.shapeColor="grey";

damage=0.5*weight*speed*speed/thickness/thickness/thickness;

  
  
  
}

function draw() {
  background("black");  
  
if(bullet.isTouching(wall)){
  bullet.velocityX=0;
 

      if(damage<=10){
        wall.shapeColor="lime";
      }
      if(damage>10){
        wall.shapeColor="red";
      }
      
    }

  drawSprites();
  
}