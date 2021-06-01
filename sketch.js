function setup() {
  createCanvas(400, 400);
  for(i = 1; i < 10;i=i+2){
    console.log(i);
  }
}

function draw() {
  background(220);
  fill("brown");
  ellipse(212,206,283,318);
  fill("black");
  ellipse(150,150,40,50);
  ellipse(250,150,40,50);
  fill("white");
  ellipse(210,250,70,70);
  
}