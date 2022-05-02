const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    console.log(names);
    let a = 0;
    while (a < names.length) {
        let index = names.indexOf(names[a]);
        let indices = [];
        let idx = names.indexOf(names[a]);
        while (idx != -1) {
            indices.push(idx);
            idx = names.indexOf(names[a], idx + 1);
        }

        let b = 1;

        while (b < indices.length) {
            names[indices[b]] = names[index] + '(' + b + ')';
            b++;
        }

        a++;
    }

    return names;
}

module.exports = {
    renameFiles,
};
