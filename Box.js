class Box extends BaseClass{
  constructor(x, y, width, height) {
    super(x, y, width, height);
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.image = loadImage('sprites/wood1.png');
  };

  display(){
    super.display();
  };
};
