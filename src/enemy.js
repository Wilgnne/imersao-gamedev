class Enemy extends Character {

  constructor(spriteSheet, x = 0, y = 0, width = undefined, height = undefined, spriteSheetInfos = undefined) {
    super(spriteSheet, x, y, width, height, spriteSheetInfos);

    this.offset = 0;
    this.velocity = 5;

    this.isCollisionActive  = true;
  }

  update() {
    super.update();
    this.move();
  }

  move() {
    this.offset = (this.offset + this.velocity) % (width + 512);
    if (this.offset === 0) {
      this.isCollisionActive = true;
    }
    this.x = (width) - this.offset;
  }
}