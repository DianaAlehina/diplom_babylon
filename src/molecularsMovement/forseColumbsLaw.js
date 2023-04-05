export class ForseColumbsLaw{
    constructor(i, xForse, yForse, zForse){
        this.i = i
        this.xForse = xForse
        this.yForse = yForse
        this.zForse = zForse
    }
}

export function createForseColumbsLaw(molecules) {
    const k = 8.99 // * Math.pow(10,9)  // 1/(4 * pi * eps) // 331
    let forseColumbsLaw = [], constF, xNextValue, yNextValue, zNextValue, distance, xVector, yVector, zVector

    for (let i = 0; i < molecules.length; i++) {
        forseColumbsLaw[i] = new ForseColumbsLaw(i, 0.0, 0.0, 0.0)
        for (let j = 0; j < molecules.length; j++) {
            if (i !== j){
                xNextValue = Math.pow(molecules[i].xNextValue - molecules[j].xNextValue, 2)
                yNextValue = Math.pow(molecules[i].yNextValue - molecules[j].yNextValue, 2)
                zNextValue = Math.pow(molecules[i].zNextValue - molecules[j].zNextValue, 2)
                distance = Math.sqrt(xNextValue + yNextValue + zNextValue)
                constF = molecules[j].charge / Math.pow(distance, 3)
                forseColumbsLaw[i].xForse = forseColumbsLaw[i].xForse + (molecules[i].xNextValue - molecules[j].xNextValue) * constF
                forseColumbsLaw[i].yForse = forseColumbsLaw[i].yForse + (molecules[i].yNextValue - molecules[j].yNextValue) * constF
                forseColumbsLaw[i].zForse = forseColumbsLaw[i].zForse + (molecules[i].zNextValue - molecules[j].zNextValue) * constF
            }
        }
        forseColumbsLaw[i].xForse = forseColumbsLaw[i].xForse * k * molecules[i].charge
        forseColumbsLaw[i].yForse = forseColumbsLaw[i].yForse * k * molecules[i].charge
        forseColumbsLaw[i].zForse = forseColumbsLaw[i].zForse * k * molecules[i].charge
    }

    return forseColumbsLaw
}


export function createForseColumbsLaw2(molecules) {
    const k = 8.99 // * Math.pow(10,9)  // 1/(4 * pi * eps) // 331
    let constF, xNextValue, yNextValue, zNextValue, distance, xVector, yVector, zVector

    let strength = new Array()
    for (let i = 0; i < molecules.length; i++) {
        strength[i] = new Array();
        for (let j = 0; j < molecules.length; j++) {
            strength[i][j] = [0, 0, 0];
        }
    }

    for (let i = 0; i < molecules.length; i++) {
        for (let j = i + 1; j < molecules.length; j++) {
            xNextValue = Math.pow(molecules[i].xNextValue - molecules[j].xNextValue, 2)
            yNextValue = Math.pow(molecules[i].yNextValue - molecules[j].yNextValue, 2)
            zNextValue = Math.pow(molecules[i].zNextValue - molecules[j].zNextValue, 2)
            distance = Math.sqrt(xNextValue + yNextValue + zNextValue)
            constF = (k * molecules[i].charge * molecules[j].charge) / (Math.pow(distance, 3))
            xVector = constF * (molecules[i].xNextValue - molecules[j].xNextValue)
            yVector = constF * (molecules[i].yNextValue - molecules[j].yNextValue)
            zVector = constF * (molecules[i].zNextValue - molecules[j].zNextValue)

            strength[i][j] = [xVector, yVector, zVector]
            strength[j][i] = [-xVector, -yVector, -zVector]
        }
    }

    let forseColumbsLaw = []
    for (let i = 0; i < strength.length; i++) {
        forseColumbsLaw[i] = new ForseColumbsLaw(i, 0.0, 0.0, 0.0)
        for (let j = 0; j < strength.length; j++) {
            forseColumbsLaw[i].xForse += strength[i][j][0]
            forseColumbsLaw[i].yForse += strength[i][j][1]
            forseColumbsLaw[i].zForse += strength[i][j][2]
        }
    }

    return forseColumbsLaw
}