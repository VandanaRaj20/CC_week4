//I have created a simple facial expression change in emojis when clicked and changes background color whenever I click arrow keys

//I set initial expression to 0
let exp = 0;
let value = 0;
let emojisize = 200;
let emojiX,emojiY;
let bgColor;

function setup() {
  createCanvas(600, 600);
  bgColor = color('#fcc7e2')
  emojiX = width / 2;
  emojiY = height / 2;
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(bgColor);
  
  //current expression - smiley face
  if (exp === 0) {
  noStroke()
  fill('#fadf66')
  ellipse(emojiX, emojiY, emojisize);
  
  noStroke()
  fill('#75630f')
  ellipse(emojiX - 30, emojiY - 10, 20, 40);
  
  noStroke()
  fill('#75630f')
  ellipse(emojiX + 30, emojiY - 10, 20, 40);
    
  arc(emojiX, emojiY + 30, 70, 40, 0, PI);
    
  }
  
  //after second click - angry face
  if (exp === 1) {
  noStroke()
  fill('#ff8742')
  ellipse(emojiX, emojiY, emojisize);
  
  noStroke()
  fill('#803306')
  arc(emojiX - 30, emojiY - 10, 20, 40, 0, PI + QUARTER_PI, OPEN);
  
  noStroke()
   fill('#803306')
  arc(emojiX + 30, emojiY - 10, 20, 40, 0 - QUARTER_PI, PI, OPEN);
    
  arc(emojiX, emojiY + 30, 70, 20, PI, 0);
    
  }
  
  //after third click - sad face
  if (exp === 2) {
  noStroke()
  fill('#81d3fc')
  ellipse(emojiX, emojiY, emojisize);
  
  noStroke()
  fill('#015580')
  arc(emojiX - 30, emojiY - 10, 20, 40, 0 - QUARTER_PI, PI, OPEN);
  
  noStroke()
   fill('#015580')
  arc(emojiX + 30, emojiY - 10, 20, 40, 0, PI + QUARTER_PI, OPEN);
    
  arc(emojiX, emojiY + 40, 70, 40, PI, 0);
    
  }
}

function mousePressed() {
  // Cycle to the next expression when the emoji is clicked
  exp = (exp + 1) % 3;
}

//Background color changes whenever I click these arrow keys
function keyPressed() {
  if (keyCode === UP_ARROW) {
    bgColor = color('#796e8a');
  } else if (keyCode === DOWN_ARROW) {
      bgColor = color('#365236');
  }
  else if (keyCode === LEFT_ARROW) {
     bgColor = color('#adac78');
  }
  else if (keyCode === RIGHT_ARROW) {
     bgColor = color('#fcc7e2');
  }
  
}
