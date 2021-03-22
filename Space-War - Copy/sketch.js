var player;
var score = 0;
var health = 0;
var START = 0
var PLAY = 1;
var WIN = 2
var LOSE = 3;
var gameState = START;
var spaceMobsGroup;
var spaceRock,mob1,mob2,mob3;
var bullet;
var SpaceRockImage,mob1Image,mob2Image,mob3Image,mob4Image;
var playerImage;
var MobGroup1,MobGroup2,MobGroup3;
var ammo = 100;
var ammoGroup;
var Astrogroup;
var Playergroup;
var ammoPack,ammoPackGroup;
var BackGroundImage;
var gameState = PLAY;
var playButton;
function preload(){
 
  SpaceRockImage = loadImage("spaceRockimage.png");
  mob1Image = loadImage("Mob1Image.png");
  mob2Image = loadImage("Mob2Image.png");
  mob3Image = loadImage("Mob3Image.png");
  mob4Image = loadImage("SpaceMobKingImage.png");
  playerImage = loadImage("playerImage.png");
  BackGroundImage = loadImage("SpaceBackGround.jpg");
}
function setup() {
  createCanvas(800,400);
  spaceMobsGroup = createGroup();
  ammoGroup = createGroup();
  Astrogroup = createGroup();
  ammoPackGroup = createGroup();
  MobGroup1 = createGroup();
  MobGroup2 = createGroup();
  MobGroup3 = createGroup();
  Playergroup = createGroup();
 player = createSprite(100, 200, 50, 50);
 edges = createEdgeSprites();
 player.shapeColor= "255" ;
}

function draw() {
  
  if(gameState === PLAY){
    background("purple"); 
    background(BackGroundImage); 
    textSize(23);
    textFont("algerian");
    text("Kills: "+score,300,20);
    text("Ammo:"+ammo,100,20)
    player.addImage(playerImage);
    
  
    if(ammo === 0){
      strokeWeight(10)
      fill("red")
      text("Out of ammo",500,20);
      
    }
    if(keyDown("w")) {
      player.y = player.y - 10;
    }
    if(keyDown("s")) {
      player.y = player.y + 10;
    }
    createEdgeSprites();
    player.bounceOff(edges);
    if (keyWentDown("e") && ammo > 0 ){
      bullet = createSprite(200,player.y,50,10);
      bullet.shapeColor = "red"
      bullet.lifetime = 800;
      ammo--;
       bullet.velocityX = 15;
       ammoGroup.add(bullet);
       Playergroup.add(player);
     }
   if(MobGroup1.isTouching(ammoGroup)){
    MobGroup1.destroyEach();
    ammo++;
    ammoGroup.destroyEach();
    score++;
   }
   if(MobGroup1.isTouching(ammoGroup)){
    MobGroup1.destroyEach();
    ammo++;
    ammoGroup.destroyEach();
    score++;
   }
   if(MobGroup2.isTouching(ammoGroup)){
    MobGroup2.destroyEach();
    ammo++;
    ammoGroup.destroyEach();
    score++;
   }
   if(MobGroup3.isTouching(ammoGroup)){
    MobGroup3.destroyEach();
    ammo++;
   ammoGroup.destroyEach();
   score++;
   }
    if (frameCount%100 === 0 && gameState === PLAY){
      var time = Math.round(random(100,400))
      mob1 = createSprite(620,time, 50, 50 )
     mob1.addImage(mob1Image);
     mob1.velocityX =-(4+score*1.5/100);           
      mob1.lifetime = 800;
      mob1.scale = 0.7;
      MobGroup1.add(mob1);
    }
  
    if (frameCount%200 === 0 && gameState === PLAY){
      var time2 = Math.round(random(100,400))
      mob2 = createSprite(620,time2, 50, 50 )
     mob2.addImage(mob2Image);
     mob2.velocityX =-(4+score*1.5/100);           
      mob2.lifetime = 800;
      mob2.scale = 0.7;
      MobGroup2.add(mob2);
      
    }
    if (frameCount%250 === 0 && gameState === PLAY){
      var time3 = Math.round(random(100,400))
      mob3 = createSprite(620,time3, 50, 50 )
     mob3.addImage(mob3Image);
     mob3.velocityX =-(4+score*1.5/100);           
      mob3.lifetime = 800;
      mob3.scale = 0.7;
      MobGroup3.add(mob3);
      
    }
    if (frameCount%250 === 0 && gameState === PLAY){
      var time23 = Math.round(random(100,400))
      spaceRock = createSprite(620,time23, 50, 50 )
      spaceRock.velocityX =- 20;           
      spaceRock.lifetime = 800;
      spaceRock.scale = 0.7;
      spaceRock.addImage(SpaceRockImage);
      Astrogroup.add(spaceRock);
    }
    if (frameCount%350 === 0 && gameState === PLAY){
      var time23 = Math.round(random(100,400))
      ammoPack = createSprite(620,time23, 50, 50 )
      ammoPack.velocityX =- 9;           
      ammoPack.lifetime = 800;
      ammoPack.scale = 0.7;
      ammoPackGroup.add(ammoPack);
      
      
    }
    if(ammoPackGroup.isTouching(Playergroup)){
      ammo++;
      console.log(player.y);
  
     }
  
     if(Astrogroup.isTouching(Playergroup)){
    gameState = LOSE;
    
   }
   
   if(score === 30){
    gameState = WIN;
    
   }
     if(gameState === START){
    
    
    }
  }
 

  if(gameState === WIN){
    
    
    mob1.destroyEach();
    mob2.destroyEach();
    mob3.destroyEach();
    Playergroup.destroyEach();
    Astrogroup.destroyEach();
    ammoGroup.destroyEach();
    textSize(25)
    text("Winner", 200,400);
    background("green")
    
  }
  if(gameState === LOSE){
    text("GameOver", 200,400);
    background("red")
    mob1.destroyEach();
    mob2.destroyEach();
    mob3.destroyEach();
    Playergroup.destroyEach();
    Astrogroup.destroyEach();
    ammoGroup.destroyEach();
    if(keyDown("r")){
      gameState = PLAY;
    }
    
   
  }


  drawSprites();
}

 
  

  

