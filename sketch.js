var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gamestate
var carro1
var carro2
var carro1img
var carro2img
var carros = []
var pista
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
carro1img = loadImage("assets/car1.png")
carro2img = loadImage("assets/car2.png")
pista = loadImage("assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1)
  }
 if (gamestate===1){
   game.play()
 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
