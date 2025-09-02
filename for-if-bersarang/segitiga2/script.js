let str = '' //inisialisasi string kosong

for(i = 5;i > 0;i--){ //loop untuk jumlah baris
    for(j = 0;j < i;j++){ //loop untuk cetak bintang sebanyak nilai i
        str += '*'
    }
    str += '\n' //baris baru setelah satu baris selesai
}

console.log(str) //output