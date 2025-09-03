let str = ''; // inisialisasi string kosong

for (let i = 0; i < 5; i++) { // loop untuk jumlah baris
    for (let j = 0; j < 5-i-1; j++) { // cetak spasi
        str += ' ';
    }
    for (let k = 0; k <= i; k++) { // cetak bintang
        str += '*';
    }
    str += '\n'; // pindah ke baris baru
}

console.log(str);
