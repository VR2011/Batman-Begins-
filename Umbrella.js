class Umbrella{
    constructor(x, y, radius){
        var options ={
            isStatic: true
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("umbrella.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2.5, this.radius*2.5);
        pop();
    }
}