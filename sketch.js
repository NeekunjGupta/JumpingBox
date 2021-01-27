var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
    surface1 = createSprite(100,770,150,30);
    surface2 = createSprite(300,770,150,30);
    surface3 = createSprite(500,770,150,30);
    surface4 = createSprite(700,770,150,30);
    surface1.shapeColor = "red";
    surface2.shapeColor = "orange";
    surface3.shapeColor = "blue";
    surface4.shapeColor = "green";
    //create box sprite and give velocity
    box = createSprite(random(20,750),390,50,50);
    box.shapeColor="pink";
    box.velocityX = 10;
    box.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges = createEdgeSprites();
  

 //add condition to check if box touching surface and make it box
   if(surface1.isTouching(box) && box.bounceOff(surface1)){
   box.shapeColor = "red";
   }
   if(surface2.isTouching(box) && box.bounceOff(surface2)){
   box.shapeColor = "orange";
   music.play();
   }
   if(surface3.isTouching(box) && box.bounceOff(surface3)){
   box.shapeColor = "blue";
   box.velocityX = 0;
   box.velocityY = 0;
   music.stop();
   }
   if(surface4.isTouching(box) &&  box.bounceOff(surface4)){
   box.shapeColor = "green";
   music.play();
   }
   box.bounceOff(edges);
   drawSprites();
}
