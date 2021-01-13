var world;
var ball, engine, World
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  createCanvas(400,650);
  engine=Engine.create();
  world=engine.world;
 ground1= new Ground(200,600,800,10);
division1= new Baseclass(200,500,10,200);
division2=  new Baseclass(300,500,10,200);
division3= new Baseclass(100,500,10,200);
division4= new Baseclass(5,500,10,200);
division5= new Baseclass(395,500,10,200);
plinko1= new Ball(200,300,30,30);
}

function draw() {
  background(20);
  Matter.Engine.update(engine);
  Ground1.display();
  plinko1.display();
 ground1.display();
 division1.display();
 division2.display();
 division3.display();
 division4.display();
 division5.display();
 for (var j=40; j<=this.width; j=j+50){
  plinkos.push(new Ball(j,75));
}
for (var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Ball(j,175));
}
if(frameCount%60==0){
  particles.push(new Ball(random(width/2-10,width/2+10),10,10));
}
for(var j=0; j<particles.length; j++){
  particles(j).display();
}
for(var k=0; k<divisions.length;k++){
  divisions[k].display();
}
  drawSprites();
}