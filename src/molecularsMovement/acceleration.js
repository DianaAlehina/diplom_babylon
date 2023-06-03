export class Acceleration{
    constructor(i, xAccel, yAccel, zAccel){
        this.i = i
        this.xAccel = xAccel
        this.yAccel = yAccel
        this.zAccel = zAccel
    }
}

export function accelerationMolecules(molecules, energyNonBonded) {
    let acceleration = []
    for (let i = 0; i < energyNonBonded.length; i++) {
        acceleration[i] = new Acceleration(i,
            energyNonBonded[i].xForse/molecules[i].mass,
            energyNonBonded[i].yForse/molecules[i].mass,
            energyNonBonded[i].zForse/molecules[i].mass)
    }
    return acceleration
}