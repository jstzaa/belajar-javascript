/*
syntax:
for(varNilaiAwal; kondisi terminasi; increment/decrement){
    aksi
}
*/

let jmlAngkot = 10
let angkotBeroperasi = 9
let noAngkot = 1

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik.')
    noAngkot++
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No.' + noAngkot + ' sedang tidak beroperasi.')
}