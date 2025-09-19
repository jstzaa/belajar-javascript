/*

Method DOM Traversal
1. parentNode // menelusuri node induk
2. parentElement // menelusuri elemen induk
3. nextSibling // menelusuri node setingkat setelahnya
4. nextElementSibling // menelusuri elemen setingkat setelahnya
5. previousSibling // menelusuri node setingkat sebelumnya
6. previousElementSibling // menelusuri element setingkat sebelumnya

*/

const closeButton = document.querySelectorAll('.close')

closeButton.forEach(function(e){
    e.addEventListener('click', function(event){
        e.parentElement.style.display = 'none'
    })
})