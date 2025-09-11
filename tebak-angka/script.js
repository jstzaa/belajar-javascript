let ulang = true

while (ulang === true){
    alert('Selamat datang di game tebak angka \nTebak angka 1 - 10\nKamu mempunyai 3 kesempatan')

    // komputer memilih angka
    let aiCom = Math.floor(Math.random() * 10) + 1

    // kesempatan
    let kesempatan = 3
    let berhasil = false

    //rules
    while (kesempatan > 0){
        // player memilih angka
        let player = parseInt(prompt('Masukkan angka tebakan(1-10)'))

        if (player === aiCom) {
            alert('Tebakanmu benar!\nAngka: ' + aiCom)
            berhasil = true
            break
        } else if (player > aiCom) {
            alert('Tebakanmu terlalu tinggi\nKesempatan tersisa: ' + (kesempatan - 1))
        } else if (player < aiCom) {
            alert('Tebakanmu terlalu rendah\nKesempatan tersisa: ' + (kesempatan - 1))
        } else {
            alert('Input salah\nKesempatan tersisa: ' + kesempatan)
        }

        kesempatan--
    }

    if (!berhasil) {
        alert('Kesempatan habis!\nAngka yang benar adalah: ' + aiCom)
    }
    
    ulang = confirm('Mau main lagi?')
}

alert('Terima kasih sudah bermain')