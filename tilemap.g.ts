// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`460008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060600010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020201010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202010104040101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202040402020101040401010000000000000008000000000008000000000007080000000000070800000000000708000000000000000708000000000000070008000700000202020404020203030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030305050505050505050505`, img`
......................................................................
......................................................................
......................................................................
......................................................................
......................................................................
......................................................................
......................................................................
2222222222222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.rock2,sprites.swamp.swampTile0,myTiles.tile2,sprites.castle.tileDarkGrass2,sprites.builtin.field1,myTiles.tile3,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
