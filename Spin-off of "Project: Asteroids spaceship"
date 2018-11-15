// Sets angle to degrees
angleMode = "degrees";

// Function to set up ship
var SpaceShip = function() {
    // Setting starting position, velocity, acceleration and angle
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0,0);
    this.acceleration = new PVector(0, 0);
    this.angle = 0;
};

// Function to update ship position
SpaceShip.prototype.update = function () {
    // Calculates tangent of angle
    var y = tan(this.angle);
    
    // If up arrow is pressed
    if (keyIsPressed && keyCode === UP) {
        
        // If angle is between 0 and 90 or 270 and 360
        if ((this.angle >= 0 && this.angle < 90) || (this.angle > 270 && this.angle <= 360)) {
            this.acceleration.add(0.1, y / 10);
        }
        
        // If angle is 90
        else if (this.angle === 90)
        {
            this.acceleration.add(0, 0.1);
        }
        
        // If angle is between 90 and 270
        else if (this.angle > 90 && this.angle < 270) {
            this.acceleration.sub(0.1, y / 10);
        }
        
        // If angle is 270
        else if (this.angle === 270)
        {
            this.acceleration.add(0, -0.1);
        }
    }
    // If down arrow is pressed
    else if (keyIsPressed && keyCode === DOWN) {
        
        // if angle is between 0 and 90 or 270 and 360
        if ((this.angle >= 0 && this.angle < 90) || (this.angle > 270 && this.angle <= 360)) {
            // Decelerates the ship
            this.acceleration.sub(0.1, y / 10);
            if (this.velocity.x < 0) {
                this.velocity.set(0, 0);
            }
        }
        // If angle is 90
        else if (this.angle === 90)
        {
            // Decelerates the ship
            this.acceleration.add(0, -0.1);
            if (this.velocity.y < 0) {
                this.velocity.set(0, 0);
            }
        }
        else if (this.angle > 90 && this.angle < 270) {
            // Decelerates the ship
            this.acceleration.add(0.1, y / 10);
            if (this.velocity.x > 0) {
                this.velocity.set(0, 0);
            }
        }
        else if (this.angle === 270)
        {
            // Decelerates the ship
            this.acceleration.add(0, 0.1);
            if (this.velocity.y > 0) {
                this.velocity.set(0, 0);
            }
        }
    }
    
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.x = constrain(this.velocity.x, -5, 5);
    this.velocity.y = constrain(this.velocity.y, -5, 5);
};

// Function to turn left
SpaceShip.prototype.turnLeft = function() {
    pushMatrix();
    this.velocity.rotate(-3);
    this.acceleration.rotate(-3);
    // Changes angle
    this.angle -= 3;
    popMatrix();
    
    // If angle is less than 0, reset at 360
    if (this.angle < 0) {
        this.angle += 360;
    }
};

// Function to turn right
SpaceShip.prototype.turnRight = function() {
    pushMatrix();
    this.velocity.rotate(3);
    this.acceleration.rotate(3);
    // Changes angle
    this.angle += 3;
    popMatrix();
    
    // If angle is less than 0, reset at 360
    if (this.angle > 360) {
        this.angle -= 360;
    }
};

// Displays ship
SpaceShip.prototype.display = function () {
    // Sets stroke
    strokeWeight(2);
    pushMatrix();
    rectMode(CENTER);
    translate(this.position.x, this.position.y);
    
    // Rotates ship with angle
    rotate(this.angle);
    // Draws thrusters
    fill(102, 102, 102);
    rect(-25, -10, 10, 15);
    rect(-25, 10, 10, 15);
    rect(50, 10, 10, 15);
    rect(50, -10, 10, 15);
    
    // Draws flames
    fill(207, 148, 0);
    // If up is pressed, both back flames appear
    if (keyIsPressed && keyCode === UP) {
        triangle(-30, -17, -30, -2, -50, -8.5);
        triangle(-30, 3, -30, 18, -50, 10.5);
    }
    // If left is pressed, bottom back flame appears
    else if (keyIsPressed && keyCode === LEFT) {
        triangle(-30, 3, -30, 18, -50, 10.5);
    }
    // If right is pressed, top back flame appears
    else if (keyIsPressed && keyCode === RIGHT) {
        triangle(-30, -17, -30, -2, -50, -8.5);
    }
    // If down is pressed, both front flames appear
    else if (keyIsPressed && keyCode === DOWN) {
        triangle(77, -12, 55, -2, 55, -17);
        triangle(77, 15, 55, 3, 55, 17.5);
    }
    
    // Draws body of ship
    fill(93, 111, 212);
    triangle(-20, -30, -20, 30, 100, 0);
    
    // Draws ship window
    fill(187, 223, 250);
    rect(22, 0, 11, 26);
    
    popMatrix();
};

// Makes sure that the ship is always visible
SpaceShip.prototype.checkEdges = function () {
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

// New Ship
var SpaceShip = new SpaceShip();

// Calls left and right turn functions when left and right are pressed
var keyPressed = function() {
    if (keyIsPressed && keyCode === LEFT) {
        SpaceShip.turnLeft();
    } else if (keyIsPressed && keyCode === RIGHT) {
        SpaceShip.turnRight();
    }
};

// Draw function to animate the ships movement
draw = function() {
    background(36, 36, 36);
    var starY = [30,132,66,294,247,230];
    var starX = [30,137,314,193,43,331];
    
    for (var i=0; i<6; i++)
    {
            image(getImage("cute/Star"),starX[i] ,starY[i], 20, 30);
        
    }
    
    
    SpaceShip.update();
    SpaceShip.checkEdges();
    SpaceShip.display();
    keyPressed();
};
