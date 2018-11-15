// Declaring variables
var generator = new Random(1);
var deviation = 50;
var mean = 200;

// Draw function to draw the paint splatters
var draw = function() {
    
    // X and Y numbers generated using nextGaussian
    var numx = generator.nextGaussian();
    var numy = generator.nextGaussian();
    
    // X and Y coordinates are generated
    var x = deviation * numx + mean;
    var y = deviation * numy + mean;
    
    // Colour is assigned and ellipse is drawn
    noStroke();
    fill(209, 54, 209, 10);
    ellipse(x, y, 31, 31);
};
