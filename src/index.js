const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    if (expr.length % 10 != 0) return 0;
    else {
        let res = '';
        for (let i = 0; i < expr.toString().length; i += 10) {
            let char = '';
            if (expr[i] == '*') res += ' ';
            else {
                for (let j = 0; j < 9; j++) {
                    if (expr[i + j] == 0) continue;
                    if (expr[i + j] + expr[i + j + 1] == 10) {
                        char += '.';
                        j++;
                    }
                    else {
                        char += '-';
                        j++;
                    }
                }
                res += MORSE_TABLE[char];
            }
        }
        return res;
    }
}

module.exports = {
    decode
}