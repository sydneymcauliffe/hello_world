var teapot;
var x = 100.0; 
var y = 100; 
var speed = 1.5; 

function setup(){
    createCanvas(1000, 1000);
    
}

function draw(){
    background(0);

    //this is rectangle
    fill(255,200,200);
    rect(x,y, 200, 200);

    //this is triangle
    fill(255,200,200)
    triangle (x, y, 86, 20, 86, 75);

    //this is ellipse
    fill(1);
    x = x + speed; 
    if(x > width){
      x = 0; 
    }
    fill(210, 30, 140);
    ellipse(x,y,50,50);
    
     //this is teapot
//     rotateX(frameCount * 0.01);
//     rotateY(frameCount * 0.01)
//     model(teapot);
// 

}

