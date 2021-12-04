function countOnes(arr, index) {
    return arr
        .map((s) => s[index])
        .filter((c) => c == 1)
        .length
}
function mostCommonBit(arr, index) {
    return countOnes(arr, index) >= (arr.length / 2) ? 1 : 0
}
function leastCommonBit(arr, index) {
    return countOnes(arr, index) < (arr.length / 2) ? 1 : 0
}

module.exports = { mostCommonBit, leastCommonBit }