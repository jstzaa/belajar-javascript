/*
syntax:
if(kondisi){
    aksi1(jika kondisi benar)
}else{
    aksi2(jika kondisi salah)
}
*/
let jmlAngkot = 10

for(let noAngkot=1;noAngkot<=jmlAngkot;noAngkot++){
    if(noAngkot <= 6){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}