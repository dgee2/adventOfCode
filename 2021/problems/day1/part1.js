const { loadPuzzleInput } = require("../../helpers")

const puzzleInput = loadPuzzleInput(__dirname)
    .map(Number)
    .filter((value, i, a) => i - 1 >= 0 && a[i - 1] < value)
    .length
console.log(puzzleInput)