const { loadPuzzleInput } = require("../../helpers");
const { EOL } = require("os")

const { boardOptions, bingoNumbers } = loadBoardAndNumbers();
console.log(boardOptions)
console.log(bingoNumbers)

function rotateMatrix(matrix) {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}
function loadBoardAndNumbers() {
    const puzzleInput = loadPuzzleInput(__dirname).replaceAll("  ", " ").split(EOL + EOL);

    const numbers = parseBingoNumbers(puzzleInput.shift());

    const boards = puzzleInput.map(parseBoard)
    return { bingoNumbers: numbers, boardOptions: boards }
}
function parseBoard(input) {
    const rows = input
        .split(EOL)
        .map((r) => r.trim().split(" ").map(Number));
    return rotateMatrix(rows).concat(rows)
}
function parseBingoNumbers(input) {
    return input.split(",").map(Number)
}
