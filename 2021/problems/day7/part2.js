const { loadPuzzleInput } = require('../../helpers')
const data = loadPuzzleInput(__dirname).split(',').map(Number)

let min = Math.min(...data)
let max = Math.max(...data)

function calculateDistance(position) {
    return data.map((x) => Math.abs(x - position)).map((n) => n * (n + 1) / 2).reduce((a, b) => a + b)
}

while (true) {
    const range = max - min

    const minPosition = Math.round(min + (range / 3))
    const maxPosition = Math.round(max - (range / 3))

    let minScore = calculateDistance(minPosition)
    let maxScore = calculateDistance(maxPosition)

    if (minScore < maxScore) {
        max = maxPosition
    } else {
        min = minPosition
    }

    if (max - min <= 1) {
        // Write out the final answer
        minScore = calculateDistance(min)
        maxScore = calculateDistance(max)
        console.log(Math.min(minScore, maxScore))
        return

    }
}