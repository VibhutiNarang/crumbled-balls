class Ground{ 
    constructor(x,y){
var options={
    isStatic : true,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
}
this.body = Bodies.rectangle(x,y,1200,20,options);
this.width = 1200
this.height = 20

World.add(world,this.body)
}
display(){
rectMode(CENTER);

fill("yellow");
rect(600,680,this.width,this.height)

}
}