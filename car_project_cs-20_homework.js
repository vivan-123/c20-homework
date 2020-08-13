var car,wall,speed,weight,d;

function setup() 
{

    createCanvas(1600,400)

    speed = random(20,180);
    weight = random(350,1000);

    car = createSprite(150,200,100,45);
    car.velocityX = speed;
    wall = createSprite(1400,200,100,300);

    
}

function collide(car,wall)
{
   var collisionFlag = 
   ( 
        car.x - wall.x < car.width/2 + wall.width/2 && 
        wall.x - car.x < car.width/2 + wall.width/2 &&
        car.y - wall.y < car.height/2 + wall.height/2 && 
        wall.y - car.y < car.height/2 + wall.height/2
  );

  //alert(collisionFlag);

  return collisionFlag;

}

function draw() 
{

    background("white");

    d = 0.5*weight*speed*speed/22500;

    car.shapeColor = "blue";
    wall.shapeColor = "gray";

    if ( collide(car,wall))
    {
        car.velocityX = 0;
     
        if (d < 100)
        {
          car.shapeColor = "green";        
        }
        
        if (d > 100 && d < 180)
        {
          car.shapeColor = "yellow";        
        }

        if (d > 180)
        {
          car.shapeColor = "red";        
        }
    }


    drawSprites();

}