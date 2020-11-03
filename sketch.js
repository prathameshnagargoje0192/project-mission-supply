var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxBottom,boxRight,boxLeft;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var packageOptions = {restitution:1.0, isStatic:true}    Not needeed as value has been put ditectly in packageBody

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
boxBottom = createSprite(400,680,200,20);
boxBottom.shapeColor = "red";
//525 = right

//
boxLeft = createSprite(310,625/*npm init, npm i (pkg name),npm i*/,20,100);
boxLeft.shapeColor = "red";

boxRight = createSprite(490,625/*npm init, npm i (pkg name),npm i*/,20,100);
boxRight.shapeColor = "red";




	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-5, width,10);   //change is bold
	groundSprite.shapeColor=color("green");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-5, width, 10 , {isStatic:true} ); //changed is bold
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x      //changed here
  packageSprite.y= packageBody.position.y     //changed here packageBody P was written capital by you.
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);   //changed here you wrote Matter.Body.setStatic() where as namespacing is already done on the top as Body = Matter.Body;
  }
}