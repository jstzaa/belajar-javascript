/* 
syntax:
function namaFungsi(parameter){
    body
    return
}
*/

function hitungVolume(a, b){
    let volumeA, volumeB, hasil

    volumeA = a * a * a
    volumeB = b * b * b
    hasil = volumeA + volumeB

    return hasil
}

alert(hitungVolume(1, 2))
alert(hitungVolume(20, 30))