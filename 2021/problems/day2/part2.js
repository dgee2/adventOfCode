const { loadPuzzleInputAsRows } = require("../../helpers")

const puzzleInput = loadPuzzleInputAsRows(__dirname)
    .map(parseMovement)
    .reduce(applyMovement, { position: 0, depth: 0, angle: 0 })

console.log(puzzleInput)
console.log(puzzleInput.position * puzzleInput.depth)

function parseMovement(v) {
    const input = v.split(" ")
    return {
        direction: input[0],
        distance: Number(input[1])
    }
}

function applyMovement(position, { direction, distance }) {
    switch (direction) {
        case 'up':
            return Object.assign(position, { angle: position.angle - distance })
        case 'down':
            return Object.assign(position, { angle: position.angle + distance })
        case 'forward':
            return Object.assign(position, {
                position: position.position + distance,
                depth: position.depth + position.angle * distance
            })
    }
    return position
}