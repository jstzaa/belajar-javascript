alert('Selamat datang di aplikasi kalkulator sederhana')
let angka1 = parseInt(prompt('Masukkan angka pertama: '))
let angka2 = parseInt(prompt('Masukkan angka kedua: '))
let operator = prompt('Masukkan operator:\n(+, -, *, /)')

function hitungAngka(a, b, op) {
    let hasil
    if (isNaN(a) || isNaN(b)) {
        hasil = 'input salah'
    } else {
        switch (op) {
            case '+':
                hasil = a + b
            break
            case '-':
                hasil = a - b
            break
            case '*':
                hasil = a * b
            break
            case '/':
                hasil = b !== 0 ? a / b : 'tidak dapat dibagi 0'
            break
            default:
                hasil = 'operator salah'
            break
        }
    }

    return hasil
}

alert('Hasilnya: ' + hitungAngka(angka1, angka2, operator))