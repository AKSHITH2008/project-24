class Paper{
   constructor(){
       var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.5
       }

       this.body=Bodies.circle(30,630,30);
       World.add(world,this.body);
       this.radius=30;
   }

   display(){
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
   }
}