class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
         //this.image = loadImage("images/Walking Frame/w1.png");
        this.image = loadAnimation("images/Walking Frame/w1.png",
                                "images/Walking Frame/w2.png",
                                "images/Walking Frame/w3.png",
                                "images/Walking Frame/w4.png",
                                "images/Walking Frame/w5.png",
                                "images/Walking Frame/w6.png",
                                "images/Walking Frame/w7.png",
                                "images/Walking Frame/w7.png");

 
        this.umbrella = Bodies.circle(x,y,15,options);
        this.radius = 15;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        
        imageMode(CENTER);
        scale(0.5)
        animation(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
    }
}