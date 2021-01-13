class Log{
    constructor(x,y,r){
    var options={
        restitution:1
    }  
    this.r=r; 
this.body=Matter.Bodies.rectangle(x,y,this.r,options);
this.color=color(random(0,255), random(0,255),random(0,255));
Matter.World.add(world,this.body);

    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;

push();
translate(pos.x,pos.y);
   rotate(angle);
noStroke();
fill(this.color);
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
    pop();
    }
}