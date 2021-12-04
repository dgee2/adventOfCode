const { readFileSync } = require("fs")

function loadPuzzleInput(dirName) {
    return readFileSync(`${dirName}/puzzleInput.txt`, 'UTF-8')
        .split("\r\n")
}

module.exports = {
    loadPuzzleInput
}