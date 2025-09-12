/*
Method pada array
1. length = menghitung isi array
    namaArray.length
2. join = menggabungkan isi array menjadi sebuah string
    namaArray.join()
3. push = menambah nilai baru di akhir array
    namaArray.push('nilai1','nilai2')
4. pop = menghapus nilai terakhir pada array
    namaArray.pop()
5. unshift = menambah nilai baru di awal array
    namaArray.unshift('nilai1')
6. shift = menghapus nilai pertama pada array
    namaArray.shift()
*/

let jurusan = ['PM','MPLB','TJKT','AKL','TO','Perhotelan','PPLG']

console.table(jurusan)
console.log('Isi dari data ini ada: ' + jurusan.length) // length

console.log(jurusan.join(' - ')) // join

console.log(jurusan.push('TKR','TITL')) // push
console.table(jurusan)

console.log(jurusan.pop()) // pop
console.table(jurusan)

console.log(jurusan.unshift('TITL','Tata Boga')) // unshift
console.table(jurusan)

console.log(jurusan.shift()) // shift
console.table(jurusan)