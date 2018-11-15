// Sets values
var Mover = function() {
  this.position = new PVector(width/2, height/2);
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(-0.001, 0.01);
};

// Changes the velocity and acceleration of the mover
Mover.prototype.update = function() {
    this.acceleration = PVector.random2D();
    this.acceleration.mult(random(3));
    this.velocity.add(this.acceleration);
    this.velocity.limit(9);
    this.position.add(this.velocity);
};

// Displays the mover
Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    image (getImage("avatars/spunky-sam-red"), this.position.x,mouseY,60,60);  
};

// Function makes sure the mover is always visible
Mover.prototype.checkEdges = function() {

    if (this.position.x > width) {
        this.position.x = 0;
    } 
    else if (this.position.x < 0) {
        this.position.x = width;
    }

    if (this.position.y > height) {
        this.position.y = 0;
    } 
    else if (this.position.y < 0) {
        this.position.y = height;
    }
};

var mover = new Mover();

// Draw Function
var draw = function() {
    // Background - Sky
    background(80, 199, 235);
    noStroke();
    // Grass
    fill(0, 196, 29);
    rect(0, 337, 400, 66);
    // Sun
    fill(255, 204, 0);
    ellipse(70, 70, 77, 77);
    // Calls movement
    mover.update();
    mover.checkEdges();
    mover.display(); 
};

