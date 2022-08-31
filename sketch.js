var boat, boat_running, boat_collided;
var ground, invisibleGround, gorundImage;

function preload(){
    boat_running = loadAnimation("boat 1 picture.png","boat 2 picture.png");
    boat_collided = loadImage("boat 1 picture.png");

    groundImage = loadImage("sea picture")
}

function setup(){
    createCanvas(600,200);

    //creating the boat sprite 
    boat = createSprite(200,200,120,110);
    boat.addAnimation("running",boat_running);
    boat.scale = 0.8;

    //creating ground sprite 
    ground = createSprite(200,200,400,120);
    ground.addImage("ground",groundImage);
    ground.x =ground.width /2;
    ground.velocityX = -4

    //creating invisible ground 
    invisibleGround = createSprite(240,200,400,110);
    invisibleGround.visible = false;

}

function draw(){
    //set background color 
    background("lightBlue")

    console.log(boat.y);

    //adding gravity 
    trex.velocityY = boat . velocityY +0.8

    if(ground.x< 0){
        ground.x = ground.width2;
    }

    //stop boat fromm falling 
    trex.collide(invisibleGround);

    drawSprites();
}