
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Bod = Matter.Body; 

var ball 
var groundObj
var leftside
var rightside

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var ball_options ={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
  }

  groundObj = new Ground(width/2,670,width,20)
  leftside = new Ground(500, 600, 20, 120)
  rightside = new Ground(600, 600, 20, 120)
  console.log(rightside)
 console.log(leftside)
 console.log(rightside)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine)
//   ellipse(ball.position.x,ball.position.y,20);
//   rect(groundObj.position.x,groundObj.position.y,width,20);
//   rect(leftside.position.x,leftside.position.y,20,120);
//   rect(rightside.position.x,rightside.position.y,);
groundObj.show()
leftside.show()
rightside.show()
ellipse(ball.position.x,ball.position.y,20);


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		(hForce)
		(vForce)
		  }
	}


	function hForce(){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.02, y:0})
	  }
	  
	  function vForce(){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.03})
	  }


