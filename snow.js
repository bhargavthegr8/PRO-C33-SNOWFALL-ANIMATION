class Snow{
    constructor(x, y,width, height) {
        var options = {
            restitution: 1,
            frictionAir: 0.3,
            isStatic:false
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(snow, pos.x, pos.y,this.width,this.height)
        pop();
    }

};