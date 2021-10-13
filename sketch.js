
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var dustbin1,dustbin2,dustbin3
var paperBall,paper

function preload()
{
	
    
}

function setup() {
	createCanvas(1200,700);

	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(550,620,20,100);
	box2 = new Dustbin(700,620,20,100);
	box3 = new Dustbin(620,660,150,20);
	
	//Create the Bodies Here.

	paper = new Paper(100,600,15)

    ground = new Ground(600,680,1200,20);
	fill("yellow");

	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   ground.display()

   box1.display();
   box2.display();
   box3.display();

   paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:35,y:-35})
	}
}


