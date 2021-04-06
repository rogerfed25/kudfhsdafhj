
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var rand;
var maxDrops=100;

var t1,t2,t3,t4;
var thunderframe = 0
var thunder,rand;

function preload()
{
  t1= loadImage("images/thunderbolt/1.png");
  t2= loadImage("images/thunderbolt/2.png");
  t3= loadImage("images/thunderbolt/3.png");
  t4= loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

   createCanvas(500,700);

   umbrella = new Umbrella(400,900);

   if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,1000), random(0,1000)));
    }

}

}

function draw(){
    Engine.update(engine);
    background(0);

   rand = Math.round(random(1,4));
    if(frameCount%80 ===0)
    {
        thunderframe = frameCount;
        thunder = createSprite(random(10,500), random(10,100),10,10);
        switch(rand)
        {
           case 1 : thunder.addImage(t1);
            break;

            case 2 : thunder.addImage(t2);
            break;

            case 3 : thunder.addImage(t3);
            break;

            case 4 : thunder.addImage(t4);
            break;
       
        }

        thunder.scale = random(0.3,0.6);
    }

if(thunderframe+10 ===frameCount && thunder)
{
    thunder.destroy();
}

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }
    drawSprites();
}
