alert('Selamat datang di aplikasi penghitung gaji')
let nama = prompt('Masukkan nama')

function hitungGaji(){
    let gajiPerHari, jumlahMasuk

    gajiPerHari = parseInt(prompt('Masukkan gaji perhari: '))
    jumlahMasuk = parseInt(prompt('Jumlah masuk dalam satu bulan: '))

    return gajiPerHari * jumlahMasuk
}

alert('Nama: ' + nama + '\nTotal gaji dalam sebulan: Rp' + hitungGaji().toLocaleString('id-ID'))