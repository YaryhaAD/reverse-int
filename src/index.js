module.exports = function reverse (n) {
    let i = n.toString().split('').reverse().join('');
    result = Math.sign(n) * parseInt(i);
    return Math.abs(result);
}
