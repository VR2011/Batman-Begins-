class Drops {
    constructor(x, y, radius) {
        var options = {
            'restituiton': 0.4,
            'friction': 0.1,
            'density': 0.5
        }
        this.radius = radius;
        this.rain = Bodies.circle(x, y, radius, options);
        World.add(world, this.rain);
    }
    display() {
        var pos = this.rain.position;
        noStroke();
        fill("blue");
        circle(pos.x, pos.y, this.radius);
    }
}