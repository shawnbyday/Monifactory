// Clears the cobblestone box TelePastries builds around the Nether arrival point.
// Leaves the obsidian floor alone.
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', event => {
    if (String(event.to.location()) !== 'minecraft:the_nether') return

    let player = event.entity
    let level = player.level
    let cx = Math.floor(player.x)
    let cy = Math.floor(player.y)
    let cz = Math.floor(player.z)

    for (let dx = -2; dx <= 2; dx++) {
        for (let dy = 0; dy <= 4; dy++) {
            for (let dz = -2; dz <= 2; dz++) {
                let block = level.getBlock(cx + dx, cy + dy, cz + dz)
                if (block.id === 'minecraft:cobblestone') block.set('minecraft:air')
            }
        }
    }
})