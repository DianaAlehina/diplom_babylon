
export class LennardJonesPotential{
    constructor(k1, k2, potential){
        this.k1 = k1
        this.k2 = k2
        this.potential = potential
    }
}

export function createLennardJonesPotential(moleculesWater) {
    const A = 12 * 580 * Math.pow(10, 3), B = 6 * 525

    // let k1, k2, xNextValue, yNextValue, zNextValue, distance, potential, lennardJonesPotential = []
    // for (let i = 0; i < moleculesWater.length - 1; i++){
    //     let j = i + 1
    //     xNextValue = Math.pow(moleculesWater[j].xNextValue - moleculesWater[i].xNextValue, 2)
    //     yNextValue = Math.pow(moleculesWater[j].yNextValue - moleculesWater[i].yNextValue, 2)
    //     zNextValue = Math.pow(moleculesWater[j].zNextValue - moleculesWater[i].zNextValue, 2)
    //     distance = Math.sqrt(xNextValue + yNextValue + zNextValue)
    //     potential = A/Math.pow(distance, 12) - B/Math.pow(distance, 6)
    //     lennardJonesPotential[i] = new LennardJonesPotential(i, j, potential)
    // }

    let countO = [], j = 0
    for (let i = 0; i < moleculesWater.length; i++){
        if (moleculesWater[i].atom === 'O'){
            countO[j] = i
            j++
        }
    }

    let k0 = 0, k1, k2, xNextValue, yNextValue, zNextValue, distance, potential, lennardJonesPotential = []
    for (let i = 0; i < countO.length; i++){
        for (let j = i + 1; j < countO.length; j++){
            k1 = countO[i]
            k2 = countO[j]
            xNextValue = Math.pow(moleculesWater[k2].xNextValue - moleculesWater[k1].xNextValue, 2)
            yNextValue = Math.pow(moleculesWater[k2].yNextValue - moleculesWater[k1].yNextValue, 2)
            zNextValue = Math.pow(moleculesWater[k2].zNextValue - moleculesWater[k1].zNextValue, 2)
            distance = Math.sqrt(xNextValue + yNextValue + zNextValue)
            potential = A/Math.pow(distance, 13) - B/Math.pow(distance, 7)
            lennardJonesPotential[k0] = new LennardJonesPotential(k1, k2, potential)
            k0++
        }
    }

    // console.log(lennardJonesPotential[0])
    return lennardJonesPotential;
}