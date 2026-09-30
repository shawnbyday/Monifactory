/**
 * Remove Ore generation from Nuclearcraft: Neoteric and Ad Astra
 * Ad Astra is weird and generates it on multiple steps, so it requires the additional events
 * Thanks Ghosti for figuring this one out
 */
WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "nuclearcraft:boron_placed",
        "nuclearcraft:cobalt_placed",
        "nuclearcraft:lead_placed",
        "nuclearcraft:lithium_placed",
        "nuclearcraft:magnesium_placed",
        "nuclearcraft:platinum_placed",
        "nuclearcraft:silver_placed",
        "nuclearcraft:thorium_placed",
        "nuclearcraft:tin_placed",
        "nuclearcraft:uranium_placed",
        "nuclearcraft:zinc_placed"
    ])
})
