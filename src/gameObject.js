export function gameObject(name, width, height, color, x, y, speed, target) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.canvas = document.getElementById("canvas");
  this.speed = speed;
  this.speedX = 0;
  this.speedY = 0;
  this.target =
    target === "mouse"
      ? "mouse"
      : window.gameObjects.find(object => object.name === target);
  this.targetX = () =>
    this.target === "mouse" ? window.mousePosX : this.target.x;
  this.targetY = () =>
    this.target === "mouse" ? window.mousePosY : this.target.y;
  this.update = function() {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    if (this.targetX === this.x && this.targetY === this.y) return null;
    this.speedX = getSpeed(this.targetX(), this.x);
    this.speedY = getSpeed(this.targetY(), this.y);
    return updatePos();
  };

  function shoot() {}

  const getSpeed = (targetPos, objectPos) => {
    if (Math.abs(Math.abs(targetPos) - Math.abs(objectPos)) < 5) return 0;

    if (targetPos > objectPos) return 1;
    else if (targetPos < objectPos) return -1;
    else return 0;
  };
  const updatePos = () => {
    this.x += this.speedX * this.speed;
    this.y += this.speedY * this.speed;
  };
}
