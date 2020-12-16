
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var ground;
var paper;
var dustbin;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	ground.shapeColor = "yellow"

	paper = new Paper(200,450,40);

	dustbin = new Dustbin(1100,650);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  ground.display();
  dustbin.display();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

}	
}



