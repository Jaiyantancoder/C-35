class Game{
constructor(){




}

readState(){

database.ref('gameState').on("value",function(data){
    gameState = data.val();
    console.log(gameState);
})

}
update(state){

database.ref('/').update({

    gameState : state
})
}
start (){
    console.log(gameState);
if(gameState === 0){
   
player = new Player();
player.readCount();
form = new Form();

form.display();

}


}

}
