alert('Selamat datang di aplikasi penghitung luas bangun datar')
let bangunDatar = prompt('Masukkan jenis bangun datar. Contoh: \nsegitiga\npersegi\npersegi panjang\nlingkaran\njajar genjang\ntrapesium\nbelah ketupat\nlayang layang')

function hitungBangunDatar(){
    let a, b, c, hasil
    
    if(bangunDatar == 'segitiga'){
        a = parseFloat(prompt('Masukkan nilai alas'))
        b = parseFloat(prompt('Masukkan nilai tinggi'))
        hasil = a * b / 2
    } else if (bangunDatar == 'persegi'){
        a = parseFloat(prompt('Masukkan nilai sisi'))
        hasil = a * a
    } else if (bangunDatar == 'lingkaran'){
        let pi = 3.14
        a = parseFloat(prompt('Masukkan jari-jari'))
        hasil = pi * Math.pow(a, 2)
    } else if (bangunDatar == 'persegi panjang'){
        a = parseFloat(prompt('Masukkan nilai panjang'))
        b = parseFloat(prompt('Masukkan nilai lebar'))
        hasil = a * b
    } else if (bangunDatar == 'jajar genjang'){
        a = parseFloat(prompt('Masukkan nilai alas'))
        b = parseFloat(prompt('Masukkan nilai tinggi'))
        hasil = a * b
    } else if (bangunDatar == 'trapesium'){
        a = parseFloat(prompt('Masukkan nilai sisi bawah(a)'))
        b = parseFloat(prompt('Masukkan nilai sisi atas(b)'))
        c = parseFloat(prompt('Masukkan tinggi trapesium'))
        hasil = 1/2 * (a + b) * c
    } else if (bangunDatar == 'belah ketupat'){
        a = parseFloat(prompt('Masukkan nilai diagonal 1'))
        b = parseFloat(prompt('Masukkan nilai diagonal 2'))
        hasil = 1/2 * a * b
    } else if (bangunDatar == 'layang layang'){
        a = parseFloat(prompt('Masukkan nilai diagonal 1'))
        b = parseFloat(prompt('Masukkan nilai diagonal 2'))
        hasil = 1/2 * a * b
    } else {
        hasil = null
    }
    return hasil
}

let validasiBangunDatar = hitungBangunDatar()

if (validasiBangunDatar !== null) {
    alert('Luas ' + bangunDatar + ' adalah ' + validasiBangunDatar + ' cm2')
} else {
    alert('Bangun datar tidak valid')
}
