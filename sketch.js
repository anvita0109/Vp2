
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var boxSide1, boxSide2, boxSide3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100, 500, 50);

	ground = new Ground(600, 550, 1200, 20);

	boxSide1 = new Dustbin(1000, 530, 200, 20);
	boxSide2 = new Dustbin(900, 470, 20, 100);
	boxSide3 = new Dustbin(1100, 470, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball.display();
  ground.display();
  boxSide1.display();
  boxSide2.display();
  boxSide3.display();

  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y:-45})
	}



}

