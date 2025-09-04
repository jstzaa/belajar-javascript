let str = ''

for (a = 0; a < 5; a++) {
    for (b = 0; b < 5 + 5 - a; b++) {
        str += '  '
    }
    for (c = 1; c <= 2 * a - 1; c++) {
        str += '* '
    }
    
    str += '\n'
}

for (d = 0; d < 5; d++) {
    for (e = 0; e < d; e++) {
        str += '  '
    }
    for (f = 1; f < 20 - 2 * d; f++) {
        str += '* '
    }
    str += '\n'
}

for(j = 5; j > 0; j--) {
    for (k = 0; k < 2 + 5 - k; k++) {
        str += '  '
    }
    for (l = 0; l < j; l++) { 
        str += '* '
    }
    for (m = 0; m < 5 - j; m++) {
        str += '    '
    }
    for (n = 0; n < j; n++) { 
        str += ' *'
    }
    
    str += '\n' 
}

console.log(str)