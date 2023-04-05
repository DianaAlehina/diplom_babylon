import * as BABYLON from "@babylonjs/core/Legacy/legacy";

export function createScene(canvas, engine) {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color4.FromColor3(BABYLON.Color3.Black);
    scene.autoClear = true;

    const alpha = Math.PI / 4;
    const beta = Math.PI / 3;
    const radius = 70;
    const target = new BABYLON.Vector3(0, 0, 0);
    let camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    return scene;
};