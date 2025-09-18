// komputer memilih kertas gunting batu
function getPilihanKomputer() {
    let aiCom = Math.floor(Math.random() * 3)

    if (aiCom == 0) return 'kertas'
    if (aiCom == 1) return 'gunting'
    if (aiCom == 2) return 'batu'
}

// rules
function getHasil(player, aiCom) {
    if (player == aiCom) {
        return 'seri!'
    } else if (player === 'kertas') {
        if (aiCom === 'gunting') {
            return 'kalah!'
        } else {
            return 'menang!'
        }
    } else if (player === 'gunting') {
        if (aiCom === 'kertas') {
            return 'menang!'
        } else {
            return 'kalah!'
        }
    } else if (player === 'batu') {
        if (aiCom === 'kertas') {
            return 'kalah!'
        } else {
            return 'menang!'
        }
    } else {
        return 'salah'
    }
}

// mengubah jawaban komputer menjadi emoticon
function getEmoticon(pilihan){
    if (pilihan == 'kertas') return '🤚'
    if (pilihan == 'gunting') return '✂️'
    if (pilihan == 'batu') return '🪨'
}

// memanggil tombol player
const pilihanPlayer = document.getElementsByTagName('button')

for (let i = 0; i < pilihanPlayer.length; i++) {
    pilihanPlayer[i].addEventListener('click', function(){
        const pilihanAI = getPilihanKomputer()
        const pilihanPemain = pilihanPlayer[i].className
        const hasil = getHasil(pilihanPemain, pilihanAI)

        const hasilCom = document.querySelector('.aiCom')
        hasilCom.innerHTML = getEmoticon(pilihanAI)

        const info = document.querySelector('.info')
        info.innerHTML = 'Kamu ' + hasil
    })
}