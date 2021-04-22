var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var cars, logs, player;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  player = new Player(width/2, height-25);
  
 
   
}

function draw() {
  background("skyblue");
 
  createGrass();
  createCars();
  createLogs();

  keyPressed();
  

  drawSprites();
}

function createGrass()
{
  for (let i=0; i<6; i++)
  {
    var bottomGrass1 = createSprite(683, height-50-(i*400), width, grassHeight);

    if (i % 2 == 0)
    {
      var road = createSprite(683, height-150-(i*400)-grassHeight, width, 300)
      road.shapeColor = 'black';
    }
    bottomGrass1.shapeColor = 'grey';
  }
}

function createCars()
{
  for (var i=0; i<40; i++)
  {
    cars = new Car(2);
    carGroup1.add( cars.spt );
  }
  for (var i=1; i<carGroup1.length; i++)
  {
    if(carGroup1[i].x < 0 || carGroup1[i].x > width)
    {
      carGroup1[i].x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
    }
  }
}

function createLogs()
{
  for (var i=0; i<40; i++)
  {
    logs = new Log(2);
    logGroup1.add( logs.spt );

  }
  for (var i=1; i<logGroup1.length; i++)
  {
    if(logGroup1[i].x < 0)
    {
      logGroup1[i].x = width;
    }
  }
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0, -2);
  } else if(keyCode == DOWN_ARROW){
    player.move(0, 2);
  } else if(keyCode == LEFT_ARROW){
    player.move(-2, 0);
  } else if(keyCode == RIGHT_ARROW){
    player.move(2, 0);
  }
  translate(0, -player.spt.y + height-150);
}