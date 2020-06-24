class Character {

  constructor(spriteSheet, x = 0, y = 0, width = undefined, height = undefined, spriteSheetInfos = undefined) {
    this.spriteSheet = spriteSheet;
    this.spriteSheetW = spriteSheetInfos.spriteSheetW || this.spriteSheet.width;
    this.spriteSheetH = spriteSheetInfos.spriteSheetH || this.spriteSheet.height;
    this.width = width || this.spriteSheetW;
    this.height = height || this.spriteSheetH;

    this.x = x;
    this.y = y;

    // Quantidade de sprites na vertical no spriteSheet
    this.cols = spriteSheetInfos.cols || 1;
    // Quantidade de sprites na horizontal no spriteSheet
    this.rows = spriteSheetInfos.rows || 1;

    this.currentSprite = 0;
  }

  update() {
    this.draw();
  }

  draw() {
    const spriteCoords = this.getSprite(this.currentSprite);

    image(
      this.spriteSheet,  // SpriteSheel completo
      this.x,            // Coord X do Char
      this.y,            // Coord Y do Char
      this.width,        // Largura do Char
      this.height,       // Altura  do Char
      spriteCoords[0],   // Coord X do inicio da sprite
      spriteCoords[1],   // Coord Y do inicio da sprite
      this.spriteSheetW, // Largura da sprite
      this.spriteSheetH  // Altura  da sprite
    );
    this.anim();
  }

  getSprite(index) {
    index = Math.floor(index);
    const x = index % this.cols;
    const y = Math.floor(index / this.cols);
    return [
      this.spriteSheetW * x,
      this.spriteSheetH * y
    ];
  }

  anim() {
    this.currentSprite = (this.currentSprite + 1) % (this.rows*this.cols);
  }
}