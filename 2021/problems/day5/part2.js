const { loadPuzzleInputAsRows } = require("../../helpers")

function parseRow(row) {
    const [start, end] = row.split(" -> ").map(parseCoordinate)
    return { start, end }
}

function parseCoordinate(coord) {
    const [x, y] = coord.split(",").map(Number)
    return { x, y }
}

function expandLineCoordinates({ start, end }) {
    let ret = []
    if (start.x === end.x) {
        for (let y = Math.min(start.y, end.y); y <= Math.max(start.y, end.y); y++) {
            ret.push(`${start.x},${y}`)
        }
    }
    else if (start.y === end.y) {
        for (let x = Math.min(start.x, end.x); x <= Math.max(start.x, end.x); x++) {
            ret.push(`${x},${start.y}`)
        }
    }
    else {
        for (let x = 0; x <= Math.max(start.x, end.x) - Math.min(start.x, end.x); x++) {
            if (start.x < end.x && start.y < end.y) {
                ret.push(`${start.x + x},${start.y + x}`)

            } else if (start.x < end.x && start.y > end.y) {
                ret.push(`${start.x + x},${start.y - x}`)
            }
            else if (start.x > end.x && start.y < end.y) {
                ret.push(`${start.x - x},${start.y + x}`)
            }
            else if (start.x > end.x && start.y > end.y) {
                ret.push(`${start.x - x},${start.y - x}`)
            }
        }
    }
    return ret
}

const puzzleInput = loadPuzzleInputAsRows(__dirname)
    .map(parseRow)
    .flatMap(expandLineCoordinates)
    .reduce((previous, current) => {
        if (previous[current])
            previous[current]++
        else
            previous[current] = 1
        return previous
    }, {})

console.log(
    Object.entries(puzzleInput)
        .filter(([, value]) => value > 1)
        .length
)