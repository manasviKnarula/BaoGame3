var bao;
var slide1IMG, slide2IMG, slide3IMG, slide4IMG, slide5IMG, slide6IMG, slide7IMG;
var slide1, slide2, slide3, slide4, slide5, slide6, slide7;
var next, nextIMG;
var next1;
var playIMG, play;
var BaoTalk, BaoTalkIMG;
var OkIMG, Ok;
var TableTop, TableTopIMG;
var racks1, racks1IMG;
var racks2, racks2IMG;
var racks3, racks3IMG;
var jug, jugIMG;
var cherryBlossomIMG, cherryBlossom;
var TeapotIMG, Teapot

var gameState="initial";

function preload(){
slide1IMG = loadImage ("slide1.png");
slide2IMG = loadImage ("slide2.png");
slide3IMG = loadImage ("slide3.png");
slide4IMG = loadImage ("slide4.png");
slide5IMG = loadImage ("slide5.png");
slide6IMG = loadImage ("slide6.png");
slide7IMG = loadImage ("slide7.png");
nextIMG = loadImage ("NextButton.png");
playIMG = loadImage ("playButton.png");
BaoTalkIMG = loadImage ("BaoTalking.png");
OkIMG = loadImage ("Ok.png");
TableTopIMG = loadImage("TableTop.png");
racks1IMG = loadImage ("tabletop.png")
racks2IMG = loadImage ("tabletop.png")
racks3IMG = loadImage ("tabletop.png")
jugIMG = loadImage ("waterJug.png");
cherryBlossomIMG = loadImage ("CherryBlossom.png");
TeapotIMG = loadAnimation ("tp1.gif","tp2.gif", "tp3.gif", "tp4.gif", "tp5.gif", "tp6.gif");

}


function setup(){
  createCanvas(1000, 1000);

  slide1 = createSprite(200,250,20,50);
  slide1.addImage(slide1IMG);
  slide1.scale=0.2;

  slide2 = createSprite(400,250,20,50);
  slide2.addImage(slide2IMG);
  slide2.scale=0.2;

  slide3 = createSprite(650,250,20,50);
  slide3.addImage(slide3IMG);
  slide3.scale=0.2;

  slide4 = createSprite(900,250,20,50);
  slide4.addImage(slide4IMG);
  slide4.scale=0.2;

  slide5 = createSprite(300,500,20,50);
  slide5.addImage(slide5IMG);
  slide5.scale=0.2;

  slide6 = createSprite(550,500,20,50);
  slide6.addImage(slide6IMG);
  slide6.scale=0.2;

  slide7 = createSprite(800,500,20,50);
  slide7.addImage(slide7IMG);
  slide7.scale=0.25;

  BaoTalk = createSprite(550,400,20,50);
  BaoTalk.addImage(BaoTalkIMG);
  BaoTalk.scale=0.7;

  next1 = createSprite (550, 400, 20,50);
  next1.addImage(nextIMG);
  next1.scale=0.3;
  next1.visible=false;

  next = createSprite (550, 700, 20,50);
  next.addImage(nextIMG);
  next.scale=0.3;

  Ok = createSprite (520, 750, 20,50);
  Ok.addImage(OkIMG);
  Ok.scale=0.2;

  TableTop = createSprite (500, 900, 20,50);
  TableTop.addImage(TableTopIMG);
  TableTop.scale=0.9;

  racks1 = createSprite (850, 300, 20,50);
  racks1.addImage(racks1IMG);
  racks1.scale=0.4;

  racks2 = createSprite (850, 500, 20,50);
  racks2.addImage(racks2IMG);
  racks2.scale=0.4;

  racks3 = createSprite (850, 700, 20,50);
  racks3.addImage(racks2IMG);
  racks3.scale=0.4;

  jug = createSprite (830, 200, 20,50);
  jug.addImage(jugIMG);
  jug.scale=0.3;

  cherryBlossom = createSprite (830, 450, 20,50);
  cherryBlossom.addImage(cherryBlossomIMG);
  cherryBlossom.scale=0.2;

  Teapot = createSprite (400, 700, 20,50);
  Teapot.addAnimation("boil",TeapotIMG);
}

 function draw(){
  background("white");
  drawSprites();

  if(gameState==="initial"){
    slide1.visible=true;
    slide2.visible=true;
    slide3.visible=true;
    slide4.visible=true;
    slide5.visible=true;
    slide6.visible=true;
    slide7.visible=true;
    BaoTalk.visible=false;
    Ok.visible=false;
    TableTop.visible=false;
    racks1.visible=false;
    racks2.visible=false;
    racks3.visible=false;
    jug.visible=false;
    cherryBlossom.visible=false;
    Teapot.visible=false;
    

    if (mousePressedOver(next)){
      gameState="start";
       }
  }

   if (gameState==="start"){
    textSize(25);
    fill("black");
   text("To play, make the recipes that Bao asks you to make.",300,500);
   text("There will be three levels. Click NEXT to begin",300,550);

   slide1.visible=false;
    slide2.visible=false;
    slide3.visible=false;
    slide4.visible=false;
    slide5.visible=false;
    slide6.visible=false;
    slide7.visible=false;
    BaoTalk.visible=false;
    Ok.visible=false;
    TableTop.visible=false;
    racks1.visible=false;
    racks2.visible=false;
    racks3.visible=false;
    jug.visible=false;
    cherryBlossom.visible=false;
    Teapot.visible=false;


   next.visible=false;
      next1.visible=true;

   if (mousePressedOver(next1)){
     gameState="play"
   }
 }

 if (gameState==="play"){
   next1.visible=false;
   BaoTalk.visible=true;
   Ok.visible=true;
   TableTop.visible=false;
   racks1.visible=false;
   racks2.visible=false;
   racks3.visible=false;
   jug.visible=false;
   cherryBlossom.visible=false;
   Teapot.visible=false;

   textSize(15);
   fill("black");
   text("Make cherry blossom tea by following these steps: ", 370,140);
   text("1. Boil water",450, 160);
   text ("2. Add dried cherry Blossom", 450, 180);
   text("3. Leave for 1 minute ", 450, 200);

   if (mousePressedOver(Ok)){
    gameState="play2"
  }
 }

 if (gameState==="play2"){
  BaoTalk.visible=false;
  Ok.visible=false;
  slide1.visible=false;
  TableTop.visible=true;
    slide2.visible=false;
    slide3.visible=false;
    slide4.visible=false;
    slide5.visible=false;
    slide6.visible=false;
    slide7.visible=false;
    next.visible=false;
    next1.visible=false;
    racks1.visible=true;
    racks2.visible=true;
    racks3.visible=true;
    jug.visible=true;
    cherryBlossom.visible=true;
    Teapot.visible=true;

    if (mousePressedOver(jug)){

    }




 }

 }
