let radius;
let x;
let randomNumber;


function setup() {
    createCanvas(600,600);
    radius = 50;
    x = 0
    frameRate(5)
}

function draw() {
    // background(220);  // greyscale
    // background(200,200,200); 
    // if remove background,
    // the canvas won't redraw

    // fill(255,0,0);
    // noStroke();

    // rect(0,0,300,200);

    // stroke(255,255,255);
    // strokeWeight(3);
    // ellipse(200,200,50,200);

    // fill(23,25,24,50)
    // ellipse(200,200,200,200);

    // ellipse(300,300,radius,radius);

    // // animation
    // ellipse(x,200,radius,radius)
    // x = x+1

    // // ellipse(mouseX,mouseY,radius,radius)

    // rect(100,400,200,200,2,20,10,15)

    // arc(400,200,100,150,0,180,PIE)


    // ellipse(mouseX,mouseY,50,50);
    // if(mouseX > 200) {
    //     fill(255,0,0);
    // } else {
    //     fill(0,0,255);
    // }

    // fill(0,0,0);
    // noStroke()
    // ellipse(mouseX,mouseY,20,20)

    fill(0,0,0)
    rect(0,0,40,40)

    // background(220);
    x = 25
	for(x=25;x<400;x=x+50) {
		ellipse(x, 25,50,50)
}

    background(220);
        
    push();
    translate(200,200);
    rotate(45);
    rect(0,0,50,50)
    pop()



	push();
	translate(200,200);

	for ( i=0; i<8; i=i+1 ) {
		ellipse(40,0,20,20);
		rotate(22.5);
		ellipse(70,0,20,20);
		rotate(-22.5);
		ellipse(100,0,20,20);
		rotate(45);
}
	pop()
    

}

// function mouseDragged() {
//     fill(0,0,0);
//     noStroke();
//     ellipse(mouseX,mouseY,20,20)
// }

// function mousePressed() {
//     fill(255,0,0);
//     noStroke();
//     ellipse(mouseX,mouseY,20,20)
// }

function mouseDragged() {
    stroke(255,0,0);
    strokeWeight(10);
    // pmouse = previous mouse position
    line(mouseX,mouseY,pmouseX,pmouseY) 
}

// Create a button
function mousePressed() {
    if(mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) {
        print('black button clicked')
    }
}