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
12. filter = mencari nilai dan mengembalikan dalam bentuk array
    namaArray.filter(function(parameter){
        return kondisi parameter
    })
13. find = mencari nilai tapi tidak mengembalikan dalam bentuk array
    namaArray.find(function(parameter){
        return kondisi parameter
    })
*/

let jurusan = ['PM','MPLB','TJKT','AKL','TO','Perhotelan','PPLG']

console.table(jurusan)
// length
console.log('Isi dari data ini ada: ' + jurusan.length)

// join
console.log(jurusan.join(' - ')) 

// push
jurusan.push('TKR','TITL') 
console.table(jurusan)

// pop
jurusan.pop() 
console.table(jurusan)

// unshift
jurusan.unshift('TITL','Tata Boga') 
console.table(jurusan)

// shift
jurusan.shift() 
console.table(jurusan)

// slice
let jurusan2 = jurusan.slice(3, 7) 
console.table(jurusan2)
console.table(jurusan)

// splice
jurusan.splice(5, 0, 'DKV','TITL') 
console.table(jurusan)

// forEach
jurusan.forEach(function(e){ 
    console.log(e)
})

// map
let angka = [1, 3, 8, 4, 6, 2, 9] 
let angka2 = angka.map(function(e){
    return e * 2
})
console.log(angka2)

// sort
jurusan.sort() 
console.table(jurusan)

// filter
let number = [1,1,2,3,3,4,4,4,5] 
let number2 = number.filter(function(e){
    return e == 4
})
console.log(number2)

// find
let cariJurusan = jurusan.find(function(cari){ 
    return cari == 'PPLG'
})
console.log(cariJurusan)