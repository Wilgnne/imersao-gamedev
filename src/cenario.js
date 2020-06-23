class Cenario {
  constructor(imagem, velocity = 0) {
    this.imagem = imagem;
    this.velocity = velocity;
    this.offset = 0;
  }

  exibe() {
    image(
      this.imagem,
      -this.offset,
      0,
      width,
      height
    );
    image(
      this.imagem,
      width - this.offset,
      0,
      width,
      height
    );
  }

  move() {
    this.offset = (this.offset + this.velocity) % width;
  }
}