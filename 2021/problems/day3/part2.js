const { loadPuzzleInputAsRows } = require("../../helpers")
const { mostCommonBit, leastCommonBit } = require("./helpers")

let puzzleInput = loadPuzzleInputAsRows(__dirname)
const puzzleWidth = puzzleInput[0].length


function calculateRating(arr, calcFilterValue) {
    let index = 0
    while (arr.length > 1) {
        const value = calcFilterValue(arr, index)
        arr = arr.filter((x) => x[index] == value)
        index++
        index = index % puzzleWidth
    }
    return parseInt(arr[0], 2)
}

const oxygenRating = calculateRating(puzzleInput, mostCommonBit)
const co2Rating = calculateRating(puzzleInput, leastCommonBit)

console.log(oxygenRating)
console.log(co2Rating)
console.log(oxygenRating * co2Rating)