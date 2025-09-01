/*
syntax:
if(kondisi 1){
    aksi1(jika kondisi 1 benar)
}else if(kondisi 2){
    aksi2(jika kondisi 2 benar)
}else{
    aksi3(jika kondisi salah)
}
*/

let jmlAngkot = 10

for(let noAngkot=1;noAngkot<=jmlAngkot;noAngkot++){
    if(noAngkot <= 6){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    }else if(noAngkot === 8){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}