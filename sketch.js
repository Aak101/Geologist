
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,stone1, rubber1, hammer1  ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,650,900,100);
	stone1 = new Rock(300,500,40,40);
	hammer1 = new Hammer(300,300,75,25);
	rubber1 = new Rubber(450,500,50);

	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  



  drawSprites();
hammer1.display();
ground1.display();
stone1.display();
rubber1.display();
}



