scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 f 1 1 f 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 . 1 1 . 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(11)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLightMoss)
info.startCountdown(15)
