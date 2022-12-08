// import './particle.js'
let sphere =[], Max = 20, Max3 = Max*Max*3, flag = true, counter = 0
const k = 8.99 //* Math.pow(10,9)  // 1/(4 * pi * eps)
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
let scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3.Black;
const alpha =  Math.PI/4;
const beta = Math.PI/3;
const radius = 70;
const target = new BABYLON.Vector3(0, 0, 0);

const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
camera.attachControl(canvas, true);


const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
let particle = [
    {"id":  0, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  1, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  2, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  3, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  4, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  5, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  6, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  7, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  8, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  9, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  10, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  11, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  12, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  13, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  14, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  15, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  16, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  17, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  18, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  19, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  20, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  21, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  22, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  23, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  24, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  25, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  26, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  27, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  28, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  29, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  30, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  31, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  32, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  33, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  34, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  35, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  36, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  37, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  38, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  39, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  30, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  31, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  32, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  33, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  34, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  35, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  36, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  37, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  38, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  39, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  40, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  41, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  42, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  43, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  44, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  45, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  46, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  47, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  48, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},
    {"id":  49, "xRadius": 0, "yRadius": 0, "zRadius": 0, "xEnd": 0, "yEnd": 0, "zEnd": 0, "xStep": 0, "yStep": 0, "zStep": 0, "diameter": 0, "mass": 0,  "charge": 0, "color": 0},

]
const length = 50, deltaT = 0.003

function strengthF(particle){
    let distance = 0, constF = 0, strength = new Array(), xVector, yVector, zVector
    for (let i = 0; i < particle.length; i++) {
        strength[i] = new Array();
        for (let j = 0; j < particle.length; j++){
            strength[i][j] = [0, 0, 0];
        }
    }
    for (let i = 0; i < particle.length; i++) {
        for (let j = i+1; j < particle.length; j++){
            distance = Math.sqrt(Math.pow(particle[j].xRadius - particle[i].xRadius, 2) +
                Math.pow(particle[j].yRadius - particle[i].yRadius, 2)  +
                Math.pow(particle[j].zRadius - particle[i].zRadius, 2))
            constF = (k * particle[i].charge * particle[j].charge)/(Math.pow(distance, 3))
            xVector = constF * (particle[j].xRadius - particle[i].xRadius)
            yVector = constF * (particle[j].yRadius - particle[i].yRadius)
            zVector = constF * (particle[j].zRadius - particle[i].zRadius)

            strength[i][j] = [xVector, yVector, zVector]
            strength[j][i] = [-xVector, -yVector, -zVector]
        }
    }
    return strength;
}

function sumStrengthF(strength){
    let vectorSum = new Array(length)
    for (let i = 0; i < length; i++) {
        vectorSum[i] = new Array(length)
        vectorSum[i][0] = 0
        vectorSum[i][1] = 0
        vectorSum[i][2] = 0
        for (let j = 0; j < length; j++){
            vectorSum[i][0] += strength[i][j][0]
            vectorSum[i][1] += strength[i][j][1]
            vectorSum[i][2] += strength[i][j][2]
        }
    }
    return vectorSum
}

function searchAcceleration(vectorSum){
    for (let i = 0; i < vectorSum.length; i++) {
        for (let j = 0; j < vectorSum.length; j++){
            vectorSum[i][j] /= particle[j].mass
        }
    }
    return vectorSum
}

function searchSpeed(acceleration){
    let speed = new Array(length)
    for (let i = 0; i < acceleration.length; i++) {
        speed[i] = new Array(3)
        for (let j = 0; j < acceleration.length; j++){
            speed[i][j] = 0
            speed[i][j] = speed[i][j] + acceleration[i][j] * deltaT
        }
    }
    return speed;
}

function endPoint(speed){
    for (let i = 0; i < speed.length; i++) {
        particle[i].xEnd = particle[i].xRadius + speed[i][0] * deltaT
        particle[i].yEnd = particle[i].yRadius + speed[i][1] * deltaT
        particle[i].zEnd = particle[i].zRadius + speed[i][2] * deltaT

        particle[i].xRadius = particle[i].xEnd
        particle[i].yRadius = particle[i].yEnd
        particle[i].zRadius = particle[i].zEnd
    }
    return ''
}

function randomParticle(particle) {
    let geometry, material;
    for (let i = 0; i < particle.length; i++) {
        particle[i].xRadius = Math.random() * Max;
        particle[i].yRadius = Math.random() * Max;
        particle[i].zRadius = Math.random() * Max;
        particle[i].charge = Math.random() * Max/2;
        let rand = Math.floor(Math.random() * 3);
        if (rand === 0){
            particle[i].diameter = 1;
            particle[i].mass = 1;
            material = new BABYLON.StandardMaterial("myMaterial", scene);
            material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        }
        else if (rand === 1){
            particle[i].diameter = 1.5;
            particle[i].mass = 1.5;
            material = new BABYLON.StandardMaterial("myMaterial", scene);
            material.diffuseColor = new BABYLON.Color3(0, 1, 0);
        }
        else{
            particle[i].diameter = 2;
            particle[i].mass = 2;
            material = new BABYLON.StandardMaterial("myMaterial", scene);
            material.diffuseColor = new BABYLON.Color3(0, 0, 1);
        }
        sphere[i] = BABYLON.Mesh.CreateSphere("sphere", 32, particle[i].diameter, scene);

        // Позиция сферы
        sphere[i].position.x = particle[i].xRadius
        sphere[i].position.y = particle[i].yRadius
        sphere[i].position.z = particle[i].zRadius
        sphere[i].material = material
    }
    return particle;
}

particle = randomParticle(particle)

engine.runRenderLoop(function(){

    strength = strengthF(particle)
    let vectorSum = sumStrengthF(strength)
    let acceleration = searchAcceleration(vectorSum)
    let speed = searchSpeed(acceleration)
    endPoint(speed)
    for (let i = 0; i < particle.length; i++) {
        sphere[i].position.x = particle[i].xEnd
        sphere[i].position.y = particle[i].yEnd
        sphere[i].position.z = particle[i].zEnd
    }

    scene.render();
});