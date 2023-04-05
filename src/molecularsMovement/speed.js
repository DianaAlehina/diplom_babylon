export class SpeedMolecules{
    constructor(xyz, xSpeed, ySpeed, zSpeed){
        this.xyz = xyz
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed
        this.zSpeed = zSpeed
    }
}

export function searchSpeedMolecules(energyNonBonded, deltaT = 0.03) {
    let speedMolecules = []
    for (let i = 0; i < energyNonBonded.length; i++) {
        speedMolecules[i] = new SpeedMolecules(i, 0, 0, 0)
        speedMolecules[i].xSpeed += energyNonBonded[i].xForse * deltaT
        speedMolecules[i].ySpeed += energyNonBonded[i].yForse * deltaT
        speedMolecules[i].zSpeed += energyNonBonded[i].zForse * deltaT
    }
    return speedMolecules
}