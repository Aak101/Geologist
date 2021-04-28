class Rubber {
    constructor(x,y,diameter) {
      var options = {
          isStatic: false,
          'density':1,
          'friction':1.5,
          'restitution':1.1
          


      }
      this.body = Bodies.circle(x,y,50,options);
      this.diameter = diameter
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("blue");
      circle(pos.x, pos.y, this.diameter);
    }
  };