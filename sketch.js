let imagemCenario;
let hipstaSpriteSheet;
let dropletSpriteSheet;
let music;
let jumpSound;

let cenario;
let hipsta;
let droplet;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  hipstaSpriteSheet = loadImage('imagens/personagem/correndo.png');
  dropletSpriteSheet = loadImage('imagens/inimigos/gotinha.png');
  music = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  hipstaY = height - 140;

  cenario = new Cenario(imagemCenario, 1);
  hipsta = new Player(
    hipstaSpriteSheet,
    0,
    height - 140,
    110,
    135,
    {
      spriteSheetW: 220,
      spriteSheetH: 270,
      cols: 4,
      rows: 4
    }
  );

  droplet = new Enemy(
    dropletSpriteSheet,
    width + 512,
    height - 64,
    64,
    64,
    {
      spriteSheetW: 105,
      spriteSheetH: 100,
      cols: 4,
      rows: 7
    });

  music.loop();
}

function keyPressed() {
  if (key === ' ') {
    hipsta.pula() && jumpSound.play();
  }
}

function draw() {
  cenario.exibe();

  droplet.update();

  hipsta.update([droplet]);

  cenario.move();
}