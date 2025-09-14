/*
Method DOM selection
1. document.getElementById() // menyeleksi elemen denaan id -> element
2. document.getElementsByTagName() // menyeleksi elemen dengan tag -> HTMLCollections
3. document.getElementsByClassName() // menyeleksi elemen dengan class -> HTMLCollections

*method DOM harus disimpan di dalam variabel
*/

const tombol = document.getElementById('tombol')

tombol.innerHTML = 'KLIK SAYA!'
tombol.style.fontSize = '20px'


const button = document.getElementsByTagName('button')
for (let i = 0; i < button.length; i++){
    button[i].style.backgroundColor = 'lightblue'
}

const div = document.getElementsByClassName('container')[0]
div.style.border = '1px black solid'
div.style.borderRadius = '50px'