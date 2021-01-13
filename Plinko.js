class Ball{
    constructor(x,y){
        var options={
            density:1,
            friction:1,
            restitution:1
        };
        this.body=Matter.Bodies.circle(x,y,options);
        this.width=w;
        this.height=h;
        this.radius=10;
        Matter.World.add(world, this.body);
    }
display(){
   var pos=this.body.position;
   var angle=this.body.angle;
   rectMode(CENTER);
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   //console.log(angle);
    rect(0,0,this.width,this.height);
    pop();
    
}
}
