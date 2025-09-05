let tanya = true

while (tanya === true) {
    // player memilih
    let player = prompt('Silakan pilih: \nkertas \ngunting \nbatu')

    // komputer memilih random
    let aiCom = Math.floor(Math.random() * 3)

    if (aiCom == 0) {
        aiCom = 'kertas'
    } else if (aiCom == 1) {
        aiCom = 'gunting'
    } else if (aiCom == 2) {
        aiCom = 'batu'
    }

    // rules
    let hasil = ''

    if (player == aiCom) {
        hasil = 'seri!'
    } else if (player === 'kertas') {
        if (aiCom === 'gunting') {
            hasil = 'kalah!'
        } else {
            hasil = 'menang!'
        }
    } else if (player === 'gunting') {
        if (aiCom === 'kertas') {
            hasil = 'menang!'
        } else {
            hasil = 'kalah!'
        }
    } else if (player === 'batu') {
        if (aiCom === 'kertas') {
            hasil = 'kalah!'
        } else {
            hasil = 'menang!'
        }
    } else {
        hasil = 'salah memasukkan input'
    }

    // output
    alert('Kamu memilih: ' + player + '\nKomputer memilih: ' + aiCom + '\nKamu ' + hasil)

    tanya = confirm('Mau main lagi?')
}

alert('Terima kasih sudah bermain')