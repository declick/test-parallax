// pointer
const canvas = document.getElementById('canvas1');
// instance api '2d' canvas
const ctx = canvas.getContext('2d');
// Scalling Global canevas
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
// scrolling speed
let gameSpeed = 5;
// import backgroung / .appenChild import in html

const backgroungLayer1 = new Image();
backgroungLayer1.src = './img/foret2/layer-1.png';
const backgroungLayer2 = new Image();
backgroungLayer2.src = './img/foret2/layer-2.png';
const backgroungLayer3 = new Image();
backgroungLayer3.src = './img/foret2/layer-3.png';
const backgroungLayer4 = new Image();
backgroungLayer4.src = './img/foret2/layer-4.png';

// each decrease loop x by 1
// move to direction negative horizontal axis x
let x = 0;
let x2 = 2400;
// animation
function animate() {
    // delete the old layer
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //call ctx dot draw image built-in canvas method

    ctx.drawImage(backgroungLayer1, x, 0);
    ctx.drawImage(backgroungLayer1, x2, 0);
    ctx.drawImage(backgroungLayer2, x, 0);
    ctx.drawImage(backgroungLayer2, x2, 0);
    ctx.drawImage(backgroungLayer3, x, 0);
    ctx.drawImage(backgroungLayer3, x2, 0);
    ctx.drawImage(backgroungLayer4, x, 0);
    ctx.drawImage(backgroungLayer4, x2, 0);

    if (x < -2400) x = 2400 + x2 - gameSpeed;
    //animation image
    else x -= gameSpeed;
    //repetition image
    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    //animation image
    else x2 -= gameSpeed;
    // built-in request animation frame function
    requestAnimationFrame(animate);
};
animate();
