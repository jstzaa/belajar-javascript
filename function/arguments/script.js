function tambah(){
    let hasil = 0
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i]
    }
    return hasil
}

let coba = tambah(2, 3, 1, 3, 2)
console.log(coba)