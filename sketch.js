//Create variables here
var dog;
var happyDog;
var readyDog;
var database;
var foodS;
var foodStock;
var lastFed;
var foodobj;
var stockscore=20;

function preload()
{
  //load images here
  readyDog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
 
}

function setup() {
  createCanvas(1000,500);
  
  dog = createSprite(850,250,10,10);
  dog.addImage(readyDog);
  

  database=firebase.database();
  /*foodStock=database.ref('Food');
  foodStock.on("value",readStock);*/
  foodobj=new Food();
 
  feed=createButton("Feed the dog");
  feed.position(500,100);
  feed.mousePressed(feedDog); 

  add=createButton("Add food");
  add.position(700,100);
  add.mousePressed(addFood);

  
}


function draw() {  
background(46,139,87);

/*if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  stockscore=stockscore-1;
  }*/

  drawSprites();
  //add styles here
 

}





function feedDog(){
dog.addImage(happyDog);

foodobj.updateFoodStock(foodobj.getFoodStock()-1);
database.ref('/').update({
  Food:foodobj.getFoodStock(),
 // Feedtime:hour()
})
}

function addFood(){
 foodobj.updateFoodStock(foodobj.getFoodStock()+1);
  database.ref('/').update({
    Food:foodobj.getFoodStock(),
  }) 
}