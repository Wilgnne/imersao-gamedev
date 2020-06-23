class Character {
  constructor(spriteSheet, x = 0, y = 0, w = undefined, h = undefined, spriteSheetInfos = undefined) {
    this.spriteSheet = spriteSheet;
    this.spriteSheetW = spriteSheetInfos.spriteSheetW || this.spriteSheet.width;
    this.spriteSheetH = spriteSheetInfos.spriteSheetH || this.spriteSheet.height;
    this.w = w || this.spriteSheetW;
    this.h = h || this.spriteSheetH;

    this.x = x;
    this.y = y;

    this.vertical = spriteSheetInfos.vertical || 1;
    this.horizontal = spriteSheetInfos.horizontal || 1;

    this.currentSprite = 0;
  }

  draw() {
    const spriteCoords = this.getSprite(this.currentSprite);

    image(
      this.spriteSheet,  // SpriteSheel completo
      this.x,            // Coord X do Char
      this.y,            // Coord Y do Char
      this.w,            // Largura do Char
      this.h,            // Altura  do Char
      spriteCoords[0],   // Coord X do inicio da sprite
      spriteCoords[1],   // Coord Y do inicio da sprite
      this.spriteSheetW, // Largura da sprite
      this.spriteSheetH  // Altura  da sprite
    );
    this.anim();
  }

  getSprite(index) {
    index = Math.floor(index);
    const x = index % this.horizontal;
    const y = Math.floor(index / this.vertical);
    return [
      this.spriteSheetW * x,
      this.spriteSheetH * y
    ];
  }

  anim() {
    this.currentSprite = (this.currentSprite + 1) % 16;
  }
}