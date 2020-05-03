let string = "  < = < NOUS TOURNONS < —";
let angle, currX, currY;
let curr, index, trail;
let brushFont, sansFont;
let icon;
function setup() {
  //createCanvas(675, 900);
  createCanvas(windowWidth,windowHeight);
  background(255);
  imageMode(CENTER);

  textSize(20);
  frameRate(50);
  index = 0;
  trail = 0;
  noStroke();

  strokeCap(PROJECT);
  
  icon=loadImage("cylinder.png");

  brushFont = loadFont("fonts/BrushScript.ttf");
  condFont = loadFont("fonts/texgyreheroscn-regular.otf");
  sansFont = loadFont("fonts/Union-Regular.otf");
  serifFont=loadFont("fonts/happy-times-NG_italic_master.otf");
  noStroke();
  fill(0);
  //text("Tu es impressionné.", 10, 20);



  textAlign(CENTER);
}



function draw() {

  // textFont(serifFont);
  
 
  textSize(35);
fill(80, 80, 255);

  textAlign(CENTER, CENTER);
   if (mouseIsPressed === true) {
  if (index >= string.length) {
    index = 0;
  }
  stroke(200);
  strokeWeight(5);
  // line(mouseX-25, mouseY+25, pmouseX-25, pmouseY+25);
  // line(mouseX+25, mouseY-25, pmouseX+25, pmouseY-25);
  //line(mouseX,mouseY+25,mouseX,mouseY-25);
   noStroke();
  
  trail += dist(mouseX, mouseY, pmouseX, pmouseY);
  if (trail >= textWidth(string[index])) {

    trail = 0;
    if (index >= string.length) {
      index = 0;
    }

    push();
    angle = atan((mouseY - pmouseY) / (mouseX - pmouseX));
    // currX=(mouseX+pmouseX)/2;
    // currY=(mouseY+pmouseY)/2;
    currX = pmouseX;
    currY = pmouseY;
    translate(currX, currY);
    rotate(angle);
    
    
   

    if (index == (string.length - 1)) {
      textSize(15);
      // textFont(brushFont);
      fill(0);
       fill(80, 80, 255);
      //textFont(sansFont);
       textFont(serifFont);
      text("Newly", 0, -8);
      text("Formed", 6, 8);


    } else
     if (string[index]=="="){
       
  
       
       strokeWeight(1);
       fill(255);
       stroke(80, 80, 255);
        rect(-10,-10,20,20);
        ellipse(10,0,10,20);
        ellipse(-10,0,10,20);
      
  
     }
    else
     if (string[index]=="<"){
       
  
       
       strokeWeight(1);
       fill(255);
       stroke(80, 80, 255);
     
        line(-10,0,10,0);
   

      
  
     }
  else    {
      
      // textFont(brushFont);
     // textFont(serifFont);
      text(string[index], 0, 0);
    }

    index++;

    pop();
  }
  }
}

function mouseReleased() {
  trail = 0;

}
