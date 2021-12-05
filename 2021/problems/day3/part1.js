const { loadPuzzleInputAsRows } = require("../../helpers")
const { mostCommonBit } = require("./helpers")

const puzzleInput = loadPuzzleInputAsRows(__dirname)
// .map(parseMovement)
// .reduce(applyMovement, { position: 0, depth: 0, angle: 0 })

const puzzleLength = puzzleInput.length
const puzzleWidth = puzzleInput[0].length

let gammaRate = ''
let epsilonRate = ''

for (let index = 0; index < puzzleWidth; index++) {
    if (mostCommonBit(puzzleInput, index)) {
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
