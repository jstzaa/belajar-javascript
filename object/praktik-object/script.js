// membuat object angkot
function Angkot(sopir, trayek, kas, penumpang){
    // properti angkot
    this.sopir = sopir
    this.trayek = trayek
    this.kas = kas
    this.penumpang = penumpang

    // method penumpang naik
    this.penumpangNaik = function(namaPenumpang){
        // jika angkot kosong, tambahkan penumpang
        if (this.penumpang.length == 0){
            this.penumpang.push(namaPenumpang)
            return this.penumpang
        } else {
            // telusuri kursi
            for (let a = 0;a < this.penumpang.length; a++){
                // jika ada kursi kosong, tambah penumpang di kursi itu
                if (this.penumpang[a] == undefined){
                    this.penumpang[a] = namaPenumpang
                    return this.penumpang
                // jika tidak ada kursi kosong, tambah penumpang di kursi baru
                } else if (a == this.penumpang.length - 1){
                    this.penumpang.push(namaPenumpang)
                    return this.penumpang
                }
            }
        }
    }

    // method penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar){
        // jika angkot kosong, tampilkan pesan error
        if (this.penumpang.length === 0){
            alert('Angkot masih kosong')
            return false
        } else {
            // telusuri kursi
            for (let i = 0; i < this.penumpang.length; i++){
                // jika nama penumpang ada, penumpang turun dan bayar
                if (this.penumpang[i] == namaPenumpang){
                    this.penumpang[i] = undefined
                    this.kas += bayar
                    return this.penumpang
                // jika nama penumpang tidak ada, tampilkan pesan error
                } else if (i == this.penumpang.length - 1){
                    alert('Tidak ada penumpang dengan nama ' + namaPenumpang)
                    return this.penumpang
                }
            }
        }
    }
}

let angkot1 = new Angkot('Budi', 'Cikurubuk - Cibeureum', 0, [])