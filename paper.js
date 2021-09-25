class Paper{
  constructor(x,y,radius){
  var options={
      isStatic : false,
      density : 1.2,
      restitution : 0.3,
      friction : 0
  }
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.image = loadImage("paper.png");
  this.body = Bodies.circle(x,y,radius,options);
  
  World .add(world,this.body);



      
  }
  display(){
 var pos = this.body.position ;
    push ();
    translate(pos.x,pos.y);
      imageMode (CENTER);
      image(this.image,0,0,this.radius,this.radius);
    pop ();
  }
}
