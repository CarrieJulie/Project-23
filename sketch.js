const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerImg, base1Img, base2Img;
var base1, base2, player, computer;

function preload(){
  playerImg = loadImage("./assets/player.png");
  base1Img = loadImage("./assets/base2.png");
  base2Img = loadImage("./assets/base1.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  //Create Player Base and Computer Base Object

  base1 = new playerBase(300,random(450,height-300),180,150);
  player = new Player(285,base1.body.position.y - 153, 50, 180);
  base2 = new computerBase(width-300, random(450, height-300), 180,150);
  computer = new Computer(width-280, base2.body.position.y-153, 50, 180);
  
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 
  base2.display();
  base1.display();

  //display Player and computerplayer
  player.display();
  computer.display();

}
