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
7. slice = mengiris sebuah array menjadi array baru
    let arr2 = arr1.slice(indexAwal,indexAkhir+1)
8. splice = menyisipkan nilai di tengah-tengah array
    namaArray.splice(indexAwal,mauDiHapusBerapa,'nilai')
9. forEach = pengulangan pada array
    namaArray.forEach(function(e){
        console.log(e)
    })
10. map = pengulangan pada array yang mengembalikan array
    let namaArray = []
    let namaArray2 = namaArray.map(function(parameter){
        return parameter
    })
11. sort = mengurutkan nilai array
    namaArray.sort()
*/

let jurusan = ['PM','MPLB','TJKT','AKL','TO','Perhotelan','PPLG']

console.table(jurusan)
console.log('Isi dari data ini ada: ' + jurusan.length) // length

console.log(jurusan.join(' - ')) // join

jurusan.push('TKR','TITL') // push
console.table(jurusan)

jurusan.pop() // pop
console.table(jurusan)

jurusan.unshift('TITL','Tata Boga') // unshift
console.table(jurusan)

jurusan.shift() // shift
console.table(jurusan)

let jurusan2 = jurusan.slice(3, 7) // slice
console.table(jurusan2)
console.table(jurusan)

jurusan.splice(5, 0, 'DKV','TITL') // splice
console.table(jurusan)

jurusan.forEach(function(e){ // forEach
    console.log(e)
})

let angka = [1, 3, 8, 4, 6, 2, 9] // map
let angka2 = angka.map(function(e){
    return e * 2
})
console.log(angka2)

jurusan.sort() // sort
console.table(jurusan)