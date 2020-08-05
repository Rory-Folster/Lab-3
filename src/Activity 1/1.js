function setup() {
    createCanvas(800, 600);
    
    }


   function draw() {

    colorMode(HSB);
    background(255, 204, 100);

    translate(width / 2, height / 2);
    rotate(PI / 3.0);

    quad(38, 31, 86, 20, 69, 63, 30, 76);
    
    noStroke();
   } 