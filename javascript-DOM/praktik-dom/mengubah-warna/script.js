// memanggil tag body
const body = document.getElementsByTagName('body')[0]

// memanggil id tombol
const changeBgColor = document.getElementById('changeColor')

// tambahkan event ubah warna
changeBgColor.addEventListener('click', function(){
    body.classList.toggle('color')
})

// tambahkan tombol baru
const newButton = document.createElement('button')
const isiNewButton = document.createTextNode('UBAH WARNA RANDOM')
newButton.appendChild(isiNewButton)
body.appendChild(newButton)

// tambahkan event ubah warna random
newButton.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b  + ')'
})