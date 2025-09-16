/*

Method event DOM
1. event handler = element.on<events> = function
2. addEventListener()

*/

// event handler
const button1 = document.getElementById('tombol')
function tampilAlert(){
    alert('Kamu menekan tombol 1')
}
button1.onclick = tampilAlert

// addEventListener
const button2 = document.getElementById('tombol1')
button2.addEventListener('click', function(){
    alert('Kamu menekan tombol 2')
})