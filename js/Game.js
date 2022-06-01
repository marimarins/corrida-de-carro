class Game {
  constructor() {}
getState(){
var gamestateref = database.ref("gameState")
gamestateref.on("value", function(data){
  gamestate= data.val()
})
}
update(state){
  database.ref("/").update({
    gamestate: state
  })
}
  start() {
    form = new Form();
    form.display();
    player = new Player();
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
    Player.getplayerinfo()
    if(allPlayers !== undefined){
      image(pista,0,-height*5, width, height*6)
    }
  }
}
