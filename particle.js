/*class particle {
    constructor(id, xBegin, yBegin, zBegin, xEnd, yEnd, zEnd, xStep, yStep, zStep, diameter, mass, color, material){
        this.id = id
        this.xBegin = xBegin
        this.yBegin = yBegin
        this.zBegin = zBegin
        this.xEnd = xEnd
        this.yEnd = yEnd
        this.zEnd = zEnd
        this.xStep = xStep
        this.yStep = yStep
        this.zStep = zStep
        this.diameter = diameter
        this.mass = mass
        this.color = color
        this.material = material
    }

}

function randomParticles() {
    let geometry, Max = 10, Max3 = Max*Max*3,
        xBegin, yBegin, zBegin, xEnd, yEnd, zEnd, xStep, yStep, zStep, diameter, mass, color, material
    let particles = []
    for (let i = 0; i < 50; i++) {
        xBegin = Math.random() * Max
        yBegin = Math.random() * Max
        zBegin = Math.random() * Max
        xEnd = 0.5 * xBegin * xBegin
        yEnd = yBegin * yBegin
        zEnd = zBegin * zBegin
        xStep = (xEnd - xBegin)/Max3
        yStep = (yEnd - yBegin)/Max3
        zStep = (zEnd - zBegin)/Max3

        let rand = Math.floor(Math.random() * 3)
        if (rand === 0){
            diameter = 1
            material = new BABYLON.StandardMaterial("myMaterial", scene)
            material.diffuseColor = new BABYLON.Color3(1, 0, 0)
            color = [1, 0, 0]
        } else if (rand === Begin){
            diameter = 2
            material = new BABYLON.StandardMaterial("myMaterial", scene)
            material.diffuseColor = new BABYLON.Color3(0, 1, 0)
            color = [0, 1, 0]
        } else{
            diameter = 3
            material = new BABYLON.StandardMaterial("myMaterial", scene)
            material.diffuseColor = new BABYLON.Color3(0, 0, 1)
            color = [0, 0, 1]
        }

        particles[i] = new particle(i, xBegin, yBegin, zBegin, xEnd, yEnd, zEnd, xStep, yStep, zStep, diameter, mass, color, material)
    }
    return particles
}*/