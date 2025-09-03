let str = ''
for (i = 0; i < 5; i++) { // loop untuk jumlah baris
    for (j = 0; j < i; j++) { // cetak spasi
        str += ' '
    }
    for (k = 0; k < 5 - i; k++) { // cetak bintang
        str += '*'
    }
    str += '\n' // pindah ke baris baru
}
console.log(str)