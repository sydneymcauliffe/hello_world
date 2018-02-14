var bugs = []; // array of Jitter objects

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Create objects
  for (var i=0; i<300; i++) {
      if (i%3==0) {
        bugs.push(new Jitter("#1a1a1a")); 
      }
      else if (i%2==0) {
        bugs.push(new Jitter("#ffffff")); 
      }
      else if (i%5==0) {
        bugs.push(new Jitter("#ff0000")); 
      }
      else {  bugs.push(new Jitter("#008000")); }
  }
  bg = loadImage("libraries/art.jpg");
}

function draw() {
  background(bg);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
function Jitter(color) {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;
  this.color=color;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function() {
    star(this.x, this.y, this.diameter, this.diameter,6,this.color);
  };
}

function star(x, y, radius1, radius2, npoints,color) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a+halfAngle) * radius1;
      sy = y + sin(a+halfAngle) * radius1;
      vertex(sx, sy);
    }
    fill(color);
    endShape(CLOSE);
  }