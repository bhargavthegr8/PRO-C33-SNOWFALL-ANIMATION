const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bgImg,jumping;
var bg, boyJump;
var snows = [];

function preload(){
  bgImg = loadImage("snow3.jpg");
  snow = loadImage("snow5.webp")
}

function setup() {
  createCanvas(999,721);
  engine = Engine.create();
  world = engine.world;
}


function draw(){
  background(bgImg);
  Engine.update(engine);

  if(frameCount%5===0){
    for(var x = random(10,950); x<=width; x=x+random(10,999)){
      snows.push(new Snow(x,random(-200,0),20,20))
    }
  }

  for (var i = 0; i < snows.length; i++) {
    snows[i].display();   
  }
}