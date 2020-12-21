
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;



function preload()
{
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	paper = new Paper(50,600,20);
	Engine.run(engine);

	
  
}

function keyPressed (){
	if (keycode === UP_ARROW)

	Matter.Body.applyForce(papaerObject.body,paperObject.body.position,{x:85,y:-85});
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
 dustbin.display();
  
  drawSprites();
 
}



