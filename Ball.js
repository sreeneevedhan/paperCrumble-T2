class Ball {
    constructor(x, y, radius) {
      var options = {
          isStactic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1
      }
      this.paperObject = Bodies.circle(x, y, radius, options);
      this.radius =radius;
      this.image = loadImage("sprite/paper.png");
      
      World.add(world, this.paperObject);
    }
    display(){
      var pos =this.paperObject.position;
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.radius,this.radius);
     // imageMode(CENTER);
      //image(this.image,pos.x, pos.y,this.radius,this.radius);
     
         }
  };
  