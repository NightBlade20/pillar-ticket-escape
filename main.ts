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
    music.stopAllSounds()
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
    pauseUntil(() => controller.A.isPressed())
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
    pauseUntil(() => controller.A.isPressed())
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
    . . . . f f f f . . . . 
    . . f f a a a a f f . . 
    . f f a a a a a a f f . 
    f f f f d a a a f f f f 
    f f f d d d a a f f f f 
    f f f d d d d a a f f f 
    f d a d d d d d d a d f 
    f d d f f d d f f d d f 
    f e d d d d d d d d a f 
    . f e f d a a d f a f . 
    . f f e f f f f e f f . 
    a 4 f b 1 1 1 1 b f 4 a 
    d d f 1 1 1 1 1 1 f d d 
    d d f a a a a a a f d d 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
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
game.showLongText("The Principal is seeking to destroy you!", DialogLayout.Bottom)
game.showLongText("Dodge his projectiles and avoid certain doom", DialogLayout.Bottom)
game.showLongText("Show your leadership and banish the Evil principal!", DialogLayout.Bottom)
game.showLongText("Double click to shoot your pencils at him and use left and right to dodge his projectiles", DialogLayout.Bottom)
music.play(music.createSong(hex`0078000408030106001c00010a006400f401640000040000000000000000000000000000000002120000001800010518002c00010a2c004000010d`), music.PlaybackMode.UntilDone)
music.play(music.createSong(hex`0082000408090306001c00010a006400f401640000040000000000000000000000000000000002e3014c004e0001114e005000011250005200011452005400010c54005600020d2056005800010f5c005e0001115e00600001126000620002141d62006400010c64006600010d66006800010f6c006e000211206e007000011270007200011472007400010c74007600010d76007800010f78007a00011d7c007e0001117e008000011280008200011482008400010c84008600020d2086008800010f8c008e0001118e00900001129000920002141d92009400010c94009600010d96009800010f9c009e000211209e00a0000112a000a2000114a200a400010ca400a600010da600a800010fa800aa00011dac00ae00010fae00b0000111b000b2000112b400b600020c20b600b800010db800ba00010fbe00c000010fc000c20002111dc200c4000112c400c600010cc600c800010dc800ca00010fcc00ce000120d200d400010fd400d600020d11d600d800020c12d800da00011ddc00de00020c12de00e000020d11e000e200010fe400e6000120e800ea00010cea00ec00010dec00ee00010ff000f20002081df200f400010af400f600010cfa00fc00010cfc00fe00020d20fe000001010f00010201010802010401010a04010601010c08010a01011d0c010e0101110e011001011210011201011414011601020d2016011801010f18011a01011108001c000e050046006603320000040a002d00000064001400013200020100024200700072000129800082000129900092000129a000a2000129b000b2000129c000c2000129d000d2000129e000e2000129f000f200012900010201012910011201012909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006200600061000106700071000106800081000106900091000106980099000114a000a100021406b000b1000106c000c1000106d000d1000106d800d9000114da00db000114e000e1000106e800e9000114f000f100021406000101010106100111010106`), music.PlaybackMode.LoopingInBackground)
forever(function () {
	
})
forever(function () {
    if (statusbar2.value == 0) {
        mySprite4.setImage(img`
            3 . . . . . . . . . . . . . . . 
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
