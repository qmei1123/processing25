var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1000);
    background(255,127,191);
    ragged = new Ragged();
    frameRate(.75);
}
        
class Ragged {
    constructor() {
    
    }
//    move() {
//        xOne = xOne + random(-5, 5);
//        xTwo = xTwo + random(-5, 5);
//    }
    show() {
        noFill();
        stroke(255,random(127),random(191));
        strokeWeight(random(2));
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xTwo + i, yTwo + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 20) {
        for (y = 0; y < height; y += 20) {
            xOne = 25 * sin(60) + 10;
            xTwo = random(20)*cos(60) + 10;
            
            yOne = 10 * cos(60) + 10;
            yTwo = random(20, 80)*sin(60) + 10;

            ragged.show();
        //    ragged.move();
        }
    }
}


