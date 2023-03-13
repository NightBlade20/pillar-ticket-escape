namespace SpriteKind {
    export const Attack = SpriteKind.create()
    export const enemyprojectile = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3.setPosition(mySprite.x, mySprite.y)
    mySprite3.setVelocity(0, -50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 8 8 f f f f f . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e 8 f 8 f f 8 f 8 e f . . 
        . . f f f 8 8 e e 8 8 f f f . . 
        . f f e f 8 f e e f 8 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 8 8 f f f f . . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e 8 f 8 f f f 8 f e f . . 
        . . f f f 8 f e e 8 8 f f f . . 
        . . f e 8 f f e e 8 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 8 8 8 8 8 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 8 8 f f f f f . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e 8 f 8 f f 8 f 8 e f . . 
        . . f f f 8 8 e e 8 8 f f f . . 
        . f f e f 8 f e e f 8 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 8 8 f f f f . . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e f 8 f f f 8 f 8 e f . . 
        . . f f f 8 8 e e f 8 f f f . . 
        . . f e e f 8 e e f f 8 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 8 8 8 8 8 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    false
    )
    mySprite.vx = -100
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.ashes, 500)
    game.gameOver(false)
    game.setGameOverEffect(false, effects.none)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 8 8 f f f f f . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e 8 f 8 f f 8 f 8 e f . . 
        . . f f f 8 8 e e 8 8 f f f . . 
        . f f e f 8 f e e f 8 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 8 8 f f f f . . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e 8 f 8 f f f 8 f e f . . 
        . . f f f 8 f e e 8 8 f f f . . 
        . . f e 8 f f e e 8 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 8 8 8 8 8 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 8 8 f f f f f . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e 8 f 8 f f 8 f 8 e f . . 
        . . f f f 8 8 e e 8 8 f f f . . 
        . f f e f 8 f e e f 8 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 8 8 f f f f . . . 
        . . f f e 8 e 8 8 e 8 e f f . . 
        . . f e f 8 f f f 8 f 8 e f . . 
        . . f f f 8 8 e e f 8 f f f . . 
        . . f e e f 8 e e f f 8 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 8 8 8 8 8 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    false
    )
    mySprite.vx = 100
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite3.setPosition(mySprite.x, mySprite.y)
})
scene.onHitWall(SpriteKind.enemyprojectile, function (sprite, location) {
    sprites.destroy(mySprite4)
})
sprites.onDestroyed(SpriteKind.enemyprojectile, function (sprite) {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 f f f 2 . . . . . 
        . . . . . . 2 f f f 2 . . . . . 
        . . . . . . 2 f f f 2 . . . . . 
        . . . . . . 2 f f f 2 . . . . . 
        . . . . . . 2 f f f 2 . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . 2 c f f f c 2 . . . . 
        . . . . . 2 f f f f f 2 . . . . 
        . . . . . 2 f f f f f c . . . . 
        . . . . . c f f f f f c . . . . 
        . . . . . c f f f f f c . . . . 
        . . . . . c f f f f f c . . . . 
        . . . . . 2 c f f f c 2 . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.enemyprojectile)
    mySprite4.setPosition(mySprite2.x, mySprite2.y)
    pause(200)
    mySprite4.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.enemyprojectile, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -25
    sprites.destroy(mySprite4)
})
/**
 * Work on the few glitches left and add more detailing to sprites and add other things to make it better
 */
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . . 5 4 5 . . . . . . 
        . . . . . . 5 4 5 . . . . . . 
        . . . . . . 5 4 5 . . . . . . 
        . . . . . . 5 4 5 . . . . . . 
        . . . . . . 5 4 5 . . . . . . 
        . . . . . . 5 4 5 . . . . . . 
        . . . . . . 5 4 5 . . . . . . 
        . . . . . . 3 3 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite3.setPosition(mySprite.x, mySprite.y)
    pauseUntil(() => controller.A.isPressed())
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -5
    sprites.destroy(mySprite3)
})
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 8 f e e e e f f . . . 
    . . . f 8 8 8 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 8 8 8 8 e e f f f f . . 
    . . f 8 e f f f f 8 8 8 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 8 8 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Player)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . 
    . . . . . . f f f . . . . . . 
    . . . . . . f f f . . . . . . 
    . . . . . . 5 4 5 . . . . . . 
    . . . . . . 5 4 5 . . . . . . 
    . . . . . . 5 4 5 . . . . . . 
    . . . . . . 5 4 5 . . . . . . 
    . . . . . . 5 4 5 . . . . . . 
    . . . . . . 5 4 5 . . . . . . 
    . . . . . . 5 4 5 . . . . . . 
    . . . . . . 3 3 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
mySprite3.setPosition(mySprite.x, mySprite.y)
mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 f f f 2 . . . . . 
    . . . . . . 2 f f f 2 . . . . . 
    . . . . . . 2 f f f 2 . . . . . 
    . . . . . . 2 f f f 2 . . . . . 
    . . . . . . 2 f f f 2 . . . . . 
    . . . . . . c f f f c . . . . . 
    . . . . . 2 c f f f c 2 . . . . 
    . . . . . 2 f f f f f 2 . . . . 
    . . . . . 2 f f f f f c . . . . 
    . . . . . c f f f f f c . . . . 
    . . . . . c f f f f f c . . . . 
    . . . . . c f f f f f c . . . . 
    . . . . . 2 c f f f c 2 . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.enemyprojectile)
mySprite4.setPosition(mySprite2.x, mySprite2.y)
mySprite4.setVelocity(0, 50)
mySprite2.y += 0
statusbar = statusbars.create(25, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setLabel("HP")
statusbar.positionDirection(CollisionDirection.Top)
statusbar2 = statusbars.create(80, 4, StatusBarKind.EnemyHealth)
statusbar2.attachToSprite(mySprite2)
mySprite.y = 99
scene.cameraFollowSprite(mySprite)
forever(function () {
	
})
forever(function () {
    if (statusbar2.value == 0) {
        mySprite4.setImage(img`
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
            `)
        sprites.destroy(mySprite4)
    }
})
game.onUpdateInterval(500, function () {
	
})
