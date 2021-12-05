const { loadPuzzleInputAsRows } = require("../../helpers")

const puzzleInput = loadPuzzleInputAsRows(__dirname)
    .map(Number)
    .map(createSlidingWindow)
    .filter((v) => v !== null)
    .filter((value, i, a) => i - 1 >= 0 && a[i - 1] < value)
    .length
console.log(puzzleInput)

function createSlidingWindow(v, i, a) {
    if (i - 2 < 0) return null
    return a[i - 2] + a[i - 1] + v
}
