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
const backgroungLayer0 = new Image();
backgroungLayer0.src = './img/foret1/PNG/Backgrounds/layer0.png';
const backgroungLayer1 = new Image();
backgroungLayer1.src = './img/foret1/PNG/Backgrounds/layer1.png';
const backgroungLayer2 = new Image();
backgroungLayer2.src = './img/foret1/PNG/Backgrounds/layer2.png';
const backgroungLayer3 = new Image();
backgroungLayer3.src = './img/foret1/PNG/Backgrounds/layer3.png';
const backgroungLayer4 = new Image();
backgroungLayer4.src = './img/foret1/PNG/Backgrounds/layer4.png';
const backgroungLayer5 = new Image();
backgroungLayer5.src = './img/foret1/PNG/Backgrounds/layer5.png';
const backgroungLayer6 = new Image();
backgroungLayer6.src = './img/foret1/PNG/Backgrounds/layer6.png';
const backgroungLayer7 = new Image();
backgroungLayer7.src = './img/foret1/PNG/Backgrounds/layer7.png';
const backgroungLayer8 = new Image();
backgroungLayer8.src = './img/foret1/PNG/Backgrounds/layer8.png';
const backgroungLayer9 = new Image();
backgroungLayer9.src = './img/foret1/PNG/Backgrounds/layer9.png';
const backgroungLayer10 = new Image();
backgroungLayer10.src = './img/foret1/PNG/Backgrounds/layer10.png';
const backgroungLayer11 = new Image();
backgroungLayer11.src = './img/foret1/PNG/Backgrounds/layer11.png';

// each decrease loop x by 1
// move to direction negative horizontal axis x
let x = 0;
let x2 = 800;
// animation
function animate() {
    // delete the old layer
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //call ctx dot draw image built-in canvas method
    ctx.drawImage(backgroungLayer0, x, 0);
    ctx.drawImage(backgroungLayer0, x2, 0);
    ctx.drawImage(backgroungLayer1, x, 0);
    ctx.drawImage(backgroungLayer1, x2, 0);
    ctx.drawImage(backgroungLayer2, x, 0);
    ctx.drawImage(backgroungLayer2, x2, 0);
    ctx.drawImage(backgroungLayer3, x, 0);
    ctx.drawImage(backgroungLayer3, x2, 0);
    ctx.drawImage(backgroungLayer4, x, 0);
    ctx.drawImage(backgroungLayer4, x2, 0);
    ctx.drawImage(backgroungLayer5, x, 0);
    ctx.drawImage(backgroungLayer5, x2, 0);
    ctx.drawImage(backgroungLayer6, x, 0);
    ctx.drawImage(backgroungLayer6, x2, 0);
    ctx.drawImage(backgroungLayer7, x, 0);
    ctx.drawImage(backgroungLayer7, x2, 0);
    ctx.drawImage(backgroungLayer8, x, 0);
    ctx.drawImage(backgroungLayer8, x2, 0);
    ctx.drawImage(backgroungLayer9, x, 0);
    ctx.drawImage(backgroungLayer9, x2, 0);
    ctx.drawImage(backgroungLayer10, x, 0);
    ctx.drawImage(backgroungLayer10, x2, 0);
    ctx.drawImage(backgroungLayer11, x, 0);
    ctx.drawImage(backgroungLayer11, x2, 0);
    //repetition image
    if (x < -800) x = 800 + x2 - gameSpeed;
    //animation image
    else x -= gameSpeed;
    //repetition image
    if (x2 < -800) x2 = 800 + x - gameSpeed;
    //animation image
    else x2 -= gameSpeed;
    // built-in request animation frame function
    requestAnimationFrame(animate);
};
animate();
