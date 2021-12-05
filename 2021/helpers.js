const { readFileSync } = require("fs")
const { EOL } = require('os');

function loadPuzzleInput(dirName) {
    return readFileSync(`${dirName}/puzzleInput.txt`, 'UTF-8')
}

function loadPuzzleInputAsRows(dirName) {
    return loadPuzzleInput(dirName)
        .split(EOL)
}

module.exports = {
    loadPuzzleInputAsRows,
    loadPuzzleInput
}