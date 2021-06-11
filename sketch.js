const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bongObject1,bongObject2,bongObject3, bongObject4,bongObject5, upperObject
var string1,string2,string3, string4,string5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	upperObject=new upper(width/2,height/4,width/7,20);

	bongDiameter=40;

	startbongPositionX=width/2;
	startbongPositionY=height/4+500;
	bongObject1=new bong(startbongPositionX-bongDiameter*2,startbongPositionY,bongDiameter);
	bongObject2=new bong(startbongPositionX-bongDiameter,startbongPositionY,bongDiameter);
	bongObject3=new bong(startbongPositionX,startbongPositionY,bongDiameter);
	bongObject4=new bong(startbongPositionX+bongDiameter,startbongPositionY,bongDiameter);
	bongObject5=new bong(startbongPositionX+bongDiameter*2,startbongPositionY,bongDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	string1=new string(bongObject1.body,upperObject.body,-bongDiameter*2, 0)

	string2=new string(bongObject2.body,upperObject.body,-bongDiameter*1, 0)
	string3=new string(bongObject3.body,upperObject.body,0, 0)
	string4=new string(bongObject4.body,upperObject.body,bongDiameter*1, 0)
	string5=new string(bongObject5.body,upperObject.body,bongDiameter*2, 0)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  upperObject.display();

  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()	
  bongObject1.display();
  bongObject2.display();
  bongObject3.display();
  bongObject4.display();
  bongObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bongObject1.body,bongObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bongBodyPosition=constraint.bodyA.position
	upperBodyPosition=constraint.bodyB.position

	upperBodyOffset=constraint.pointB;
	
	upperBodyX=upperBodyPosition.x+upperBodyOffset.x
	upperBodyY=upperBodyPosition.y+upperBodyOffset.y
	line(bongBodyPosition.x, bongBodyPosition.y, upperBodyX,upperBodyY);
}
