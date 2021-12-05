const { readFileSync } = require("fs")
const { EOL } = require('os');

const loadPuzzleInput = (dirName) => readFileSync(`${dirName}/puzzleInput.txt`, 'UTF-8')

const loadPuzzleInputAsRows = (dirName) =>
    loadPuzzleInput(dirName)
        .split(EOL)

module.exports = {
    loadPuzzleInputAsRows,
    loadPuzzleInput
}