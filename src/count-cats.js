const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let arr = matrix.flat();

    let arr2 = [];
    let element = '^^';
    let idx = arr.indexOf(element);

    while (idx != -1) {
        arr2.push(idx);
        idx = arr.indexOf(element, idx + 1);
    }

    return arr2.length;
}

module.exports = {
    countCats,
};
