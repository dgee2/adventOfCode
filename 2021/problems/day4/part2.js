const { loadPuzzleInput } = require("../../helpers");
const { EOL } = require("os")

const { boardOptions, bingoNumbers } = loadBoardAndNumbers();

const worstBoardScores = getWorstBoardScores()

console.log(worstBoardScores)

console.log(calculateFinalScore(worstBoardScores))

function calculateFinalScore({ board, currentNumbers, finalNumber }) {
    return board
        .flat()
        .filter((x) => !currentNumbers.includes(x))
        .reduce((a, b) => a + b) * finalNumber
}

function getWorstBoardScores() {
    return boardOptions.map(getBoardScores).sort((x, y) => x.currentNumbers.length - y.currentNumbers.length).pop()
}

function getBoardScores(board) {
    for (let numberCount = board[0].length; numberCount < bingoNumbers.length; numberCount++) {
        const currentNumbers = bingoNumbers.slice(0, numberCount)
        if (board.some((v) => v.every((x) => currentNumbers.includes(x))))
            return { board: board.slice(0, 5), currentNumbers, finalNumber: bingoNumbers[numberCount - 1] }
    }
}

/**
 * 
 * @param {Number[][]} matrix 
 * @returns {Number[][]}
 */
function rotateMatrix(matrix) {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}

/**
 * 
 * @returns { {bingoNumbers: Number[], boardOptions:Number[][][] } }
 */
function loadBoardAndNumbers() {
    const puzzleInput = loadPuzzleInput(__dirname).replaceAll("  ", " ").split(EOL + EOL);

    const numbers = parseBingoNumbers(puzzleInput.shift());

    const boards = puzzleInput.map(parseBoard)
    return { bingoNumbers: numbers, boardOptions: boards }
}
/**
 * 
 * @param {string} input 
 * @returns {Number[][]}
 */
function parseBoard(input) {
    const rows = input
        .split(EOL)
        .map((r) => r.trim().split(" ").map(Number));
    return rotateMatrix(rows).concat(rows)
}
/**
 * 
 * @param {string} input 
 * @returns {Number[]}
 */
function parseBingoNumbers(input) {
    return input.split(",").map(Number)
}
