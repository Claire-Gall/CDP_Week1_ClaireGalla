// Tree Root Sketch - using p5.js instance mode
const rootSketch = (p) => {
    let img;

    p.preload = () => {
        img = p.loadImage('willowtreeroots.png');
    };

    p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        canvas.parent('movementpatternexperiment');
    };

    p.draw = () => {
        p.background(255);
        p.tint(255, 100); // Set transparency
        p.image(img, 0, 0, p.width, p.height);
    };
};

new p5(rootSketch);