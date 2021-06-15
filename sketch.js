const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1, box2;
var engine, world;
var ground;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1=new Box(200,300,50,100);
box2=new Box(240,100,50,100);
ground=new Ground(200,370,400,20);
}

   


function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   ground.display();
}