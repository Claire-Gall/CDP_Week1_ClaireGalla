// 2D Drawing Sketch - using p5.js instance mode
var sketch1 = function (p) {
    // All variables are scoped to this instance
    var canvasWidth = 1000;
    var canvasHeight = 600;
    var gridSpacing = 50;
    var canvas;

    let img;

    // Load the image and create a p5.Image object.
    function preload() {
        img = loadImage('/digital drawing experiments/fogcollector_1043.jpg');
    }

    function setup() {
        createCanvas(100, 100);

        // Draw the image.
        image(img, 0, 0);

        describe(');
    }
    p.draw = function () {
        p.background(250);
        drawGrid();
        drawPrimitives();
    };

    function drawGrid() {
        p.stroke(200);
        p.strokeWeight(1);
        for (var x = 0; x <= p.width; x += gridSpacing) {
            p.line(x, 0, x, p.height);
        }
        for (var y = 0; y <= p.height; y += gridSpacing) {
            p.line(0, y, p.width, y);
        }
    }

    function drawPrimitives() {
        // Rectangle
        p.fill(255, 100, 100);
        p.rect(120, 80, 100, 60);
        // Ellipse
        p.fill(100, 180, 255);
        p.ellipse(350, 200, 90, 90);
        // Line
        p.stroke(80, 200, 120);
        p.strokeWeight(4);
        p.line(500, 100, 700, 300);
        // Triangle
        p.noStroke();
        p.fill(255, 220, 80);
        p.triangle(600, 80, 750, 60, 700, 200);
    }
};

// Create the instance
var myp5_1 = new p5(sketch1, 'canvas-container-1'); 