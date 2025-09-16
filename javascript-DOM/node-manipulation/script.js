/*

Method Node Manipulation
1. document.createElement() // menambah elemen baru
2. document.createTextNode() // menambahkan isi pada elemen baru
3. node.appenChild() // menambahkan elemen child baru pada node
4. node.insertBefore() // menyisipkan elemen child baru pada node
5. parentNode.removeChild() // menghapus child node
6. parentNode.replaceChild() // mengganti child node

*/

const sectionA = document.getElementById('a')
// createElement()
const judulBaru = document.createElement('p')
// createTextNode()
const teksJudul = document.createTextNode('Paragraf Baru')
// appenChild
judulBaru.appendChild(teksJudul)
sectionA.appendChild(judulBaru)


const sectionB = document.getElementById('b')
const listSisipan = document.createElement('li')
const isiListSisipan = document.createTextNode('List Sisipan')

listSisipan.appendChild(isiListSisipan)

const ul = document.querySelector('section#b ul')
const li2 = document.getElementsByTagName('li')[1]

// insertBefore()
ul.insertBefore(listSisipan, li2)

const link = document.getElementsByTagName('a')[0]
// removeChild()
sectionA.removeChild(link)

const newH1 = document.createElement('h1')
const isiH1 = document.createTextNode('Judul Baru')
const p4 = document.querySelector('section#b p')

newH1.appendChild(isiH1)
// replaceChild()
sectionB.replaceChild(newH1, p4)

judulBaru.style.backgroundColor = 'lightgreen'
listSisipan.style.backgroundColor = 'lightgreen'
newH1.style.backgroundColor = 'lightgreen'