const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let arr = str.split('');
    console.log(arr);
    let resultArr = [];
    let a = 0;
    let element = arr[a];
    let b = 0;
    let counter = 0;
    while (b < arr.length) {
        if (element == arr[a + 1]) {
            counter++;
            a++;
        } else {
            counter++;
            resultArr.push(counter, element);
            counter = 0;
            a++;
            console.log(a);
            element = arr[a];
        }
        b++;
    }

    resultArr = resultArr.filter((elem) => elem != 1);

    return resultArr.join('');
}

module.exports = {
    encodeLine,
};
