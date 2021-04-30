
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var BoxSide1, BoxSide2, BoxSide3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	paper = new Paper(600,200,20,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();

    BoxSide1Sprite = createSprite(680, 680, 200,20);
	
	BoxSide2Sprite = createSprite(580, 640, 20, 100);
	
	BoxSide3Sprite = createSprite(780, 640, 20, 100);
	

  
  drawSprites();
 
}



