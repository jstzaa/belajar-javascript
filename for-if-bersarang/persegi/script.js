let str = '' // inisialisasi string kosong

for(i = 0; i < 5; i++){ // loop untuk membuat baris
    for(j = 0; j < 5; j++){ // loop untuk cetak bintang
        str += '* '
    }
    str += '\n' // garis baru
}

console.log(str) // output