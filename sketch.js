var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var  arrowGroup,redB,greenB,pinkB,blueB;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,600,600);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
   
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  pinkB=new Group();
  arrowGroup=new Group();
  redB=new Group();
  blueB=new Group();
  greenB=new Group();

  drawSprites();
  text("Score: "+ score, 300,50);
  }
 

// Creating  arrows for bow
  function createArrow() {
    var arrowGroup= createSprite(100, 100, 60, 10);
   arrowGroup.addImage(arrowImage);
   arrowGroup.x = 360;
   arrowGroup.y=bow.y;
   arrowGroup.velocityX = -4;
   arrowGroup.lifetime = 100;
   arrowGroup.scale = 0.3;
   
  }


  function redBalloon() {
    var redB = createSprite(0,Math.round(random(20, 370)), 10, 10);
    redB.addImage(red_balloonImage);
    redB.velocityX = 3;
    redB.lifetime = 150;
    redB.scale = 0.1;
    
    
    if (arrowGroup.isTouching(redB)) {
      redB.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }
    
   
  }
  
  function blueBalloon() {
    var blueB = createSprite(0,Math.round(random(20, 370)), 10, 10);
    blueB.addImage(blue_balloonImage);
    blueB.velocityX = 3;
    blueB.lifetime = 150;
    blueB.scale = 0.1;
    
    
    if (arrowGroup.isTouching(blueB)) {
      blueB.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }

  }
  
  function greenBalloon() {
    var greenB = createSprite(0,Math.round(random(20, 370)), 10, 10);
    greenB.addImage(green_balloonImage);
    greenB.velocityX = 3;
    greenB.lifetime = 150;
    greenB.scale = 0.1;
    
   
    if (arrowGroup.isTouching(greenB)) {
      greenB.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
     }
    
    
  }
  
  function pinkBalloon() {
    var pinkB = createSprite(0,Math.round(random(20, 370)), 10, 10);
    pinkB.addImage(pink_balloonImage);
    pinkB.velocityX = 3;
    pinkB.lifetime = 150;
    pinkB.scale = 1.3;
    
    if (arrowGroup.isTouching(pinkB)) {
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }

    //I was unable to figure out .How to destroy the balloon
    
  }
 
 

 




