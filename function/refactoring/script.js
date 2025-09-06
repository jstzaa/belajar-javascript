/*
sebelum refactoring:
function hitungVolume(a, b){
    let volumeA, volumeB, hasil

    volumeA = a * a * a
    volumeB = b * b * b
    hasil = volumeA + volumeB

    return hasil
}

alert(hitungVolume(1, 2))
alert(hitungVolume(20, 30))

*refactoring adalah cara merubah kode menjadi lebih 'baik' tanpa mengubah fungsi
*/

// setelah refactoring
function hitungVolume(a, b){
    return (a * a * a) + (b * b * b)
}

alert(hitungVolume(1, 2))
alert(hitungVolume(20, 30))