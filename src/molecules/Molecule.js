export class Molecule {
    // группа - количество, диаметр, масса, цвет, количество
    constructor(count, atom, xInitialValue, yInitialValue, zInitialValue,
                xNextValue, yNextValue, zNextValue, xStep, yStep, zStep,
                diameter, mass, charge, color){
        this.count = count
        this.atom = atom
        this.xInitialValue = xInitialValue
        this.yInitialValue = yInitialValue
        this.zInitialValue = zInitialValue
        this.xNextValue = xNextValue
        this.yNextValue = yNextValue
        this.zNextValue = zNextValue
        this.xStep = xStep
        this.yStep = yStep
        this.zStep = zStep
        this.diameter = diameter
        this.mass = mass
        this.charge = charge
        this.color = color
    }
}

export function createClassMolecules(lengthPlus = 10, lengthMinus = 10,
                                     massPlus = 2, massMinus = 2,
                                     diameterPlus = 2, diameterMinus = 2,
                                     colorPlus = [1, 0, 0], colorMinus= [1, 0, 0],){
    const Max = 30;
    let molecules = [], xInitialValue, yInitialValue, zInitialValue, charge
    let lengthMol = Number(lengthPlus) + Number(lengthMinus)
    for (let i = 0; i < Number(lengthPlus); i++) {
        xInitialValue = Math.random() * Max;
        yInitialValue = Math.random() * Max;
        zInitialValue = Math.random() * Max;
        charge = Math.random() * Max / 2;
        // let rand = Math.floor(Math.random() * 3);

        molecules[i] = new Molecule(i, '', xInitialValue, yInitialValue, zInitialValue,
            xInitialValue, yInitialValue, zInitialValue, 0, 0, 0,
            diameterPlus, massPlus, charge, colorPlus)
    }
    for (let j = Number(lengthPlus); j < lengthMol; j++) {
        xInitialValue = Math.random() * Max;
        yInitialValue = Math.random() * Max;
        zInitialValue = Math.random() * Max;
        charge = -1 * Math.random() * Max / 2;
        // let rand = Math.floor(Math.random() * 3);

        molecules[j] = new Molecule(j, '', xInitialValue, yInitialValue, zInitialValue,
            xInitialValue, yInitialValue, zInitialValue, 0, 0, 0,
            diameterMinus, massMinus, charge, colorMinus)
    }
    return molecules;
}

export function createClassMoleculesWater(lengthPar = 6){
    let moleculesWater = [], charge, mass, color, diameter = 0.8
    let initialValue =
        [
            ['O',   -1.9826694,   0.8834482,   1.8087522],
            ['H',   -2.3288973,   1.6077378,   2.3300610],
            ['H',   -1.4718823,   1.3069985,   1.1188727],
            ['O',   -0.5124238,  -1.3371964,   1.1037440],
            ['H',   -1.1027459,  -0.7016505,   1.5085072],
            ['H',    0.3518689,  -0.9291585,   1.1560423],
            ['O',    1.8155887,   0.1699667,   0.6965141],
            ['H',    1.9747686,  -0.1538473,  -0.1900739],
            ['H',    2.6801683,   0.1800438,   1.1071630],
            ['O',   -0.8629075,  -0.7370875,  -1.4967256],
            ['H',   -1.6770238,  -1.1121218,  -1.8325768],
            ['H',   -0.8050019,  -1.0566234,  -0.5962947],
            ['O',   -0.3552641,   1.7069145,  -0.1962745],
            ['H',   -0.6230563,   1.0286374,  -0.8163225],
            ['H',    0.4713443,   1.3880330,   0.1660307],
            ['O',    1.8677306,  -0.7082443,  -1.8727635],
            ['H',    2.0898068,  -0.3972344,  -2.7503665],
            ['H',    0.9159079,  -0.8085019,  -1.8873971]
        ]
        for (let i = 0; i < initialValue.length; i++){
        if (initialValue[i][0] === 'H'){
            charge = 0.4
            mass = 1.00784
            color = '#0000ff'
        } else {
            charge = -0.8
            mass = 15.99903
            color = '#ff0000'
        }
        moleculesWater[i] = new Molecule(i, initialValue[i][0],
            initialValue[i][1], initialValue[i][2], initialValue[i][3],
            initialValue[i][1], initialValue[i][2], initialValue[i][3],
            0, 0, 0,
            diameter, mass, charge, color)
    }

    return moleculesWater;
}