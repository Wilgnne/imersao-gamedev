class Character {
  constructor(spriteSheet, x=0, y=0, w=undefined, h=undefined, spriteSheetInfos=undefined) {
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
      this.spriteSheet,
      this.x,
      this.y,
      this.w,
      this.h,
      spriteCoords[0],
      spriteCoords[1],
      this.spriteSheetW,
      this.spriteSheetH
    );

    this.anim();
  }

  getSprite (index) {
    index = Math.floor(index);
    const x = index % this.horizontal;
    const y = Math.floor(index / this.vertical);
    return [
      this.spriteSheetW * x,
      this.spriteSheetH * y
    ];
  }

  anim () {
    this.currentSprite = (this.currentSprite + 1) % 16;
  }
}