var diameter; 
var angle = 0;
H = 600;
W = 600
function setup() {
  angleMode(DEGREES)
  createCanvas(W, H+100);
  diameter = H - 10;
  noStroke();
  fill(10, 204, 0);
}
  
function draw() {
  // background(225,225,225);
  fill(225,225,225,65)
  rect(0,0,width,height)
  noStroke();
  
  var d1 =  SineWave(angle,110,100,5,0);
  var x1 =  SineWave(angle,width/2,.9*width/2,2,0)
  var y1 =  SineWave(angle,width/2,.9*width/2,2,90)
  var c1 =  SineWave(angle,128,120,1,0)
  
  fill(225,0,0,200)
  ellipse(y1,x1,20, 20);
  ellipse(d1,x1,20,20);
  ellipse(d1,y1,20,20);
  //ellipse(width/2, y1, 20, 20);
  fill(43,98,216,200)
  ellipse(x1, y1, 20, 20);
  ellipse(x1,d1,20,20);
  ellipse(y1,d1,20,20);
  //fill(c1,c1,c1,255);
  //ellipse(width/2, 200, 40, 40);
  
  angle += 1;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}
   
   
   
   
