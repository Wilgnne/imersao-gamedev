class Player extends Character {

  constructor(spriteSheet, x = 0, y = 0, width = undefined, height = undefined, spriteSheetInfos = undefined) {
    super(spriteSheet, x, y, width, height, spriteSheetInfos);
    this.initialY = y;

    this.maxJump = 2;
    this.jumpCont = 0;

    this.jumpForce = 500;
    this.jumpVelocity = 0;
    this.gravity = 25;
  }

  update(enemys) {
    super.update();
    this.apllyGravity();

    if (enemys) {
      enemys.map(enemy => this.collider(enemy));
    }
  }

  pula() {

    if (this.jumpCont >= this.maxJump)
      return false;

    this.jumpVelocity = this.jumpForce;
    this.jumpCont++;
    return true;
  }

  apllyGravity() {
    this.y -= (this.jumpVelocity / getFrameRate()) || 0;
    this.jumpVelocity -= this.gravity;

    if (this.y >= this.initialY) {
      this.jumpVelocity = 0;
      this.y = this.initialY;
      this.jumpCont = this.jumpCont === 0 ? 0 : this.jumpCont - 1;
    }
  }

  collider(enemy) {
    if (!enemy.isCollisionActive)
      return;

    const hitbox = 0.7;
    const isColliding = collideRectRect(
      this.x,
      this.y,
      this.width * hitbox,
      this.height * hitbox,
      enemy.x,
      enemy.y,
      enemy.width * hitbox,
      enemy.height * hitbox
    );

    enemy.isCollisionActive = !isColliding;

    if (isColliding)
      noLoop();
  }
}