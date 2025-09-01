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
    if(noAngkot <= 6 && noAngkot !== 5){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    }else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}