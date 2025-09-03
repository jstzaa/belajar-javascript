let str = '' // inisialisasi string kosong
let n = 10

for(i = 0; i < 4; i++){ // loop untuk membuat baris
    if(i % 2 == 0){
        for(j = 0; j < n; j++){
            if(j % 2 == 0){
                str += '#'
            }else{
                str += ' '
            }
        }
        str += '\n'
    } else {
        for(j = 0; j < n; j++){
            if(j % 2 == 0){
                str += ' '
            }else{
                str += '#'
            }
        }
        str += '\n'
    }
    str += '\n' // garis baru
}

console.log(str) // output