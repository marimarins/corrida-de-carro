class Game {
  constructor() {}
getState(){
var gamestateref = database.ref("gameState")
gamestateref.on("value", function(data){
  gameState= data.val()
})
}
update(state){
  database.ref("/").update({
    gameState: state
  })
}
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()
    carro1 = createSprite(width/2 -50, height -100)
    carro1.addImage(carro1img)
    carro1.scale = 0.07
    carro2 = createSprite(width/2 +100, height -100)
    carro2.addImage(carro2img)
    carro2.scale = 0.07
    carros =  [carro1,carro2]
  }
  handleElement(){
    form.hide()
    form.titleImg.position(40,50)
    form.titleImg.class("gameTitleAfterEffect")
  }
  
  play(){
    this.handleElement()
    Player.getplayerinfo()
    if(allPlayers !== undefined){
      image(pista,0,-height*5, width, height*6)
      var index = 0
      for(var plr in allPlayers){
        index = index + 1 
        var x = allPlayers[plr].positionX
        var y = height - allPlayers[plr].positionY
        carros[index -1].position.x = x
        carros[index -1].position.y = y
        if(index=== player.index){
          stroke(10)
          fill("red")
          ellipse(x,y,60,60)
          camera.position.y = carros[index-1].position.y
        }
      
      }
    
    this.handlePlayerControls()
    drawSprites()}
  }
  handlePlayerControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY+=10
      player.update()
    }
  }
}
