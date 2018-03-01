let table;
let bubbles;

function preload(){
  table=loadTable ('data/data.csv','header');
}

function setup() {
  bg = loadImage("libraries/map.jpg");
  createCanvas(windowWidth,windowHeight);
  console.log(table);
  loadData();
}

function draw() {
  background (bg);
  for(let i=0; i< bubbles.length; i++){
      bubbles[i].display();
  }
}

function loadData(){

  bubbles= [];

    for(let i=0; i<table.getRowCount(); i++){
      let row = table.getRow(i);
      let cover = row.get ('cover');
      let title = row.get ('title');
      let pages = roww.get ('pages');
      
      bubbles[i] = new Bubble(random(0,800), random(0,800), cover, pages, title);
  }
}


class Bubble{
  constructor(tempX, tempY, tempCover, tempPages, tempTitle){ 
      this.x = temX;
      this.y = tempY;
      this.cover = String(tempCover);
      this.pages = Number(tempPages);
      this.title = String(tempTitle);

  }

  display(){
    ellipse(this.x, this.y, this.pagse, this.pages);
    text(this.title, this.x, this.y-10);
    text(this.cover, this.x, this.y+10);
    }
  }



