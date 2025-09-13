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
