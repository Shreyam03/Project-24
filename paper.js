class Paper{
    constructor()
    {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:.5,
        density:1.2,
    }
    this.body=Bodies.circle(40,600,20,options);
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipse(pos.x,pos.y,this.body.radius);
    }
}