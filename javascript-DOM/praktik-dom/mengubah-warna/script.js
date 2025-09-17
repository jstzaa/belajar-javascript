// memanggil tag body
const body = document.getElementsByTagName('body')[0]

// memanggil id tombol
const changeBgColor = document.getElementById('changeColor')

// tambahkan event ubah warna
changeBgColor.addEventListener('click', function(){
    body.classList.toggle('color')
})