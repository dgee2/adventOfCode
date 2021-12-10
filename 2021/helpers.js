const { readFileSync } = require("fs")
const { EOL } = require('os');

let inputType = 'puzzleInput.txt'

const loadPuzzleInput = (dirName) => readFileSync(`${dirName}/${inputType}`, 'UTF-8')

const loadPuzzleInputAsRows = (dirName) =>
    loadPuzzleInput(dirName)
        .split(EOL)

const setExampleInput = () => {
    inputType = 'examplePuzzleInput.txt'
}

module.exports = {
    loadPuzzleInputAsRows,
    loadPuzzleInput,
    setExampleInput
}