const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let arr1 = [];
    let element = -1;
    let idx = arr.indexOf(element);
    let arr2 = [];

    while (idx != -1) {
        arr1.push(idx);
        idx = arr.indexOf(element, idx + 1);
    }
    console.log(arr1);

    let a = arr1.length - 1;

    while (a >= 0) {
        arr.splice(arr1[a], 1);
        a--;
    }

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    arr.sort(compareNumeric);

    a = 0;

    while (a != arr1.length) {
        console.log(a);
        console.log(arr1[a]);
        console.log(arr);
        arr.splice(arr1[a], 0, -1);
        a++;
    }

    return arr;
}

module.exports = {
    sortByHeight,
};
