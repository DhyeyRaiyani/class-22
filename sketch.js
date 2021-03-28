const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,395,800,10,options);
  World.add(world,ground);

  var ball_options = {
    restitution:1.0
  }
  
  ball = Bodies.circle(400,200,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  ellipse(ball.position.x,ball.position.y,20,20);
}



