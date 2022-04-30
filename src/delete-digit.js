const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let string = String(n);
    let arr = string.split('');

    let arr2 = [];

    let a = arr.length;

    while (a >= 0) {
        let b = arr.splice(a - 1, 1);
        string = arr.join('');
        arr2.push(string);
        arr.splice(a - 1, 0, b);

        arr = arr.flat(1);
        a--;
    }

    arr2 = arr2.sort();
    b = arr2[arr2.length - 1];
    return +b;
}

module.exports = {
    deleteDigit,
};
