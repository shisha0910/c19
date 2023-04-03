var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup=new Group()
  climbersGroup=new Group()
  ghost = createSprite(300,500)
  ghost.addImage("ghost",ghostImg)
  ghost.scale=0.4
}

function draw() {
  background(200);

  
  if(tower.y > 400){
      tower.y = 300
    }
    if (keyDown("left_arrow")){
      ghost.x=ghost.x-5
    }
    if (keyDown("right_arrow")){
      ghost.x=ghost.x+5}
      if (keyDown("space")){
        ghost.velocityY= -5
       // -5+1=-4
       //-5-1=-6
       

      }
      //ghost.velocityY=ghost.velocityY+0.5
      ghost.velocityY+=0.5
if (climbersGroup.isTouching(ghost)){
  ghost.velocityY=0
}



    spawndoors()
drawSprites()
}
function spawndoors(){
if (frameCount%200==0){
  var door = createSprite(Math.round(random(100,400)),-50)
  door.addImage(doorImg)
  door.velocityY=2
  door.lifetime=800
  doorsGroup.add(door)
  var climber = createSprite(door.x,10)
  climber.addImage(climberImg)
  climber.lifetime=800
  climber.velocityY=2
  climbersGroup.add(climber)
  ghost.depth=door.depth
  ghost.depth+=1

}
}


