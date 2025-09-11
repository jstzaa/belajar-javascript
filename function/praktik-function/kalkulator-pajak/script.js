alert('Selamat datang di aplikasi penghitung pajak')
let nilaiAwal = parseInt(prompt('Masukkan nilai awal '))
let persentasePajak = parseInt(prompt('Masukkan presentase pajak '))

function hitungPajak(nilaiAwal, persentasePajak) {
    let hasil
    if (isNaN(nilaiAwal) || isNaN(persentasePajak)){
        hasil = 'input salah'
    } else {
        hasil = nilaiAwal + (nilaiAwal * (persentasePajak / 100))
    }
    return hasil
}

alert('Nilai akhir pajak kamu: Rp' + hitungPajak(nilaiAwal, persentasePajak).toLocaleString('id-ID'))