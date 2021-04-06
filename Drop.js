class Drop{
   constructor(x,y){
       var options = {
           friction: 0.001,
           restitution:0.1           
       }
       this.rain = Bodies.circle(x,y,5,options)
       this.radius = 5;
       World.add(world, this.rain);
   }

   updateY(){     
       if(this.rain.position.y > 2*height){

           Matter.Body.setPosition(this.rain, {x:random(0,1000), y:random(0,1000)})
       }
   }

   display(){
       fill("blue")
       //ellipseMode(CENTER);
       ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
   }
}

/*class Drop
{
    constructor(x,y)
 {
   var options = {
      isStatic : false,
 }
    this.body = Bodies.circle(x,y,options);
    World.add(world,this.body);
 }

 display()
 {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    fill("blue");
    pop();
 }

}*/

