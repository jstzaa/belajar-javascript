/*
Method DOM selection
1. document.getElementById() // menyeleksi elemen denaan id -> element
2. document.getElementsByTagName() // menyeleksi elemen dengan tag -> HTMLCollections
3. document.getElementsByClassName() // menyeleksi elemen dengan class -> HTMLCollections
4. document.querySelector() menyeleksi elemen dengan selector css -> element
5. document.querySelectorAll() menyeleksi banyak elemen dengan selector css yang sama -> NodeList
*method DOM harus disimpan di dalam variabel
*/

// getElementById()
const tombol = document.getElementById('tombol')
tombol.innerHTML = 'KLIK SAYA!'
tombol.style.fontSize = '20px'

// getElementsByTagName
const button = document.getElementsByTagName('button')
for (let i = 0; i < button.length; i++){
    button[i].style.backgroundColor = 'lightblue'
}

// getElementsByClassName
const div = document.getElementsByClassName('container')[0]
div.style.border = '1px black solid'
div.style.borderRadius = '50px'

// querySelector
const h1 = document.querySelector('h1')
h1.style.color = 'lightgreen'

// querySelectorAll
const p = document.querySelectorAll('p')
for (let j = 0; j < p.length; j++){
    p[j].style.color = 'lightblue'
}