namespace SpriteKind {
    export const pizza_customer = SpriteKind.create()
    export const eggs_and_toast_customer = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.eggs_and_toast_customer, sprites.dungeon.stairLarge, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.pizza_customer, sprites.dungeon.stairLarge, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
function reset_ingredients () {
    holding_egg = false
    holding_dough = false
    holding_cheese = false
    holding_toast = false
    holding_tomato = false
    ingredient_count = 0
    has_pizza = false
    has_eggs_and_toast = false
    mySprite.setImage(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 9 9 9 9 6 f 4 e . 
        . 4 d c 9 9 9 9 9 9 c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (holding_cheese == false) {
        holding_cheese = false
        ingredient_count += 1
    }
})
let customer: Sprite = null
let food_item = 0
let has_eggs_and_toast = false
let has_pizza = false
let ingredient_count = 0
let holding_tomato = false
let holding_toast = false
let holding_cheese = false
let holding_dough = false
let holding_egg = false
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a00080002020202020202020204020101010101010101040701080109010a010b040201010101010101010402010101010101010105040404040404040404040303030303030303030603030303030303030303`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.brick,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedNorth,sprites.dungeon.stairLarge,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setLife(3)
game.onUpdate(function () {
    if (false && (false && false)) {
    	
    }
})
game.onUpdateInterval(5000, function () {
    food_item = randint(0, 1)
    if (food_item == 0) {
        customer = sprites.create(img`
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 e f f . 
            . f f 4 4 f b f 4 4 e f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f 4 d d d d f . . . 
            . . . f e e 4 4 4 e f . . . 
            . . . 4 d d e 3 3 3 f . . . 
            . . . e d d e 3 3 3 f . . . 
            . . . f e e f 6 6 6 f . . . 
            . . . . f f f f f f . . . . 
            . . . . . f f f . . . . . . 
            `, SpriteKind.pizza_customer)
        customer.say("pizza", 2000)
        customer.setPosition(-5, 110)
        customer.vx = 10
    } else if (food_item == 1) {
        customer = sprites.create(img`
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . . f b b b b f b f e e e 3 f . 
            . . f b b b b e 1 f 4 4 e f . . 
            . f f b b b b f 4 4 4 4 f . . . 
            . f b b b b f f f e e e f . . . 
            . . f b b f 4 4 e d d d f . . . 
            . . . f f e 4 4 e d d d f . . . 
            . . . . f b e e b d b d b f . . 
            . . . . f f d 1 d 1 d 1 f f . . 
            . . . . . . f f b b f f . . . . 
            `, SpriteKind.eggs_and_toast_customer)
        customer.say("eggs and toast", 2000)
        customer.setPosition(-5, 110)
        customer.vx = 10
    }
})
forever(function () {
    mySprite.say(ingredient_count)
})
