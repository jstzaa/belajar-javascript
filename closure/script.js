// closure = function yang dikembalikan oleh function lainnya(function bersarang)

function count() {
  let counter = 0;
  // closure
  return function () {
    return ++counter;
  };
}

let test = count();

console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
