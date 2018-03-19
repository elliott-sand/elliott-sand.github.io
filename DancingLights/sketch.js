var diameter; 
var angle = 0;
H = 600;
W = 600;

var bugs = []; 

function preload() {
   song = loadSound('assets/Breathing.mp3');
}

function setup() {
  angleMode(DEGREES)
  createCanvas(W, H+100);
  diameter = H - 10;
  noStroke();
  fill(10, 204, 0);
  
  for (var i=0; i<250; i++) {
    bugs.push(new Jitter());
  }
  
  song.play()
}
  
function draw() {
  // background(225,225,225);
    fill(20,20,20,40)
  rect(0,0,width,height)
  noStroke();

  var d1 =  SineWave(angle,110,100,5,0);
  var x1 =  SineWave(angle,width/2,.9*width/2,2,0)
  var y1 =  SineWave(angle,width/2,.9*width/2,2,90)
  var c1 =  SineWave(angle,128,120,1,0)

  var fullSpectra = (x1/width)*360;
  var fullBrightness = 100-(y1/width)*100;
  fill(255);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
  fill(fullSpectra,100,fullBrightness)
 
  rotate(0);
 
  ellipse(y1,x1,20, 20);
  ellipse(x1,y1,20,20);
  ellipse(d1,x1,20,20);
  ellipse(d1,y1,20,20);
  ellipse(x1,d1,20,20);
  ellipse(y1,d1,20,20);
  ellipse(x1,c1,20,20);
  ellipse(y1,c1,20,20);
  ellipse(c1,x1,20,20);
  ellipse(c1,y1,20,20);
  ellipse(d1,c1,20,20);
  ellipse(c1,d1,20,20);
 
  angle += 1;
}

// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;}
   
   // Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(1, 5);
  this.speed = 1;
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
   