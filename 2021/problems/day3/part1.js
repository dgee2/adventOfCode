const { loadPuzzleInput } = require("../../helpers")

const puzzleInput = loadPuzzleInput(__dirname)
// .map(parseMovement)
// .reduce(applyMovement, { position: 0, depth: 0, angle: 0 })

const puzzleLength = puzzleInput.length
const puzzleWidth = puzzleInput[0].length

let gammaRate = ''
let epsilonRate = ''

for (let index = 0; index < puzzleWidth; index++) {
    const onesCount = puzzleInput
        .map((s) => s[index])
        .filter((c) => c === '1')
        .length

    if (onesCount > (puzzleLength / 2)) {
        gammaRate += 1
        epsilonRate += 0
    }
    else {
        gammaRate += 0
        epsilonRate += 1
    }
}

console.log(gammaRate)
console.log(parseInt(gammaRate, 2))
console.log(epsilonRate)
console.log(parseInt(epsilonRate, 2))

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2))