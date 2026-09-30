/**
 * Definitions for new ore veins using the GregTech: Modern API & tweaks for existing veins.
 *
 * Custom veiny veins don't use the edgeRoundoffBegin and maxEdgeRoundoff parameters
 * because those control how rounded or square vertical slices of the the vein look, which is a minute detail
 * for which reasonable default values are provided.
 *
 * edgeRoundoffBegin controls how close (in blocks) an ore block has to be to either limit of the height range
 * to be "rounded off",
 * while maxEdgeRoundoff controls how strong the rounding-off effect can get.
 *
 * Additionally, veined veins always have a density of 1.0 because the minRichness and maxRichness parameters
 * control density within the vein's context.
 */

const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

GTCEuServerEvents.oreVeins(event => {
    // Overworld veins
    event.add("overworld/uraninite", vein => {
        vein.weight(30)
        vein.density(1.0)
        vein.clusterSize(30)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(10, 40)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Uraninite).size(1))
            .middle(b => b.mat(GTMaterials.Uraninite).size(3))
            .bottom(b => b.mat(GTMaterials.Uraninite).size(2))
            .spread(b => b.mat(GTMaterials.Pitchblende))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Uraninite)
            .placement("above")
        )
    })

    event.add("overworld/azurite", vein => {
        vein.weight(50)
        vein.density(1.0)
        vein.clusterSize(50)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(20, 100)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get("azurite"), 6, 50, 100)
            .withBlock(GTMaterials.Malachite, 4, 40, 70)
            .withBlock(GTMaterials.Calcite, 2, 25, 50)
            .withBlock(GTMaterials.Barite, 1, 25, 90)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("azurite"))
            .placement("above")
        )
    })

    // End Veins
    event.add("end/magnesite", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer(WorldGenLayers.ENDSTONE)
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(20, 60)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Magnesite, 3, 20, 60)
            .withBlock(GTMaterials.Cobaltite, 2, 35, 55)
            .withBlock(GTMaterials.Cobalt, 1, 20, 40)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnesite)
            .placement("above")
        )
    })

    // Increase vein density
    event.modifyAll((id, vein) => {
        vein.density(Math.sqrt(vein.density()))
        vein.discardChanceOnAirExposure(0.3)
    })
})

// Remove Naquadah veins
GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:naquadah_vein")
})


GTCEuServerEvents.oreVeins(event => {
    // Make End Magnetite veins more rich in Chromite
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 2))
                .build()
            )
        )
    })
})
