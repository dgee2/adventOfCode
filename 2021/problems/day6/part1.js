const { loadPuzzleInput } = require('../../helpers');
let puzzleInput = loadPuzzleInput(__dirname).split(',').map(Number);

console.log(puzzleInput)
/**
 * 
 * @param {Number[]} puzzleInput 
 */
function incrementDay(input) {
    return input.flatMap(x => {
        if (x === 0) {
            return [6, 8]
        } else {
            return x - 1
        }
    })
}
for (let i = 0; i < 80; i++) {
    puzzleInput = incrementDay(puzzleInput)
}
console.log(puzzleInput.length)