
export class EnergyNonBonded{
    constructor(xyz, xForse, yForse, zForse){
        this.xyz = xyz
        this.xForse = xForse
        this.yForse = yForse
        this.zForse = zForse
    }
}

export function createEnergyNonBonded(forseColumbsLaw, lennardJonesPotential){

    let energyNonBonded = []
    for (let i = 0; i < forseColumbsLaw.length; i++) {
        energyNonBonded[i] = new EnergyNonBonded(i, 0, 0, 0)
        for (let k = 0; k < lennardJonesPotential.length; k++) {
            // console.log(lennardJonesPotential[k])
            if (lennardJonesPotential[k].k1 === forseColumbsLaw[i].i ||
                lennardJonesPotential[k].k2 === forseColumbsLaw[i].i) {
                energyNonBonded[i].xForse = energyNonBonded[i].xForse + forseColumbsLaw[i].xForse +
                    lennardJonesPotential[k].potential
                energyNonBonded[i].yForse = energyNonBonded[i].yForse + forseColumbsLaw[i].yForse +
                    lennardJonesPotential[k].potential
                energyNonBonded[i].zForse = energyNonBonded[i].zForse + forseColumbsLaw[i].zForse +
                    lennardJonesPotential[k].potential
                k = lennardJonesPotential.length;
                // lennardJonesPotential[k].delete()
            }
        }
        // console.log(energyNonBonded[i])
    }
    return energyNonBonded
}

export function createEnergyNonBondedWithoutLJP(forseColumbsLaw){
    let energyNonBonded = []
    for (let i = 0; i < forseColumbsLaw.length; i++) {
        energyNonBonded[i] = new EnergyNonBonded(i, 0, 0, 0)
        energyNonBonded[i].xForse += forseColumbsLaw[i].xForse
        energyNonBonded[i].yForse += forseColumbsLaw[i].yForse
        energyNonBonded[i].zForse += forseColumbsLaw[i].zForse
    }
    return energyNonBonded
}