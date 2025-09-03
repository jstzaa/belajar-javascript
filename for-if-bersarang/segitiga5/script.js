let str = ''

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5 - i; j++) {
        str += ' '
    }
    for (k = 1; k <= 2 * i - 1; k++) {
        str += '*'
    }
    str += '\n'
}

console.log(str)