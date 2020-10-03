class Player{
    constructor(){
    
    
    
        
    }
    
readState(){
  database.ref('playerCount').on("value",function(data){
    playerCount = data.val();
 })
    }

update(count){
  database.ref('/').update({
   playerCount : count 
 })
   }
  
updateplayer(name){

 database.ref("player"+playerCount).update({
    name : name
 })


}   
   
    }