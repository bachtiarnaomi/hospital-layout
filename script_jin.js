let radius;
let x;

function setup() {
    createCanvas(600,600);
    radius = 50;
    x = 0
}

function draw() {
    // background(220);  // greyscale
    background(200,200,200); 
    // if remove background,
    // the canvas won't redraw

    fill(255,0,0);
    noStroke();

    rect(0,0,300,200);

    stroke(255,255,255);
    strokeWeight(3);
    ellipse(200,200,50,200);

    fill(23,25,24,50)
    ellipse(200,200,200,200);

    ellipse(300,300,radius,radius);

    // animation
    ellipse(x,200,radius,radius)
    x = x+1

    // ellipse(mouseX,mouseY,radius,radius)

    rect(100,400,200,200,2,20,10,15)

    arc(400,200,100,150,0,180,PIE)


    ellipse(mouseX,mouseY,50,50);
    if(mouseX > 200) {
        fill(255,0,0);
    } else {
        fill(0,0,255);
    }

    fill(0,0,0);
    noStroke()
    ellipse(mouseX,mouseY,20,20)

}

function mouseDragged() {
    fill(0,0,0);
    
}