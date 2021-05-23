class Bob{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8,
        }
        this.r = 25
        this.body = Bodies.circle(x,y,25,options)
        World.add(world,this.body);

        //console.log(this.body)

    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}