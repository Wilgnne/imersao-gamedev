class Cenario {
  constructor(imagem, velocity = 0) {
    this.imagem = imagem;
    this.velocity = velocity;
  }

  exibe() {
    image(
      this.imagem,
      -this.velocity,
      0,
      width,
      height
    );
    image(
      this.imagem,
      width - this.velocity,
      0,
      width,
      height
    );
  }
}