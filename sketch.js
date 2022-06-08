var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount = 0
var gameState
var carro1
var carro2
var carro1img
var carro2img
var carros = []
var pista
var allPlayers
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
 if (gameState===1){
   game.play()
 }
 console.log(allPlayers)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
