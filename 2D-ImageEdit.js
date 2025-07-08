var sketch1 = function (p) {
    var canvasWidth = 1000;
    var canvasHeight = 600;
    var gridSpacing = 50;
    var img = null;
    var input;

    p.setup = function () {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background(255);

        // Create file input element for uploading image
        input = p.createFileInput(handleFile);
        input.position(10, canvasHeight + 20); // adjust position below canvas
    };

    p.draw = function () {
        p.background(255);

        if (img) {
            // Draw uploaded image as background
            p.image(img, 0, 0, canvasWidth, canvasHeight);
        }

        drawGrid();
        drawPrimitives();
    };

    function handleFile(file) {
        if (file.type === 'image') {
            img = p.loadImage(file.data, () => {
                console.log('Image loaded successfully');
            });
        } else {
            img = null;
        }
    }

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
        p.fill(255, 100, 100, 200);
        p.noStroke();
        p.rect(120, 80, 100, 60);

        // Ellipse
        p.fill(100, 180, 255, 180);
        p.ellipse(350, 200, 90, 90);

        // Line
        p.stroke(80, 200, 120);
        p.strokeWeight(4);
        p.line(500, 100, 700, 300);

        // Triangle
        p.noStroke();
        p.fill(255, 220, 80, 180);
        p.triangle(600, 80, 750, 60, 700, 200);
    }
};

var myp5_1 = new p5(sketch1, 'canvas-container-1');