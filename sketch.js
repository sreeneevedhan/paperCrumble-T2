
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1,box2,box3;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(1000,430,200,20);
	box2 = new Box(900,340,20,200);
	box3 = new Box(1100,340,20,200);
	paperObject = new Ball(100,100,50);

	var groundOptions ={
        isStatic: true
    }
   ground = Bodies.rectangle(600,450,1200,20,groundOptions);
   World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  rect(ground.position.x,ground.position.y,1200,20);
  
 

box1.display();
box2.display();
box3.display();
paperObject.display();

}


function keyPressed() {
	
	if (keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(paperObject.paperObject,paperObject.paperObject.position,{x:440,y:-440} );
		
	    
		} 
}
