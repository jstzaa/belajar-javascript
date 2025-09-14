/*
syntax:
let namaObject = {
    key : value,
}
*/

// object literal
let siswa = {
    nama : 'Bayu',
    kelas : 12,
    jurusan : 'RPL'
}
console.table(siswa)

// function declaration
function tambahSiswa(nama, kelas, jurusan){
    let siswa = {}

    siswa.nama = nama
    siswa.kelas = kelas
    siswa.jurusan = jurusan

    return siswa
}

let siswa1 = tambahSiswa('Asep', 11, 'TKR')
console.table(siswa1)

// constructor
function Siswa(nama, kelas, jurusan){
    this.nama = nama
    this.kelas = kelas
    this.jurusan = jurusan
}

let siswa2 = new Siswa('Deni', 10, 'TJKT')
console.table(siswa2)