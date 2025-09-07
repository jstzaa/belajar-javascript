alert('Selamat datang di aplikasi penghitung pajak')

function hitungPajak(nilaiAwal, presentasePajak) {
    nilaiAwal = parseInt(prompt('Masukkan nilai awal '))
    presentasePajak = parseInt(prompt('Masukkan presentase pajak '))
    let nilaiPajak = nilaiAwal * (presentasePajak / 100)

    return nilaiAwal + nilaiPajak
}

alert('Nilai akhir pajak kamu: ' + hitungPajak())