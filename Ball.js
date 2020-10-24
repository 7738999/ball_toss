
class ball{
    constructor(x, y, d1) {

        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2

         }
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = d1;
       

        World.add(world, this.body);
      }

      display(){
        var pos1 =this.body.position;
        fill("white");
        circle(pos1.x, pos1.y, this.diameter);
        pop();
      }

}