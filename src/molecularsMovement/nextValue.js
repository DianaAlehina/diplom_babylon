export function nextValue(molecules, speedMolecules, deltaT = 0.03) {
    for (let i = 0; i < speedMolecules.length; i++) {
        molecules[i].xNextValue += speedMolecules[i].xSpeed * deltaT
        molecules[i].yNextValue += speedMolecules[i].ySpeed * deltaT
        molecules[i].zNextValue += speedMolecules[i].zSpeed * deltaT
    }
    return molecules;
}