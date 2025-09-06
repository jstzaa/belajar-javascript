let ulang = true

while (ulang === true){
    alert('Selamat datang di game tebak angka \nTebak angka 1 - 10')

    // player memilih angka
    let player = parseInt(prompt('Masukkan angka tebakan'))

    // komputer memilih angka
    let aiCom = Math.floor(Math.random() * 10) + 1

    // rules
    let hasil = ''
    if (player === aiCom) {
        hasil = 'benar!'
    } else if (player > aiCom) {
        hasil = 'terlalu tinggi!'
    } else if (player < aiCom) {
        hasil = 'terlalu rendah!'
    } else {
        hasil = 'bukan angka!'
    }

    // output
    alert('Tebakanmu ' + hasil + '\nAngka yang kamu input adalah: ' + player + '\nAngka yang benar adalah: ' + aiCom)

    ulang = confirm('Mau main lagi?')
}

alert('Terima kasih sudah bermain')