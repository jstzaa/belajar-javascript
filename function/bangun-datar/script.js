alert('Selamat datang di aplikasi penghitung luas bangun datar')
let bangunDatar = prompt('Masukkan jenis bangun datar. Contoh: \nsegitiga\npersegi\npersegi panjang\nlingkaran\njajar genjang\ntrapesium\nbelah ketupat\nlayang layang')

function hitungBangunDatar(){
    let a
    let b
    let c
    let hasil

    if(bangunDatar == 'segitiga'){
        a = parseInt(prompt('Masukkan nilai alas'))
        b = parseInt(prompt('Masukkan nilai tinggi'))
        hasil = a * b / 2
    } else if (bangunDatar == 'persegi'){
        a = parseInt(prompt('Masukkan nilai sisi'))
        hasil = a * a
    } else if (bangunDatar == 'lingkaran'){
        let pi = 3.14
        a = parseInt(prompt('Masukkan jari-jari'))
        hasil = pi * Math.pow(a, 2)
    } else if (bangunDatar == 'persegi panjang'){
        a = parseInt(prompt('Masukkan nilai panjang'))
        b = parseInt(prompt('Masukkan nilai lebar'))
        hasil = a * b
    } else if (bangunDatar == 'jajar genjang'){
        a = parseInt(prompt('Masukkan nilai alas'))
        b = parseInt(prompt('Masukkan nilai tinggi'))
        hasil = a * b
    } else if (bangunDatar == 'trapesium'){
        a = parseInt(prompt('Masukkan nilai sisi bawah(a)'))
        b = parseInt(prompt('Masukkan nilai sisi atas(b)'))
        c = parseInt(prompt('Masukkan tinggi trapesium'))
        hasil = 1/2 * (a + b) * c
    } else if (bangunDatar == 'belah ketupat'){
        a = parseInt(prompt('Masukkan nilai diagonal 1'))
        b = parseInt(prompt('Masukkan nilai diagonal 2'))
        hasil = 1/2 * a * b
    } else if (bangunDatar == 'layang layang'){
        a = parseInt(prompt('Masukkan nilai diagonal 1'))
        b = parseInt(prompt('Masukkan nilai diagonal 2'))
        hasil = 1/2 * a * b
    } else {
        hasil = 'Bangun datar tidak valid'
    }

    return hasil
}

alert('Luas ' + bangunDatar + ' adalah ' + hitungBangunDatar() + ' cm2')