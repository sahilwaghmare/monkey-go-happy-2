var monkey_running,backgroundImg,ground,obstacle,bananaImg,monkey;
var PLAY=1,END=0;
var gameState=PLAY;
var obstaclesGroup,bananasGroup;
var score=0
var chance=0
function preload(){
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backgroundImg=loadImage("jungle.jpg")
  obstacle=loadImage("stone.png")
  bananaImg=loadImage("banana.png")
  
}
function setup() {
  createCanvas(600, 600);
  jungle=createSprite(300,300,600,600)
  jungle.scale=1.5
  jungle.addImage(backgroundImg);
  jungle.velocityX=-3;
  
  monkey=createSprite(80,520,10,40)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2
  edges=createEdgeSprites();
    obstaclesGroup =new Group();
bananasGroup = new Group();
  
}

function draw() {
  background(220);
  if(gameState==PLAY){
    
  
   if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
    if(keyDown("space")){
       monkey.velocityY=-12
      
       }
   monkey.velocityY=monkey.velocityY+0.8  
    spawnBanana();
    
    spawnObstacles();
    if(monkey.isTouching(bananasGroup)){
      bananasGroup.destroyEach();
      score=score+10
      switch(score){
       case 10:
        monkey.scale = 0.22
        break;

      case 20:
        monkey.scale = 0.24

        break;
      case 30:
        monkey.scale = 0.26

        break;
      case 40:
        monkey.scale = 0.28

        break;
      case 50:
        monkey.scale = 0.30

        break;
      case 60:
        monkey.scale = 0.32
        break;

      default:
        break;
    }
      
    }
    if(monkey.isTouching(obstaclesGroup)){
      monkey.scale=0.12    
    
        gameState=END;
    }
  }
  if(gameState==END){
    
    monkey.velocityY=0
    jungle.velocityX=0;
    bananasGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
  }

  
  
  
  monkey.collide(edges[3]);
  
  drawSprites();
  textSize(20)
  fill("white");
  text("Score:"+score,500,50);
}
function spawnBanana(){
  if(frameCount%100==0){
    
    var banana = createSprite(600,300,40,10);
    banana.y = Math.round(random(200,400));
    banana.addImage (bananaImg);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 220;
    bananasGroup.add(banana);
    
  }
  }
function spawnObstacles(){
  if(frameCount%300===0){
     var stone = createSprite(600,560,10,40);
   
   stone.addImage (obstacle);
    
   stone.scale = 0.3;
   stone.velocityX = -3;
    
     //assign lifetime to the variable
   stone.lifetime = 220;
    obstaclesGroup.add(stone); 
  }
  
}