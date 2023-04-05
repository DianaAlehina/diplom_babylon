// import {hex2rgb} from "./color/hex2rgb";
// import * as BABYLON from "@babylonjs/core/Legacy/legacy";
//
// // import * as BABYLON from "@babylonjs/core/Legacy/legacy";
// export class Particle {
//     // группа - количество, диаметр, масса, цвет, количество
//     constructor(id, xRadius, yRadius, zRadius, xEnd, yEnd, zEnd, xStep, yStep, zStep,
//                 diameter, mass, charge, color, material){
//         this.id = id
//         this.xRadius = xRadius
//         this.yRadius = yRadius
//         this.zRadius = zRadius
//         this.xEnd = xEnd
//         this.yEnd = yEnd
//         this.zEnd = zEnd
//         this.xStep = xStep
//         this.yStep = yStep
//         this.zStep = zStep
//         this.diameter = diameter
//         this.mass = mass
//         this.charge = charge
//         this.color = color
//         this.material = material
//     }
//
//     particleCreate(mass, diameter, color) {
//         const Max = 30;
//         this.xRadius = Math.random() * Max;
//         this.yRadius = Math.random() * Max;
//         this.zRadius = Math.random() * Max;
//         this.charge = Math.random() * Max / 2;
//         // let rand = Math.floor(Math.random() * 3);
//         this.diameter = diameter;
//         this.mass = mass;
//         this.color = color;
//     }
// }
//
// export function classParticleFilling(lengthPar = 10, mass = 2, diameter= 2, color = [1, 0, 0]){
//
//     let particles = []
//     for (let i = 0; i < lengthPar; i++){
//         particles[i] = new Particle()
//         particles[i].particleCreate(mass, diameter, color)
//     }
//
//     return particles;
// }
//
// function createParticle(particle, scene) {
//     let geometry, material, colorPart;
//
//     for (let i = 0; i < particle.length; i++) {
//         colorPart = hex2rgb(particle[i].color)
//         let rColor = colorPart.r / 256
//         let gColor = colorPart.g / 256
//         let bColor = colorPart.b / 256
//
//         material = new BABYLON.StandardMaterial("myMaterial", scene);
//         material.diffuseColor = new BABYLON.Color3(rColor, gColor, bColor);
//
//         // TODO: Сферы непонятно куда относятся
//         // TODO: Наверно, их надо возвращать куда-то
//
//         sphere[i] = BABYLON.Mesh.CreateSphere("sphere", 32, particle[i].diameter, scene);
//
//         // Позиция сферы
//         sphere[i].position.x = particle[i].xRadius
//         sphere[i].position.y = particle[i].yRadius
//         sphere[i].position.z = particle[i].zRadius
//         sphere[i].material = material
//     }
//     return particle;
// }
//
// function strengthF(particle) {
//     let distance = 0, constF = 0, strength = new Array(), xVector, yVector, zVector
//     for (let i = 0; i < particle.length; i++) {
//         strength[i] = new Array();
//         for (let j = 0; j < particle.length; j++) {
//             strength[i][j] = [0, 0, 0];
//         }
//     }
//     for (let i = 0; i < particle.length; i++) {
//         for (let j = i + 1; j < particle.length; j++) {
//             distance = Math.sqrt(Math.pow(particle[j].xRadius - particle[i].xRadius, 2) +
//                 Math.pow(particle[j].yRadius - particle[i].yRadius, 2) +
//                 Math.pow(particle[j].zRadius - particle[i].zRadius, 2))
//             constF = (k * particle[i].charge * particle[j].charge) / (Math.pow(distance, 3))
//             xVector = constF * (particle[j].xRadius - particle[i].xRadius)
//             yVector = constF * (particle[j].yRadius - particle[i].yRadius)
//             zVector = constF * (particle[j].zRadius - particle[i].zRadius)
//
//             strength[i][j] = [xVector, yVector, zVector]
//             strength[j][i] = [-xVector, -yVector, -zVector]
//         }
//     }
//     return strength;
// }
//
// function sumStrengthF(strength, length) {
//     let vectorSum = new Array(length)
//     for (let i = 0; i < length; i++) {
//         vectorSum[i] = new Array(length)
//         vectorSum[i][0] = 0
//         vectorSum[i][1] = 0
//         vectorSum[i][2] = 0
//         for (let j = 0; j < length; j++) {
//             vectorSum[i][0] += strength[i][j][0]
//             vectorSum[i][1] += strength[i][j][1]
//             vectorSum[i][2] += strength[i][j][2]
//         }
//     }
//     return vectorSum
// }
//
// function searchAcceleration(particle, vectorSum) {
//     for (let i = 0; i < vectorSum.length; i++) {
//         for (let j = 0; j < vectorSum.length; j++) {
//             vectorSum[i][j] /= particle[j].mass
//         }
//     }
//     return vectorSum
// }
//
// function searchSpeed(acceleration, length) {
//     let speed = new Array(length)
//     for (let i = 0; i < acceleration.length; i++) {
//         speed[i] = new Array(3)
//         for (let j = 0; j < acceleration.length; j++) {
//             speed[i][j] = 0
//             speed[i][j] = speed[i][j] + acceleration[i][j] * deltaT
//         }
//     }
//     return speed;
// }
//
// function endPoint(particle, speed) {
//     for (let i = 0; i < speed.length; i++) {
//         particle[i].xEnd = particle[i].xRadius + speed[i][0] * deltaT
//         particle[i].yEnd = particle[i].yRadius + speed[i][1] * deltaT
//         particle[i].zEnd = particle[i].zRadius + speed[i][2] * deltaT
//
//         particle[i].xRadius = particle[i].xEnd
//         particle[i].yRadius = particle[i].yEnd
//         particle[i].zRadius = particle[i].zEnd
//     }
//     return particle;
// }


// let strength = strengthF(particle)
// let vectorSum = sumStrengthF(strength, particle.length)
// let acceleration = searchAcceleration(particle, vectorSum)
// let speed = searchSpeed(acceleration, particle.length)
// particle = endPoint(particle, speed)
// for (let i = 0; i < particle.length; i++) {
//     sphere[i].position.x = particle[i].xEnd
//     sphere[i].position.y = particle[i].yEnd
//     sphere[i].position.z = particle[i].zEnd
// }
// scene.render(true, true);