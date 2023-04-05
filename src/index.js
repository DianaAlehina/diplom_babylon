import {classParticleFilling, Particle} from "./particle";
import {drawParticles} from "./drawParticles";

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', updateButton);


function updateButton() {
    const canvas = document.getElementById("renderCanvas");
    const rangeNumberParticles = document.getElementById('numberParticles')
    const rangeMassParticles = document.getElementById("massParticles")
    const rangeDiameterParticles = document.getElementById("diameterParticles")
    const colorParticles = document.getElementById("color")
    const functionParticles = document.getElementById("listFunction")
    console.log(functionParticles.value)

    let particles = classParticleFilling(rangeNumberParticles.value, rangeMassParticles.value,
        rangeDiameterParticles.value, colorParticles.value);
    console.log(particles.length)
    drawParticles(canvas, particles, functionParticles.value);
}