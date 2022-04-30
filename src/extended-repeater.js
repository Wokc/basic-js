const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let a;
    if (options.repeatTimes) {
        a = options.repeatTimes;
    } else {
        a = 1;
    }

    let arr = [];
    let b;
    let separ = '+';
    let addRepTime;

    if (typeof str == 'number') {
        if (Number.isInteger(str)) {
            str = String(str);
        } else {
            str = str.toFixed(3);
        }
    }

    if (typeof str == 'object') {
        str = String(str);
    }

    if (typeof str != 'string') {
        str = String(str);
    }

    while (a > 0) {
        arr.push(str);
        console.log(arr);

        if (
            options.addition ||
            typeof options.addition == 'boolean' ||
            typeof options.addition == 'object'
        ) {
            if (typeof options.addition != 'string') {
                b = String(options.addition);
            } else {
                b = options.addition;
            }

            if (options.additionRepeatTimes && options.additionRepeatTimes > 1) {
                let d = options.additionRepeatTimes;
                while (d > 0) {
                    arr.push(b);
                    let optAdit = '|';
                    if (options.additionSeparator) {
                        arr.push(options.additionSeparator);
                    } else {
                        arr.push(optAdit);
                    }

                    d--;
                }
                arr.splice(arr.length - 1, 1);
            } else {
                arr.push(b);
            }
        }

        if (options.separator) {
            separ = options.separator;
        }

        arr.push(separ);

        a--;
    }
    if (a == 1) {
        return arr.join('');
    } else {
        arr.splice(arr.length - 1, 1);
        return arr.join('');
    }
}

module.exports = {
    repeater,
};
