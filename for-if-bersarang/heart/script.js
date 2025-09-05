let str = ''

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5 - i; j++) {
        str += '  '
    }
    for (k = 0; k <= 2 * i - 1; k++) {
        str += '* '
    }
    for (l = 0; l < 5 - i; l++) {
        str += '    '
    }
    for (m = 0; m <= 2 * i - 1; m++) {
        str += '* '
    }
    str += '\n'
}

for (n = 0; n <= 2; n++){
    for (o = 0; o <= 19; o++){
        str += '* '
    }
    str += '\n'
}

for (p = 0; p < 10; p++){
    for (q = 0; q < p; q++){
        str += '  '
    } for (r = 0; r < 20 - 2 * p; r++){
        str += '* '
    }
    str += '\n'
}

console.log(str)