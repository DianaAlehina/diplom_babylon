export class SpeedMolecules{
    constructor(xyz, xSpeed, ySpeed, zSpeed){
        this.xyz = xyz
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed
        this.zSpeed = zSpeed
    }
}

export function searchSpeedMolecules(acceleration, deltaT = 0.03) {
    let speedMolecules = []
    for (let i = 0; i < acceleration.length; i++) {
        speedMolecules[i] = new SpeedMolecules(i,
            acceleration[i].xAccel * deltaT,
            acceleration[i].yAccel * deltaT,
            acceleration[i].zAccel * deltaT)
    }
    return speedMolecules
}