class Food{
      
      constructor(){
          this.foodStock;
          this.lastFed;
          this.image=loadImage('images/Milk.png');
      }

      update(foodStock){
        //database.ref('/').update
        
          
          this.foodStock = foodStock
        
   
       }
   
       getFedTime(lastFed){
        this.lastFed=lastFed;
      }

       deductFood(){
        if(this.foodStock>0){
          this.foodStock=this.foodStock-1;
         }
       }
  getfoodstock(){
     
    return this.foodStock;
  }
   
   

   display(){
    //this.food = loadImage("images/Milk.png");
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    
    
    
       
        if(this.foodstock != 0 ){
         for(var i=0; i<this.foodStock;i++){
           if(i%10 == 0){
             x = 80;
             y= y+50;
           }
           image(this.image, x, y, 50,50);
           x = x+30;
         }
          
      
        } 
        

   
   }
}