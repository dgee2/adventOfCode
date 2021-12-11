const { loadPuzzleInput } = require('../../helpers');
let puzzleInput = loadPuzzleInput(__dirname).split(',').map(Number);

const daysToBreed = 256

let days = puzzleInput.reduce((p, c) => {
    p[c] = p[c] ? p[c] + 1 : 1;
    return p;
}, {})

for (let i = 0; i < daysToBreed; i++) {
    if (days[i]) {
        days[i + 7] = days[i] + (days[i + 7] || 0);
        days[i + 9] = days[i] + (days[i + 9] || 0);
    }
}

const dayKeys = Object.keys(days).map(Number)

console.log(dayKeys.filter((x) => x >= daysToBreed).map((x) => days[x]).reduce((p, c) => p + c))
