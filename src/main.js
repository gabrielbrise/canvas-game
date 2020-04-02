const { objects } = require("./mocks/objects.json");
const { gameObject } = require("./gameObject");
// const gameProjectile = require("./gameProjectile");

window.gameObjects = [];
window.gameProjectiles = [];
window.mousePosX = 0;
window.mousePosX = 0;

function startGame() {
  gameArea.start();
  objects.forEach(
    ({ name, width, height, color, startX, startY, speed, target }) => {
      const object = new gameObject(
        name,
        width,
        height,
        color,
        startX,
        startY,
        speed,
        target
      );
      return gameObjects.push(object);
    }
  );
}

function trackMouse(e) {
  window.mousePosX = e.clientX;
  window.mousePosY = e.clientY;
}

var gameArea = {
  canvas: document.getElementById("canvas"),
  start: function() {
    this.canvas.width = 600;
    this.canvas.style.border = "1px solid #adadad";
    this.canvas.height = 600;
    this.canvas.addEventListener("click", trackMouse);
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function updateGameArea() {
  gameArea.clear();
  window.gameObjects.forEach(object => {
    object.newPos();
    object.update();
  });
}

startGame();
