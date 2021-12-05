const { loadPuzzleInputAsRows } = require("../../helpers")

const puzzleInput = loadPuzzleInputAsRows(__dirname)
    .map(Number)
    .filter((value, i, a) => i - 1 >= 0 && a[i - 1] < value)
    .length
console.log(puzzleInput)