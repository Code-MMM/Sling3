const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, platform, chain, player, box1, box2, box3, platform2, box4, box5, box6, box7, box8;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  platform = new Box(600, 200, 50, 10, true);
  platform2 = new Box(700, 300, 100, 10, true);

  player = new Box(100, 150, 30, 30, false);

  chain = new Chain(player.body, {x: 200, y: 200});

  box1 = new Box(600, 150, 40, 10, false);
  box2 = new Box(600, 130, 30, 10, false);
  box3 = new Box(600, 110, 20, 10, false);

  box4 = new Box(700, 270, 80, 10, false);
  box5 = new Box(700, 255, 70, 10, false);
  box6 = new Box(700, 235, 60, 10, false);
  box7 = new Box(700, 215, 50, 10, false);
  box8 = new Box(700, 200, 40, 10, false);
}

function draw() {
  Engine.update(engine);
  background(0);  
  
  platform.display();

  player.display();

  chain.display();

  box1.display();
  box2.display();
  box3.display();

  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
 
  //drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
     chain.attach(player.body);
     Matter.Body.setPosition(player.body, {x: 200, y: 200});
     player.body.velocity.x = 0;
     player.body.velocity.y = 0;
  }
}