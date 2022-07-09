/* exported setup, draw */
let seed = 12345;

const grassColor = "#AFE1AF";
const skyColor = "#cdd8e6";
const hillColor = "#e1ac4a";
const treeColor = "#3d1803";
const leaveColor = "#233610";
const boatColor = "#C19A6C";
const sunColor = [254,254,254,80]; // with opacity
const cloudColor = "";

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(1200, 800);
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  background(100);

  noStroke();

  fill(skyColor);
  rect(0, 0, width, height / 2);

  // An example of making something respond to the mouse
  fill(...sunColor);
  ellipse(mouseX,0,30,30);
  ellipse(mouseX,0,50,50);
  ellipse(mouseX,0,100,100);
  ellipse(mouseX,0,200,200);

  fill(68,238,255);
  rect(0, height / 2, width, height / 2);

  fill(hillColor);
  beginShape();
  vertex(0, height / 2);
  const steps = 10;
  for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    let y =
      height / 2 - (random() * random() * random() * height) / 8 - height / 5;
    vertex(x, y);
  }
  vertex(width, height / 2);
  endShape(CLOSE);

  fill(grassColor);
  beginShape();
  vertex(0, height / 2);
  const steps2 = 10;
  for (let i = 0; i < steps2 + 1; i++) {
    let x = (width * i) / steps2;
    let y =
      height / 2 - (random() * random() * random() * height) / 3 - height / 10;
    vertex(x, y);
  }
  vertex(width, height / 2);
  endShape(CLOSE);

  drawCloud(width * random(),10*random());
  drawboat();


  // combining circle together to get the cloud
  // from Ben Huang
  function drawCloud(x,random){
    console.log(random);
    // first cloud
    fill(cloudColor);

    if(random>=5){
      circle(x,40,30,30);
      circle(x,50,30,30);
      circle(x,30,30,30);
      circle(x,40,30,30);
      circle(x+25,50,30,30);
      circle(x+25,30,30,30);
      circle(x+50,40,30,30);
    }
    if(random>=8){
      circle(x+600,40,30,30);
      circle(x+600,50,30,30);
      circle(x+600,30,30,30);
      circle(x+600,40,30,30);
      circle(x+625,50,30,30);
      circle(x+625,30,30,30);
      circle(x+650,40,30,30);
    }
    if(random>=3){
      circle(x+300,40,30,30);
      circle(x+300,50,30,30);
      circle(x+300,30,30,30);
      circle(x+300,40,30,30);
      circle(x+325,50,30,30);
      circle(x+325,30,30,30);
      circle(x+350,40,30,30);
    }
  }
}

function drawboat(){

  stroke(boatColor);
  fill(boatColor);
  beginShape()
  vertex(mouseX-125,490);
  vertex(mouseX-110,510);
  vertex(mouseX-15,510);
  vertex(mouseX,490);
  vertex(mouseX-125,490);
  endShape();

  fill('red');
  stroke('red');
  beginShape();
  vertex(mouseX-60,490);
  vertex(mouseX-60,415);
  vertex(mouseX-20,485);
  vertex(mouseX-60,485);
  endShape();
}