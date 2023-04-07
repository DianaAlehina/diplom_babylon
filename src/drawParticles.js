import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import {classParticleFilling, Particle} from "./particle";

let sphere =[], Max = 20, Max3 = Max*Max*3, flag = true, counter = 0
const k = 8.99 //* Math.pow(10,9)  // 1/(4 * pi * eps)

const deltaT = 0.03

function hex2rgb(c) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function staticParticle(particle){
    return particle
}

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

function sumStrengthF(strength, length){
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

function searchAcceleration(particle, vectorSum){
    for (let i = 0; i < vectorSum.length; i++) {
        for (let j = 0; j < vectorSum.length; j++){
            vectorSum[i][j] /= particle[j].mass
        }
    }
    return vectorSum
}

function searchSpeed(acceleration, length){
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

function endPoint(particle, speed){
    for (let i = 0; i < speed.length; i++) {
        particle[i].xEnd = particle[i].xRadius + speed[i][0] * deltaT
        particle[i].yEnd = particle[i].yRadius + speed[i][1] * deltaT
        particle[i].zEnd = particle[i].zRadius + speed[i][2] * deltaT

        particle[i].xRadius = particle[i].xEnd
        particle[i].yRadius = particle[i].yEnd
        particle[i].zRadius = particle[i].zEnd
    }
    return particle;
}

function createParticle(particle, scene) {
    let geometry, material, colorPart;

    for (let i = 0; i < particle.length; i++) {
        colorPart = hex2rgb(particle[i].color)
        let rColor = colorPart.r/256
        let gColor = colorPart.g/256
        let bColor = colorPart.b/256

        material = new BABYLON.StandardMaterial("myMaterial", scene);
        material.diffuseColor = new BABYLON.Color3(rColor, gColor, bColor);

        sphere[i] = BABYLON.Mesh.CreateSphere("sphere", 32, particle[i].diameter, scene);

        // Позиция сферы
        sphere[i].position.x = particle[i].xRadius
        sphere[i].position.y = particle[i].yRadius
        sphere[i].position.z = particle[i].zRadius
        sphere[i].material = material
    }
    return particle;
}
export let flagScene = true;

export function drawParticles(canvas, particle, canvasFunctionParticles){

    let engine = new BABYLON.Engine(canvas, true);

    const createScene = function() {
        let scene = new BABYLON.Scene(engine);
        scene.clearColor = BABYLON.Color4.FromColor3(BABYLON.Color3.Black);
        // scene.autoClear = true;

        const alpha = Math.PI / 4;
        const beta = Math.PI / 3;
        const radius = 70;
        const target = new BABYLON.Vector3(0, 0, 0);
        let camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
        particle = createParticle(particle, scene)

        return scene;
    };

    // Если сделать такой простой if, то программа будет ругатся, что сцены нет
    // if (true){
    //     let scene = createScene();
    // }
    let scene = createScene();

    // Комментарий про ошибку, ошибка исчезла и моя способность двигаться на сцене тоже
    // Строка 154 и 172 закомментировать, а 151 и 168 раскомментировать, тогда ошибки не будет
    if ( canvasFunctionParticles === "kulon") {
        // scene.render(true, true);
        engine.runRenderLoop(function () {
            console.log(1)
            let strength = strengthF(particle)
            let vectorSum = sumStrengthF(strength, particle.length)
            let acceleration = searchAcceleration(particle, vectorSum)
            let speed = searchSpeed(acceleration, particle.length)
            particle = endPoint(particle, speed)
            for (let i = 0; i < particle.length; i++) {
                sphere[i].position.x = particle[i].xEnd
                sphere[i].position.y = particle[i].yEnd
                sphere[i].position.z = particle[i].zEnd
            }
            scene.render(true, true);
        });
    }
    else {
        // scene.render(true, true);
        engine.runRenderLoop(function () {
            console.log(2)
            particle = staticParticle(particle)
            scene.render(true, true);
        });
    }


    window.addEventListener("resize", function () {
        engine.resize();
    });
}
