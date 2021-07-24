var starImg,bgImg;
var star, starBody;
var fairy, fairyimg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg = loadAnimation("images/fairyimage1.png","images/fairyimage2.png")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairy= createSprite(130,520);
fairy.addAnimation("fairy",fairyimg);
fairy.scale= 0.4;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
if (star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);
}
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x-=10;
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.x+=10;
	}
	if (keyCode === UP_ARROW) {
		fairy.y-=10;
	}
	
	
}
