alert('Selamat datang di aplikasi penghitung pajak')
let nilaiAwal = parseInt(prompt('Masukkan nilai awal '))
let presentasePajak = parseInt(prompt('Masukkan presentase pajak '))

function hitungPajak(nilaiAwal, presentasePajak) {
    return nilaiAwal + (nilaiAwal * (presentasePajak / 100))
}

alert('Nilai akhir pajak kamu: ' + hitungPajak(nilaiAwal, presentasePajak))