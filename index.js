// Add your Circle class here
class Circle
{
  constructor(radius)
  {
    this.radius = radius;
  }
  get area()
  {
    return this.radius*this.radius*Math.PI
  }
  get diameter()
  {
    return 2*this.radius
  }
  get circumference()
  {
    return this.radius*2*Math.PI
  }
}
