
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinImage=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
  paper1=new Paper(200,200,25)
  wall1=new Wall(900,650,200,10);
	wall2=new Wall(800,610,20,90);
  wall3=new Wall(1000,610,20,90);
  
  ground1=new Ground(20,661,2500,10)
    

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine)
  paper1.display()
  wall1.display()
  wall2.display()
  wall3.display()
  ground1.display()
  rectMode(CENTER);
  imageMode(CENTER)
  image(dustbinImage,900,570,250,180) 
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-17})
  }
}




