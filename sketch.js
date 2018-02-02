




// var num = 2000;
// var range = 6;

// var ax = [];
// var ay = [];


// function setup() {
//   createCanvas(710, 400);
//   for ( var i = 0; i < num; i++ ) {
//     ax[i] = width / 2;
//     ay[i] = height / 2;
//   }
//   frameRate(30);
// }

// function draw() {
//   background(51);

//   // Shift all elements 1 place to the left
//   for ( var i = 1; i < num; i++ ) {
//     ax[i - 1] = ax[i];
//     ay[i - 1] = ay[i];
//   }

//   // Put a new value at the end of the array
//   ax[num - 1] += random(-range, range);
//   ay[num - 1] += random(-range, range);

//   // Constrain all points to the screen
//   ax[num - 1] = constrain(ax[num - 1], 0, width);
//   ay[num - 1] = constrain(ay[num - 1], 0, height);

//   // Draw a line connecting the points
//   for ( var j = 1; j < num; j++ ) {
//     var val = j / num * 204.0 + 51;
//     stroke(val);
//     line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
//   }
// }








function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

var radius = 200;

function setup() {
	createCanvas(710, 400, WEBGL);
	noStroke();
	fill(200);
}

function draw() {
	noStroke();
	background(0);
	var dirY = (mouseY / height - 0.5) * 4;
	var dirX = (mouseX / width - 0.5) * 4;
	directionalLight(200, 200, 200, dirX, dirY, 1);
	translate(-1.5 * radius, 0, 0);
	sphere(radius);
	translate(3 * radius, 0, 0);
	sphere(radius);
}




// var teapot;
// var x = 100.0; 
// var y = 100; 
// var speed = 1.5; 

// function setup(){
//     createCanvas(1000, 1000);
    
// }

// function draw(){
//     background(0);


//     //this is rectangle
//     fill(255,200,200);
//     rect(x,y, 200, 200);

//     //this is triangle
//     fill(255,200,200)
//     triangle (x, y, 86, 20, 86, 75);

//     //this is ellipse
//     fill(1);
//     x = x + speed; 
//     if(x > width){
//       x = 0; 
//     }
//     fill(210, 30, 140);
//     ellipse(x,y,50,50);


// }

// function setup() {
//   createCanvas(200, 200, WEBGL);
//   var fov = 60 / 180 * PI;
//   var cameraZ = height / 2.0 / tan(fov / 2.0);
//   perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);
// }
// function draw() {
//   background(200);
//   orbitControl();
//   for (var i = -1; i < 2; i++) {
//     for (var j = -2; j < 3; j++) {
//       push();
//       translate(i * 160, 0, j * 160);
//       box(30, 30, 30);
//       pop();
//     }
//   }
  
// }


