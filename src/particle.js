// import * as BABYLON from "@babylonjs/core/Legacy/legacy";
export class Particle {
    // группа - количество, диаметр, масса, цвет, количество
    constructor(id, xRadius, yRadius, zRadius, xEnd, yEnd, zEnd, xStep, yStep, zStep,
                diameter, mass, charge, color, material){
        this.id = id
        this.xRadius = xRadius
        this.yRadius = yRadius
        this.zRadius = zRadius
        this.xEnd = xEnd
        this.yEnd = yEnd
        this.zEnd = zEnd
        this.xStep = xStep
        this.yStep = yStep
        this.zStep = zStep
        this.diameter = diameter
        this.mass = mass
        this.charge = charge
        this.color = color
        this.material = material
    }

    particleCreate(mass, diameter, color) {
        const Max = 20;
        this.xRadius = Math.random() * Max;
        this.yRadius = Math.random() * Max;
        this.zRadius = Math.random() * Max;
        this.charge = Math.random() * Max / 2;
        // let rand = Math.floor(Math.random() * 3);
        this.diameter = diameter;
        this.mass = mass;
        this.color = color;
    }
}

export function classParticleFilling(lengthPar = 10, mass = 2, diameter= 2, color = [1, 0, 0]){

    var particles = []
    for (let i = 0; i < lengthPar; i++){
        particles[i] = new Particle()
        particles[i].particleCreate(mass, diameter, color)
    }
    console.log(lengthPar)
    console.log(particles.length)
    return particles;
}