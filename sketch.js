var garden, gardenImg;
var cat, catRunning, catHappy, catImg;
var mouse, mouseTeasing, mouseHappy, mouseImg;

function preload() {
     //load the images here
    catImg = loadImage("images/cat1.png");
    catRunning = loadAnimation("images/cat2.png", "images/cat3.png");
    catHappy = loadImage("images/cat4.png");

    gardenImg = loadImage("images/garden.png");

    mouseTeasing = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseHappy = loadImage("images/mouse1.png");
    mouseImg = loadImage("images/mouse4.png");
}

function setup(){
    var canvas = createCanvas(950,600);
    //create tom and jerry sprites here
    garden = createSprite(480,300,1000,800);
    garden.addImage("bg", gardenImg);

    cat = createSprite(800,480,40,20);
    cat.addImage("catSit", catImg);
    
    cat.addAnimation("catRun", catRunning);
    cat.scale=0.2;
    cat.setCollider("rectangle",0,0,1000,1000)

    mouse = createSprite(130,510,20,10);
    mouse.addImage("mouseSit", mouseImg);
    mouse.addImage("mouseD", mouseHappy);
    mouse.addAnimation("mouseTease", mouseTeasing);
    mouse.scale=0.1;
    mouse.setCollider("rectangle",0,0,1000,1000)
}

function draw() {

    cat.debug = true;
    mouse.debug = true;
    background(0);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x < cat.width/2 + mouse.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2){
    //    cat.addImage("catD", catHappy);
    //    cat.changeAnimation("catD");
    //    cat.velocityX=0;
    //    mouse.changeAnimation("mouseD")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.changeAnimation("mouseTease");
      mouse.frameDelay = 15;
      cat.changeAnimation("catRun");
      cat.frameDelay = 10;
      cat.velocityX=-2;
  }

}

function isTouching(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2){
        return true;
     }
     else {
         return false;
     }
}
