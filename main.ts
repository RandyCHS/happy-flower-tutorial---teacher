let projectile: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . e e . . . . . . . . . 
. . . . . . e e . . . . . . . . 
. . . . . . . e . . . . . . . . 
. . . . . 5 f 5 f 5 . . . . . . 
. . . . . 5 f 5 f 5 2 2 . . . . 
. . e f f 5 f 5 f 5 2 e . . . . 
. . . . . 5 f 5 f 5 2 2 . . . . 
. . . . . 5 f 5 f 5 . . . . . . 
. . . . . . . e . . . . . . . . 
. . . . . . e e . . . . . . . . 
. . . . . e e . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
