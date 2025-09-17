// 1. mengubah warna dengan toggle
// memanggil tag body
const body = document.getElementsByTagName('body')[0]

// memanggil id tombol
const changeBgColor = document.getElementById('changeColor')

// tambahkan event ubah warna
changeBgColor.addEventListener('click', function(){
    body.classList.toggle('color')
})


// 2. mengubah warna random
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


// mengubah warna dengan slider
// memanggil slider
const slider = document.querySelectorAll('input')

for (let i = 0; i < slider.length; i++){
    slider[i].addEventListener('input', function(){
    const r = slider[0].value
    const g = slider[1].value
    const b = slider[2].value

    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})
}