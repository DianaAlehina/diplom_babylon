import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import {nextValue} from "../molecularsMovement/nextValue";
import {createEnergyNonBonded, createEnergyNonBondedWithoutLJP} from "../energy/EnergyNonBonded";
import {createLennardJonesPotential} from "../energy/LennardJonesPotential";
import {createForseColumbsLaw, createForseColumbsLaw2} from "../molecularsMovement/forseColumbsLaw";
import {accelerationMolecules} from "../molecularsMovement/acceleration";
import {searchSpeedMolecules} from "../molecularsMovement/speed";
import {hex2rgb} from "../color/hex2rgb";
import {createEnergyBonded} from "../energy/EnergyBonded";
import {createScene} from "./createScene";
import {staticMolecules} from "../molecularsMovement/staticMolecules";

const deltaT = 0.05
const canvas = document.getElementById("renderCanvas")
const engine = new BABYLON.Engine(canvas, true)
const scene = createScene(canvas, engine)
let currentLoop = null, sphere = []

export function createMolecules(molecules, scene) {
    let material, colorPart;

    for (let i = 0; i < molecules.length; i++) {
        colorPart = hex2rgb(molecules[i].color)
        let rColor = colorPart.r / 256
        let gColor = colorPart.g / 256
        let bColor = colorPart.b / 256

        material = new BABYLON.StandardMaterial("myMaterial", scene);
        material.diffuseColor = new BABYLON.Color3(rColor, gColor, bColor);

        // TODO: Сферы непонятно куда относятся
        // TODO: Наверно, их надо возвращать куда-то

        sphere[i] = BABYLON.Mesh.CreateSphere("sphere", 32, molecules[i].diameter, scene);

        // Позиция сферы
        sphere[i].position = new BABYLON.Vector3(molecules[i].xNextValue, molecules[i].yNextValue, molecules[i].zNextValue)

        // sphere[i].position.x = molecules[i].xNextValue
        // sphere[i].position.y = molecules[i].yNextValue
        // sphere[i].position.z = molecules[i].zNextValue
        sphere[i].material = material
    }
    return sphere;
}

export function drawMolecus(molecules, moleculesWater, canvasFunctionParticles) {
    // Очистка сцены, если запущен рендеринг
    if (currentLoop) {
        for (s of sphere) {
            scene.removeMesh(s)
        }
        engine.stopRenderLoop(currentLoop)
        sphere = []
    }
    // Выбор новой функции рендеринга
    // TODO: Если будет много разных законов симуляций, этот if будет быстро расти
    if (canvasFunctionParticles === "kulon") {
        currentLoop = () => {
            // console.log(1)

            let forse = createForseColumbsLaw(molecules)
            let energyNonBonded = createEnergyNonBondedWithoutLJP(forse)
            let acceleration = accelerationMolecules(molecules, energyNonBonded)
            let speedMolecules = searchSpeedMolecules(acceleration, deltaT)
            molecules = nextValue(molecules, speedMolecules, deltaT)
            for (let i = 0; i < molecules.length; i++) {
                sphere[i].position.x = molecules[i].xNextValue
                sphere[i].position.y = molecules[i].yNextValue
                sphere[i].position.z = molecules[i].zNextValue
            }
            scene.render(true, true);

        }
    } else if (canvasFunctionParticles === "water"){

        currentLoop = () => {
            // console.log(2)

            let lennardJonesPotential = createLennardJonesPotential(moleculesWater),
                forse = createForseColumbsLaw(moleculesWater)
            let energyNonBonded = createEnergyNonBonded(forse, lennardJonesPotential)
            let acceleration = accelerationMolecules(moleculesWater, energyNonBonded)
            let speedMolecules = searchSpeedMolecules(acceleration, deltaT)
            moleculesWater = nextValue(moleculesWater, speedMolecules, deltaT)
            moleculesWater = createEnergyBonded(moleculesWater)
            for (let i = 0; i < moleculesWater.length; i++) {
                sphere[i].position.x = moleculesWater[i].xNextValue
                sphere[i].position.y = moleculesWater[i].yNextValue
                sphere[i].position.z = moleculesWater[i].zNextValue
            }
            scene.render(true, true);
        }
    } else {
        currentLoop = () => {
            // console.log(3)

            molecules = staticMolecules(molecules)
            for (let i = 0; i < molecules.length; i++) {
                sphere[i].position.x = molecules[i].xNextValue
                sphere[i].position.y = molecules[i].yNextValue
                sphere[i].position.z = molecules[i].zNextValue
            }
            scene.render(true, true);
        }
    }
    engine.runRenderLoop(currentLoop);

    if (canvasFunctionParticles === "water") {
        sphere = createMolecules(moleculesWater, scene)
    }
    else {
        sphere = createMolecules(molecules, scene)
    }

    window.addEventListener("resize", function () {
        engine.resize();
    });
}
