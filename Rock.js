class Rock {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'density':2,
          'friction':1.5,
          'restitution':0.5


      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };