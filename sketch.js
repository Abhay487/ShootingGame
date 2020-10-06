var playerimg, enemyimg, player, enemy1, enemy2, enemy3;
var enemyGroup1;
var enemyGroup2;
var enemyGroup3;
var bulletGroup;

function preload(){
playerimg = loadImage("Player.png");
enemyimg = loadImage("Enemy.png");
}



function setup() {
  createCanvas(1200,600);
  player = createSprite(100, 500, 50, 50);
  player.addImage(playerimg);
  player.scale = 0.2;
  enemyGroup1 = new Group();
  enemyGroup2 = new Group();
  enemyGroup3 = new Group();
  bulletGroup = new  Group();

}

function draw() {
  background(0);  
player.velocityX = 0;
player.velocityY = 0;
  if(keyDown(UP_ARROW))  {
    player.velocityY = -3;
  }

  if(keyDown(DOWN_ARROW))  {
    player.velocityY = 3;
  }

  if(keyDown(LEFT_ARROW)){
    player.velocityX = -3;
  }

  if(keyDown(RIGHT_ARROW)) {
    player.velocityX = 3;
  }

if(keyDown("space")) {
Bullets();
}

if(bulletGroup.isTouching(enemyGroup1)) {
  bulletGroup.destroyEach();
  enemyGroup1.destroyEach();
}
if(bulletGroup.isTouching(enemyGroup2)) {
  bulletGroup.destroyEach();
  enemyGroup2.destroyEach();
}

if(bulletGroup.isTouching(enemyGroup3)) {
  bulletGroup.destroyEach();
  enemyGroup3.destroyEach();
}


  

Enemy1();
Enemy2();
Enemy3();

 drawSprites();
}

function Enemy1() {
  if(frameCount % 111 ===  0) {
    var enemy1 = createSprite(1200, random(50, 600), 50, 60);
    enemy1.addImage(enemyimg);
    enemy1.velocityX = -8;
    enemy1.scale = 0.2;
    enemy1.lifetime = 300;
    enemyGroup1.add(enemy1);


  }
}

function Enemy2() {
  if(frameCount % 301 ===  0) {
    var enemy2 = createSprite(1200, random(50, 600), 50, 60);
    enemy2.addImage(enemyimg);
    enemy2.velocityX = -8;
    enemy2.scale = 0.2;
    enemy2.lifetime = 300;
    enemyGroup2.add(enemy2);


  }
}

function Enemy3() {
  if(frameCount % 251 ===  0) {
    var enemy3 = createSprite(1200, random(50, 600), 50, 60);
    enemy3.addImage(enemyimg);
    enemy3.velocityX = -8;
    enemy3.scale = 0.2;
    enemy3.lifetime = 300;
    enemyGroup3.add(enemy3);


  }
}

function Bullets() {
  var bullet = createSprite(player.x, player.y, 30, 10);
  bullet.velocityX = 4;
  bulletGroup.add(bullet);

}
