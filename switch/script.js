/*
syntax:
switch(ekspresi){
    case 'nilai 1':
        aksi 1
    break
    case 'nilai 2':
        aksi 2
    break
    case 'nilai n':
        aksi n
    break
    default:
        aksi default
    break
}

!!break = opsional
*/

let jurusan = prompt('Masukkan jurusan anda: \n [contoh: BDP, OTKP, AKL, TKJ, TBSM, PH, RPL]' )

switch (jurusan){
    case 'BDP':
    case 'OTKP':
    case 'AKL':
        alert('Jurusan ini merupakan rumpun bisnis dan manajemen(bismen)')
    break
    case 'TKJ':
    case 'TBSM':
    case 'RPL':
        alert('jurusan ini merupakan rumpun teknik')
    break
    case 'PH':
        alert('jurusan ini merupakan rumpun pariwisata')
    break
    default:
        alert('Jurusan yang kamu masukkan tidak ada')
    break
}