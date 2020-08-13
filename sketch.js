var mr,fr;
function setup() {
  createCanvas(1200,800);
  mr = createSprite(400, 400, 80, 30);
  mr.shapeColor = "green";

  fr = createSprite(600,400,50,80);
  fr.shapeColor = "green";
}

function draw() {
  background(255,255,255);

  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if (mr.x - fr.x < mr.width/2 + fr.width/2 && 
      fr.x - mr.x < mr.width/2 + fr.width/2 &&
      mr.y - fr.y < mr.height/2 + fr.height/2 && 
      fr.y - mr.y < mr.height/2 + fr.height/2 )
  {
    fr.shapeColor = "red";
    mr.shapeColor = "red";
  }

  else 
  {
    fr.shapeColor = "green";
    mr.shapeColor = "green";
  }
  drawSprites();
}