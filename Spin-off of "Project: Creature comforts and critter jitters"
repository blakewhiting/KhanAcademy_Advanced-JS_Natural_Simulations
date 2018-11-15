// Mover parameters
var Mover = function() {
    this.position = new PVector(random(width), random(height));
    this.mass = 25;
    this.G = 1;
    
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

// Makes the attraction to the movers
Mover.prototype.calculateAttraction = function(p1, p2) {
    var force = PVector.sub(p1.position, p2.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);  
    force.normalize();
    var strength = (this.G * p1.mass * p2.mass) / (distance * distance);
    force.mult(strength);
    return force;
};

// Makes sure that the mover is always visible
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

// Updates the velocity and acceleration (position) of the mover
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.limit(5);
};

// Applies a force to the mover
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force,this.mass);
    this.acceleration.add(f);
    this.acceleration.mult(-1);
};

// Displays the robot movers
Mover.prototype.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    image(getImage("avatars/robot_male_3"), this.position.x, this.position.y, 20, 30);
};

// Sets the parameters of the big movers
var big = function(b) {
    this.position = new PVector(b.position.x + random(-30, 30), b.position.y + random(-30, 30));
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = 10;
};

// Applies a force to the big movers
big.prototype.applyForce = function(force) {
    var f = PVector.div(force,this.mass);
    this.acceleration.add(f);
};
 
// Updates the position of the big movers
big.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.limit(5);
};

// Makes sure the big movers don't go off the screen
big.prototype.checkEdges = function() {
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

// Displays the big movers
big.prototype.display = function() {
    noStroke();
    fill(47, 186, 47);
    image(getImage("avatars/spunky-sam-red"),this.position.x, this.position.y, 45, 45);
};

var Background = function()
{
    noStroke();
    // Sky
    background(102, 186, 242);
    // Sun
    fill(255, 221, 0);
    ellipse(63, 55, 65, 65);
    // Ground
    fill(53, 158, 44);
    rect(0, 350, 400, 50);
};

var movers = [];
var small = [];

for (var j = 0; j < 3; j++) {
    small[j] = new Mover();
}

for (var i = 0; i < 3; i++) {
    movers[i] = new big(small[i]);
}


// Draw Function
draw = function() {
    // Calls Background to be drawn
    Background();
    
    // Draws the small movers
    for (var j = 0; j < 3; j++) {
    var smallForce = small[j].calculateAttraction(movers[j], small[j]);
    small[j].applyForce(smallForce);
    
    small[j].update();
    small[j].checkEdges();
    small[j].display();
    }
    
    // Draws the big movers
    for (var i = 0; i < movers.length; i++) {
        var bigForce = small[i].calculateAttraction(small[i], movers[i]);
        movers[i].applyForce(bigForce);

        movers[i].update();
        movers[i].checkEdges();
        movers[i].display();
    }
};
