/*
Method DOM manipulation untuk elemen
1. element.innerHTML // merubah isi tag html
2. element.style.(propertiCSS) // merubah style elemen
3. element.setAttribute() // menambahkan atribut pada tag html
4. element.classList // 

*/


const tombol = document.getElementById('tombol')
// element.innerHTML
tombol.innerHTML = 'KLIK SAYA!'
tombol.style.fontSize = '20px'


const button = document.getElementsByTagName('button')
for (let i = 0; i < button.length; i++){
    button[i].style.backgroundColor = 'lightblue'
}


const div = document.getElementsByClassName('container')[0]
// element.style.(propertiCSS)
div.style.border = '1px black solid'
div.style.borderRadius = '50px'


const h1 = document.querySelector('h1')
// element.setAttribute()
h1.setAttribute('id','judul')
h1.style.color = 'lightgreen'
// element.classList
h1.classList.add('headline')

const p = document.querySelectorAll('p')
for (let j = 0; j < p.length; j++){
    p[j].style.color = 'lightblue'
}