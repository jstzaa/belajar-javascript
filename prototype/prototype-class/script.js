// input nama dan kelas
let nama = prompt("Masukkan nama");
let kelas = prompt("Masukkan kelas");

// inisialisasi class
class Siswa {
  // inisialisasi objek
  constructor(nama, kelas, energi = 10, kepintaran = 10) {
    this.nama = nama;
    this.kelas = kelas;
    this.energi = energi;
    this.kepintaran = kepintaran;
  }

  // method
  main(jam) {
    this.energi -= jam;
  }

  makan(porsi) {
    this.energi += porsi;
  }

  tidur(jam) {
    this.energi += jam;
  }

  belajar(jam) {
    this.energi -= jam;
    this.kepintaran += jam;
  }
}

// instansiasi objek
let template = new Siswa(nama, kelas);
console.log(template);

let ulangMethod = true;

while (ulangMethod === true) {
  // input method
  let method = prompt("Pilih method\nmain\nmakan\ntidur\nbelajar");
  switch (method) {
    case "main":
      let jamMain = parseInt(prompt("Main berapa jam?"));
      template.main(jamMain);
      break;
    case "makan":
      let porsiMakan = parseInt(prompt("Makan berapa porsi?"));
      template.makan(porsiMakan);
      break;
    case "tidur":
      let jamTidur = parseInt(prompt("Tidur berapa jam?"));
      template.tidur(jamTidur);
      break;
    case "belajar":
      let jamBelajar = parseInt(prompt("Belajar berapa jam?"));
      template.belajar(jamBelajar);
      break;
    default:
      alert("Method salah!");
      break;
  }

  console.log(template);
  ulangMethod = confirm("Ada method lain?");
}

alert(`Terima kasih ${nama}, semoga harimu menyenangkan`);
