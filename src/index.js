module.exports = function reverse(n) {
    n = n < 0 ? n * -1 : n
    return Number(String(n).split('').reverse().join(''))
}
