var fondo, bg;
var brush
var drink
var sleep
var eat
var gym
var move
var bath
var astro

 function preload(){
 bg = loadImage("iss.png");
 brush = loadAnimation("brush.png");
 drink = loadAnimation("drink1.png","drink2.png");
 sleep = loadAnimation("sleep.png");
 eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
 gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
 move = loadAnimation("move.png","move.png","move1.png","move1.png");
 bath= loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");


 }

function setup() {
  createCanvas(600,500);
astro = createSprite(300,300,30,30);
astro.addAnimation("sleeping",sleep);
astro.scale = 0.1;

}

function draw() {
  background(bg); 
  textSize(20);
  fill("white");
  text ("Instrucciones",450,50);
  textSize(16);
  text ("flecha hacia arriba = cepillarse",360,70);
  text ("flecha hacia abajo = ejercitarse",360,90);
  text ("flecha hacia la izquierda = comer",360,110);
  text ("flecha hacia la derecha = bañarse",360,130);
  text ("tecla m = moverse",360,150);
edges = createEdgeSprites();
astro.bounceOff(edges);
if(keyDown(UP_ARROW)){
astro.addAnimation("brushing", brush);
astro.changeAnimation("brushing")
astro.y = 350;
astro.velocityX = 0;
astro.velocityY = 0;
}
if(keyDown(DOWN_ARROW)){
  astro.addAnimation("gymming", gym);
  astro.changeAnimation("gymming")
  astro.y = 350;
  astro.x = 150;
  astro.velocityX = 1;
  astro.velocityY = 1;
  }
  if(keyDown(LEFT_ARROW)){
    astro.addAnimation("eating", eat);
    astro.changeAnimation("eating")
    astro.y = 350;
    astro.x = 150;
    astro.velocityX = 0.5;
    astro.velocityY = 0.5;
    }
    if(keyDown(RIGHT_ARROW)){
      astro.addAnimation("bathing", bath);
      astro.changeAnimation("bathing")
      astro.x = 350;
      astro.velocityX = 0;
      astro.velocityY = 0;
      }
      if(keyDown("m")){
        astro.addAnimation("moving", move);
        astro.changeAnimation("moving")
        astro.velocityX = 1;
        astro.velocityY = 1;
        }
  drawSprites();
}