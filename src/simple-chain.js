const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

let arr = [];
const chainMaker = {
    getLength(arr) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here}
        return arr.lenght;
    },
    addLink(value) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here}
        console.log(value);
        value = String(value);
        return arr.push(value);
    },
    removeLink(position) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here}
        return arr.splice(position, 1);
    },
    reverseChain() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here}
    },
    finishChain() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here}
        return arr.join('');
    },
};

module.exports = {
    chainMaker,
};
