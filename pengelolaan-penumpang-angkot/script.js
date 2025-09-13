let penumpang = []

function tambahPenumpang(namaPenumpang){
    // jika angkot kosong
    if (penumpang.length == 0){
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang)
        return penumpang
    } else {
        // telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if (penumpang[i] == undefined){
                // tambah penumpang di kursi kosong
                penumpang[i] = namaPenumpang
                return penumpang
            // jika nama penumpang sama
            } else if(penumpang[i] == namaPenumpang){
                // munculkan pesan error
                console.log(namaPenumpang + ' sudah ada')
                return penumpang
            // jika kursi penuh dan ada penumpang baru
            } else if(i == penumpang.length - 1){
                // masukkan di kursi terakhir
                penumpang.push(namaPenumpang)
                return penumpang
            }
        }
    }
}

function hapusPenumpang(namaPenumpang){
    // jika angkot kosong
    if (penumpang.length == 0){
        // tampilkan pesan error
        console.log('Angkot kosong')
        return penumpang
    } else {
        // telusuri seluruh kursi dari awal
        for (let j = 0; j < penumpang.length; j++){
            // jika nama penumpang ada
            if (namaPenumpang == penumpang[j]){
                // hapus penumpang
                penumpang[j] = undefined
                return penumpang
            // jika nama penumpang tidak ada
            } else if (j == penumpang.length - 1){
                // tampilkan pesan error
                console.log('Tidak ada penumpang dengan nama ' + namaPenumpang)
                return penumpang
            }
        }
    }
}