import {classParticleFilling, Particle} from "./particle";
import {drawParticles} from "./drawParticles";

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', updateButton);

function updateButton() {
    const rangeNumberParticles = document.getElementById('numberParticles')
    const rangeMassParticles = document.getElementById("massParticles")
    const rangeDiameterParticles = document.getElementById("diameterParticles")
    const colorParticles = document.getElementById("color")

    let particles = classParticleFilling(rangeNumberParticles.value, rangeMassParticles.value,
        rangeDiameterParticles.value, colorParticles.value);
    drawParticles(particles);

    console.log(colorParticles.value);
}