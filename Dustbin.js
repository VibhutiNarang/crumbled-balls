class Dustbin{ 
    constructor(x,y,width,height){
var options={
    isStatic : true,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
}
this.dustbin = loadImage("sprites/dustbin.png");
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width
this.height = height


World.add(world,this.body)
}
display(){
image = (this.dustbin,620,660);
rectMode(CENTER);
fill("red");
rect(this.body.position.x,this.body.position.y,this.width,this.height)

}
}