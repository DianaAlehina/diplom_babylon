export function accelerationMolecules(molecules, energyNonBonded) {
    for (let i = 0; i < energyNonBonded.length; i++) {
        energyNonBonded[i].xForse /= molecules[i].mass
        energyNonBonded[i].yForse /= molecules[i].mass
        energyNonBonded[i].zForse /= molecules[i].mass
    }
    return energyNonBonded
}