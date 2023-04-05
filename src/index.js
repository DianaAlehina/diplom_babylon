import {drawMolecus} from "./animation/drawMolecus";
import {createClassMolecules, createClassMoleculesWater} from "./molecules/Molecule";

const button = document.getElementById('button');
button.addEventListener('click', updateButton);
const buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', funcButtonPlus);
const buttonMinus = document.getElementById('buttonMinus');
buttonMinus.addEventListener('click', funcButtonMinus);

function funcButtonPlus() {
    const classButtonPlus = document.getElementById('idButtonPlus')
    classButtonPlus.style.display = classButtonPlus.style.display === "contents"  ? "none" : "contents";
}
function funcButtonMinus() {
    const classButtonMinus = document.getElementById('idButtonMinus')
    classButtonMinus.style.display = classButtonMinus.style.display === "contents"  ? "none" : "contents";
}

function updateButton() {

    const rangeNumberParticlesPlus = document.getElementById('numberParticlesPlus')
    const rangeNumberParticlesMinus = document.getElementById('numberParticlesMinus')
    const rangeMassParticlesPlus = document.getElementById("massParticlesPlus")
    const rangeMassParticlesMinus = document.getElementById("massParticlesMinus")
    const rangeDiameterParticlesPlus = document.getElementById("diameterParticlesPlus")
    const rangeDiameterParticlesMinus = document.getElementById("diameterParticlesMinus")
    const colorParticlesPlus = document.getElementById("colorPlus")
    const colorParticlesMinus = document.getElementById("colorMinus")

    const functionParticles = document.getElementById("listFunction")
    // console.log(functionParticles.value)


    let molecules = createClassMolecules(rangeNumberParticlesPlus.value, rangeNumberParticlesMinus.value,
        rangeMassParticlesPlus.value, rangeMassParticlesMinus.value,
        rangeDiameterParticlesPlus.value, rangeDiameterParticlesMinus.value,
        colorParticlesPlus.value, colorParticlesMinus.value);
    let moleculesWater = createClassMoleculesWater(0);

    drawMolecus(molecules, moleculesWater, functionParticles.value);
}