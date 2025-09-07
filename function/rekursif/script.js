/*
rekursif adalah pemanggilan fungsi oleh fungsi itu sendiri
syntax:
function namaFungsi(parameter/argumen){
    body
    return namaFungsi(parameter/argumen) // contoh rekursif
}
namaFungsi(parameter/argumen)

notes: fungsi di atas akan menjalankan fungsi tak terbatas dan untuk menghentikan fungsi rekursif adalah
function namaFungsi(){
    if (kondisi namaFungsi){
        return
    }
    body
}
*/

function faktorial(n) {
    if (n === 0){
        return 1
    }
    console.log(n)
    return n * faktorial(n-1)
}

faktorial(3)