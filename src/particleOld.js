// import * as BABYLON from "@babylonjs/core/Legacy/legacy";

let lengthPar = 50;

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

    particleCreate() {
        let Max = 20
        this.xRadius = Math.random() * Max;
        this.yRadius = Math.random() * Max;
        this.zRadius = Math.random() * Max;
        this.charge = Math.random() * Max / 2;
        let rand = Math.floor(Math.random() * 3);
        if (rand === 0) {
            this.diameter = 1;
            this.mass = 1;
            this.color = [1, 0, 0]
            // this.material = new BABYLON.StandardMaterial("myMaterial", scene);
            // this.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        } else if (rand === 1) {
            this.diameter = 1.5;
            this.mass = 1.5;
            this.color = [0, 1, 0]
            // this.material = new BABYLON.StandardMaterial("myMaterial", scene);
            // this.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
        } else {
            this.diameter = 2;
            this.mass = 2;
            this.color = [0, 0, 1]
            // this.material = new BABYLON.StandardMaterial("myMaterial", scene);
            // this.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
        }
    }
}

export let particles = []
for (let i = 0; i < lengthPar; i++){
    particles[i] = new Particle()
    particles[i].particleCreate()
}

console.log(particles.length)
