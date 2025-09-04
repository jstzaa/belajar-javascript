let str = ''
let n = 30
for (i = 0; i < n; i++) {
    for (j = 0; j < n - i; j++) {
        str += ' '
    }
    for (k = 1; k <= 2 * i - 1; k++) {
        str += '*'
    }
    str += '\n'
}

console.log(str)