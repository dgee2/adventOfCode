const { loadPuzzleInput } = require("../../helpers")

const puzzleInput = loadPuzzleInput(__dirname)
    .map(parseMovement)
    .map(translateMovement)
    .reduce(applyMovement, { position: 0, depth: 0 })


console.log(puzzleInput)
console.log(puzzleInput.position * puzzleInput.depth)

function parseMovement(v) {
    const input = v.split(" ")
    return {
        direction: input[0],
        distance: Number(input[1])
    }
}

function translateMovement(v) {
    if (v.direction === 'up')
        return {
            direction: 'down',
            distance: -v.distance
        }
    return v
}

function applyMovement(position, { direction, distance }) {
    switch (direction) {
        case 'up':
            return { position: position.position, depth: position.depth - distance }
        case 'down':
            return { position: position.position, depth: position.depth + distance }
        case 'forward':
            return { position: position.position + distance, depth: position.depth }
    }
    return position
}