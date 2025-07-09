// p5.js // Particle Sketch - using p5.js instance mode

let movementSketch = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('movementpatternexperiment');
    };

    p.draw = () => {
        p.background(220);

    };
};
// DOM content ready, manual animation part
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById("movementpatternexperiment");
    if (!section) {
        console.error("Section with id 'movementpatternexperiment' not found.");
        return;
    }

    const img = document.createElement("img");
    img.src = "willowtreeroots.jpg";
    img.alt = "Moving Image";
    Object.assign(img.style, {
        width: "300px",
        opacity: "0",
        transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
        display: "block",
        position: "relative",
        margin: "20px 0",
        transform: "translateX(0px)"
    });

    const startBtn = document.createElement("button");
    startBtn.textContent = "Start Animation";
    Object.assign(startBtn.style, { padding: "10px 15px", margin: "5px", fontSize: "16px" });

    const stopBtn = document.createElement("button");
    stopBtn.textContent = "Stop Animation";
    Object.assign(stopBtn.style, { padding: "10px 15px", margin: "5px", fontSize: "16px" });

    section.appendChild(img);
    section.appendChild(startBtn);
    section.appendChild(stopBtn);

    let visible = false;
    let fadeInterval = null;
    let posX = 0;

    function toggleAnimation() {
        visible = !visible;
        posX += 100;
        img.style.opacity = visible ? "1" : "0";
        img.style.transform = `translateX(${posX}px)`;
    }

    startBtn.addEventListener("click", () => {
        if (!fadeInterval) {
            toggleAnimation();
            fadeInterval = setInterval(toggleAnimation, 3000);
        }
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(fadeInterval);
        fadeInterval = null;
    });
    startBtn.classList.add('start'); // optional, if you want a separate start class
    stopBtn.classList.add('stop');
});