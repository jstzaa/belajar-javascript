/*
syntax:
if(kondisi){
    aksi1(jika kondisi benar)
}else{
    aksi2(jika kondisi salah)
}
*/

for(let noAngkot=1;noAngkot<=10;noAngkot++){
    if(noAngkot <= 6){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}