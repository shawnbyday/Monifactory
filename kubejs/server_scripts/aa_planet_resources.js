/**
 * Maceration recipes for Ad Astra planetary rock dusts
 * Makes planetary rock dusts drop from ores
 * Centrifuge recipes for converting planetary rock dusts into valuable resources
 * Maceration recipes for converting other blocks found on planets to resources
 */

ServerEvents.recipes(event => {
    
    // Dilithium
    event.recipes.gtceu.autoclave("dilithium_helium")
        .itemInputs("4x gtceu:dilithium_dust")
        .inputFluids("gtceu:helium 1000")
        .itemOutputs("4x gtceu:dilithium_gem")
        .duration(400)
        .EUt(110)

    // Hydrofluoric Acid from Fluorite
    event.recipes.gtceu.chemical_reactor("hydrofluoric_acid_from_fluorite")
        .itemInputs("3x gtceu:fluorite_dust")
        .inputFluids("gtceu:sulfuric_acid 1000", "minecraft:water 2000")
        .itemOutputs("8x gtceu:gypsum_dust")
        .outputFluids("gtceu:hydrofluoric_acid 2000")
        .duration(10 * 20)
        .EUt(GTValues.VHA[GTValues.LV])

    // Ad Astra boosted ores

    // Arsenopyrite metallurgy like Cobaltite
    event.recipes.gtceu.electric_blast_furnace("arsenopyrite_metallurgy")
        .itemInputs("gtceu:arsenopyrite_dust")
        .inputFluids("gtceu:oxygen 2500")
        .itemOutputs("2x gtceu:small_wrought_iron_dust", "gtceu:arsenic_trioxide_dust")
        .outputFluids("gtceu:sulfur_dioxide 1000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1200)

    // Argentite analogs to Sphalerite and Galena for Indium
    event.recipes.gtceu.mixer("indium_concentrate_sphalerite_argentite")
        .itemInputs("gtceu:purified_sphalerite_ore", "gtceu:purified_argentite_ore")
        .inputFluids("gtceu:sulfuric_acid 4000")
        .outputFluids("gtceu:indium_concentrate 1000")
        .duration(60)
        .EUt(150)

    event.recipes.gtceu.mixer("indium_concentrate_galena_argentite")
        .itemInputs("gtceu:purified_galena_ore", "gtceu:purified_argentite_ore")
        .inputFluids("gtceu:sulfuric_acid 4000")
        .outputFluids("gtceu:indium_concentrate 1000")
        .duration(60)
        .EUt(150)

    // Rutile from Titanite
    event.recipes.gtceu.electric_blast_furnace("rutile_from_titanite")
        .itemInputs("8x gtceu:titanite_dust", "1x gtceu:carbon_dust")
        .itemOutputs("1x gtceu:silicon_ingot", "3x gtceu:rutile_dust", "5x gtceu:calcite_dust")
        .duration(35 * 20)
        .EUt(GTValues.VA[GTValues.HV])
        .blastFurnaceTemp(1700)

    // Replace recipes that use liquid Iron II chloride with the new dust form
    event.recipes.gtceu.chemical_reactor("iron_2_chloride")
        .inputFluids("gtceu:iron_iii_chloride 2000", "gtceu:chlorobenzene 1000")
        .itemOutputs("2x gtceu:iron_ii_chloride_dust")
        .outputFluids("gtceu:hydrochloric_acid 1000", "gtceu:dichlorobenzene 1000")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.large_chemical_reactor("calcium_ferrocyanide")
        .inputFluids("gtceu:hydrogen_cyanide 6000", "minecraft:water 7000")
        .itemInputs("gtceu:iron_ii_chloride_dust", "10x gtceu:calcium_hydroxide_dust")
        .itemOutputs("15x gtceu:calcium_ferrocyanide_dust")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])

    // Add Tungstic Acid processing to Wolframite and Stolzite
    event.recipes.gtceu.chemical_bath("tungstic_acid_from_wolframite")
        .itemInputs("6x gtceu:wolframite_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("7x gtceu:tungstic_acid_dust")
        .chancedOutput("3x gtceu:iron_ii_chloride_dust", 5000, 0)
        .chancedOutput("3x gtceu:manganese_ii_chloride_dust", 5000, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(210)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.chemical_bath("tungstic_acid_from_stolzite")
        .itemInputs("6x gtceu:stolzite_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("7x gtceu:tungstic_acid_dust", "3x gtceu:lead_chloride_dust")
        .duration(210)
        .EUt(GTValues.VHA[GTValues.EV])

    // Metallurgy to refine Azurite and Carnotite
    event.recipes.gtceu.electric_blast_furnace("azurite_metallurgy")
        .itemInputs("15x gtceu:azurite_dust", "3x gtceu:calcium_dust")
        .itemOutputs("3x minecraft:copper_ingot", "10x gtceu:calcite_dust", "2x gtceu:quicklime_dust")
        .outputFluids("gtceu:steam 28800")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.MV])
        .blastFurnaceTemp(1100)

    if (doHarderProcessing) {
        event.recipes.gtceu.large_chemical_reactor("carnotite_metallurgy_hard")
            .itemInputs("27x gtceu:carnotite_dust")
            .inputFluids("gtceu:sulfur_dioxide 3000", "gtceu:sulfur_trioxide 3000")
            .itemOutputs("2x gtceu:potassium_dust", "6x gtceu:uraninite_dust", "7x gtceu:vanadium_pentoxide_dust")
            .outputFluids("gtceu:diluted_sulfuric_acid 9000")
            .duration(100)
            .EUt(GTValues.VHA[GTValues.MV])
            .blastFurnaceTemp(1100)
    } else {
        event.recipes.gtceu.large_chemical_reactor("carnotite_metallurgy_normal")
            .itemInputs("27x gtceu:carnotite_dust")
            .inputFluids("gtceu:sulfur_dioxide 3000", "gtceu:sulfur_trioxide 3000")
            .itemOutputs("2x gtceu:potassium_dust", "6x gtceu:uraninite_dust", "2x gtceu:vanadium_dust")
            .outputFluids("gtceu:diluted_sulfuric_acid 9000", "gtceu:oxygen 5000")
            .duration(100)
            .EUt(GTValues.VHA[GTValues.MV])
            .blastFurnaceTemp(1100)
    }
})

ServerEvents.tags("item", event => {
    event.add("forge:lenses/brown", "gtceu:stolzite_lens")
})
