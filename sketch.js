var cat,mouse,catImg;
function preload() {
    //load the images here
    
 
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,200,50,50)
    mouse = createSprite(600,200,50,50)
    
    
   
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyPressed=== LEFT_ARROW){
        cat.velocityY=-5;

    }
    
    

    drawSprites();
    cat.display();
    mouse.display();
}


function keyPressed(){
    if(keyPressed=== LEFT_ARROW){
        cat.velocityY=-5;
        cat.x=cat.x+2;

  //For moving and changing animation write code here


}}
