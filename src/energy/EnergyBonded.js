export class EnergyBonded{
    constructor(xyz, energy, xForse, yForse, zForse){
        this.xyz = xyz
        this.energy = energy
        this.xForse = xForse
        this.yForse = yForse
        this.zForse = zForse
    }
}

export function createEnergyBonded(moleculesWater){
    let energyBonded = [], xValue, yValue, zValue, distance, energyBondsJ, energyBondsK, energyAngels
    for (let i = 0; i < moleculesWater.length; i = i + 3) {
        let j = i + 1, k = i + 2
        xValue = Math.pow(moleculesWater[j].xNextValue - moleculesWater[i].xNextValue, 2)
        yValue = Math.pow(moleculesWater[j].yNextValue - moleculesWater[i].yNextValue, 2)
        zValue = Math.pow(moleculesWater[j].zNextValue - moleculesWater[i].zNextValue, 2)
        distance = Math.sqrt(xValue + yValue + zValue)
        energyBondsJ = Math.pow(distance - 0.9572, 2)

        xValue = Math.pow(moleculesWater[k].xNextValue - moleculesWater[i].xNextValue, 2)
        yValue = Math.pow(moleculesWater[k].yNextValue - moleculesWater[i].yNextValue, 2)
        zValue = Math.pow(moleculesWater[k].zNextValue - moleculesWater[i].zNextValue, 2)
        distance = Math.sqrt(xValue + yValue + zValue)
        energyBondsK =  Math.pow(distance - 0.9572, 2)

        let vectorHO = [
            moleculesWater[i].xNextValue - moleculesWater[j].xNextValue,
            moleculesWater[i].yNextValue - moleculesWater[j].yNextValue,
            moleculesWater[i].zNextValue - moleculesWater[j].zNextValue
        ]
        let vectorOH = [
            moleculesWater[k].xNextValue - moleculesWater[i].xNextValue,
            moleculesWater[k].yNextValue - moleculesWater[i].yNextValue,
            moleculesWater[k].zNextValue - moleculesWater[i].zNextValue
        ]
        let cosUp = vectorHO[0] * vectorOH[0] + vectorHO[1] * vectorOH[1] + vectorHO[2] * vectorOH[2]
        let cosDown = Math.sqrt(Math.pow(vectorHO[0], 2) + Math.pow(vectorHO[1], 2) + Math.pow(vectorHO[2], 2), 2) *
            Math.sqrt(Math.pow(vectorOH[0], 2) + Math.pow(vectorOH[1], 2) + Math.pow(vectorOH[2], 2), 2)
        let cosHOH = cosUp / cosDown
        let angelHOH = Math.cos(cosHOH) * 180 / Math.PI
        console.log(angelHOH)
        energyAngels = 0.0 // + Math.round(Math.pow(angelHOH - 104.52, 2), -5)

        moleculesWater[j].xNextValue += energyBondsJ + energyAngels
        moleculesWater[j].yNextValue += energyBondsJ + energyAngels
        moleculesWater[j].zNextValue += energyBondsJ + energyAngels
        moleculesWater[k].xNextValue += energyBondsK + energyAngels
        moleculesWater[k].yNextValue += energyBondsK + energyAngels
        moleculesWater[k].zNextValue += energyBondsK + energyAngels
        // energyBonded = new EnergyBonded(j, energyBonds)

    }

    return moleculesWater
}
