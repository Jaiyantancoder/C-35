class Form{
    constructor(){
    
    
    
        
    }
    
display(){

var input = createInput("name");
input.position(150,150);

var button = createButton("JOIN");
button.position(200,200);
button.mousePressed(function () {
  input.hide();
  button.hide();
  playerCount++;
  player.update(playerCount);
  player.updateplayer(input.value());

});

}    
       
    
    
    }