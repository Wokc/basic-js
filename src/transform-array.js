const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr1) {
    if (!Array.isArray(arr1)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let arr = arr1.slice();
    let a = 0;

    if (arr.length == 0) {
        return arr;
    }
    while (a < arr.length) {
        let element = arr[a];
        if (element == '--discard-next') {
            if (a + 1 >= arr.length) {
                arr.splice(a, 1);
            } else {
                arr.splice(a, 2);
                if (arr[a] == '--double-prev' || arr[a] == '--discard-prev') {
                    arr.splice(a, 1);
                }
            }
        }

        if (element == '--discard-prev') {
            if (a - 1 < 0) {
                arr.splice(a, 1);
            } else {
                arr.splice(a - 1, 2);
            }
        }

        if (element == '--double-next') {
            if (a + 1 >= arr.length) {
                arr.splice(a, 1);
            } else {
                arr[a] = arr[a + 1];
            }
        }

        if (element == '--double-prev') {
            if (a - 1 < 0) {
                arr.splice(a, 1);
            } else {
                arr[a] = arr[a - 1];
            }
        }

        a++;
    }

    return arr;
}

module.exports = {
    transform,
};
