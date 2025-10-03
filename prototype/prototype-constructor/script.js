let nama = prompt("Masukkan nama");
let kelas = prompt("Masukkan kelas");
let atribut = {
  energi: 10,
  kepintaran: 0,
};

function Siswa(nama, kelas, energi, kepintaran) {
  this.nama = nama;
  this.kelas = kelas;
  this.energi = energi;
  this.kepintaran = kepintaran;
}

Siswa.prototype.main = function (jam) {
  this.energi -= jam;
};

Siswa.prototype.makan = function (porsi) {
  this.energi += porsi;
};

Siswa.prototype.tidur = function (jam) {
  this.energi += jam;
};

Siswa.prototype.belajar = function (jam) {
  this.kepintaran += jam;
  this.energi -= jam;
};

let template = new Siswa(nama, kelas, atribut.energi, atribut.kepintaran);
console.log(template);

let ulang = true;
while (ulang === true) {
  let method = prompt("Pilih method\nmain\nmakan\ntidur\nbelajar");
  switch (method) {
    case "main":
      let main = parseInt(prompt("Main berapa jam?"));
      template.main(main);
      break;
    case "makan":
      let makan = parseInt(prompt("Makan berapa porsi?"));
      template.makan(makan);
      break;
    case "tidur":
      let tidur = parseInt(prompt("Tidur berapa jam?"));
      template.tidur(tidur);
      break;
    case "belajar":
      let belajar = parseInt(prompt("Belajar berapa lama?"));
      template.belajar(belajar);
      break;
    default:
      alert("Method tidak ada");
      break;
  }
  console.log(template);
  ulang = confirm("Ada method lain?");
}

alert(`Terima kasih ${nama}, semoga harimu menyenangkan!`);
