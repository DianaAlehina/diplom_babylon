import {hex2rgb} from "../color/hex2rgb";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";

// export function createMolecules(molecules, scene) {
//     let material, colorPart;
//
//     for (let i = 0; i < molecules.length; i++) {
//         colorPart = hex2rgb(molecules[i].color)
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
//         sphere[i] = BABYLON.Mesh.CreateSphere("sphere", 32, molecules[i].diameter, scene);
//
//         // Позиция сферы
//         sphere[i].position.x = molecules[i].xNextValue
//         sphere[i].position.y = molecules[i].yNextValue
//         sphere[i].position.z = molecules[i].zNextValue
//         sphere[i].material = material
//     }
//     return sphere;
// }