noStroke();
fill(184, 184, 184);
rect(0,0,400,400);

// Mountain function
var drawMountain = function() {
    
    var inc = 0.01;
    
    for (var p = 0; p < inc*width; p += inc) {
        var n = noise(p);
        var y = map(n, 0, 1, 503, height/223);
        fill(114, 105, 138);
        noStroke();
        rect(p*100, height-y, 1, y);
    }
};



// Other Mountain function
var drawMountain2 = function() {
    var inc = 0.010;
    for (var g = 0; g < inc*width; g += inc) {
        var n = noise(g);
        var y = map(n, 0, 5, -15, height/0.2);
        fill(128, 128, 128);
        noStroke();
        rect(g*100, height-y, 1, y);
    }
    // Sun
    fill(251, 255, 0);
    ellipse(63,68,77,75);
};

// bird function
var birds = function() {
    fill(13, 11, 11);
    for (var bird = 0; bird < 5; bird++){
        ellipse(random(9, 322), random(43,216), 9, 4); 
    }
};

//Calling functions
drawMountain();
drawMountain2();
birds();
