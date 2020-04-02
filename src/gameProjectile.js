export default function bullet(
  name,
  width,
  height,
  color,
  origin,
  target,
  speed
) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.color = color;
  this.origin = origin;
  this.target = target;
  this.speed = speed;
  this.x = origin.x;
  this.y = origin.y;
  this.update = function() {
    ctx = gameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    const originCoordinates = [this.origin.x, this.origin.y];
    const targetCoordinates = [this.target.x, this.target.y];
    const ca = Math.abs(this.origin.x) - Math.abs(this.target.x);
    const co = Math.abs(this.origin.y) - Math.abs(this.target.y);
    const distance = Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
  };
}
