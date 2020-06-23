let imagemCenario;
let hipstaSpriteSheet;
let music;

let cenario;
let hipsta;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  hipstaSpriteSheet = loadImage('imagens/personagem/correndo.png');
  music = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  hipstaY = height - 140;

  cenario = new Cenario(imagemCenario, 1);
  hipsta = new Character(
    hipstaSpriteSheet,
    0,
    height - 140,
    110,
    135,
    {
      spriteSheetW: 220,
      spriteSheetH: 270,
      horizontal: 4,
      vertical: 4
    }
  );

  music.loop();
}

function draw() {
  cenario.exibe();

  hipsta.draw();

  cenario.move();
}