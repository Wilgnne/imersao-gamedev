let imagemCenario;
let hipstaSpriteSheet;

const spriteSheetW = 220;
const spriteSheetH = 270;
const hipstaW = 110;
const hipstaH = 135;

let hipstaX = 0;
let hipstaY = 0;

let cenario;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  hipstaSpriteSheet = loadImage('imagens/personagem/correndo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  hipstaY = height - 140;

  cenario = new Cenario(imagemCenario, 50);
}

function draw() {
  cenario.exibe();
  image(
    hipstaSpriteSheet,
    hipstaX,
    hipstaY,
    hipstaW,
    hipstaH,
    0,
    0,
    spriteSheetW,
    spriteSheetH
  );
}