const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drop = []; 
var thor;

function setup() {
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(400, 800);
    umbrude = new Umbrella(200, 650, 100);
    thor = loadImage("thor.png");
}

function draw() {
    background("black");
    Engine.update(engine);
    umbrude.display();
    if (frameCount%100===0 || frameCount%101===0 || frameCount%102===0 || frameCount%103===0 || frameCount%104===0) {
        image(thor, 100, -10, 250, 150);
    }
    else {
        image(thor, 100, -500, 250, 150);
    }
    for(var i = 0; i < drop.length; i++) {
        drop[i].display();
    }
    if(frameCount % 1 === 0){
        drop.push(new Drops(random(0, 400), random(-1000, -100), 5));
    }
    drawSprites();
    console.log(frameCount);
}

function update() {
    var pos = this.rain.position;
    if(pos.y > 800) {
        Matter.body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)});
    }
}