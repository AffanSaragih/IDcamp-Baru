// Kamis, 24 OKtober 2024

 //Membuat Objek & Mengakses Properti
 let laptop = {
  brand: "Dell",
  model: "XPS 13",
  year: 2021,
};

console.log(laptop.brand); // Output: Dell

// Menambahkan Properti ke Objek & Memodifikasi
laptop.ram = "16GB";   // Menambahkan properti baru
laptop.year = 2022;    // Memodifikasi properti yang ada

console.log(laptop.ram);  // Output: 16GB
console.log(laptop.year); // Output: 2022

// Metode dalam Objek
let laptop = {
  brand: "Dell",
  model: "XPS 13",
  year: 2022,
  describe: function() {
    console.log(`Laptop ini adalah ${this.brand} ${this.model} dari tahun ${this.year}.`);
  }
};

laptop.describe(); // Output: Laptop ini adalah Dell XPS 13 dari tahun 2022.

// Mengakses Properti dengan Bracket Notation
console.log(laptop["model"]);  // Output: XPS 13
console.log(laptop["brand"]);  // Output: Dell

// Objek dengan Metode untuk Perhitungan
let karyawan = {
  nama: "Andi",
  posisi: "Programmer",
  tahunMasuk: 2018,
  hitungLamaKerja: function () {
    return 2024 - this.tahunMasuk;
  },
};

console.log(karyawan.hitungLamaKerja()); // Output: 6

// Destructuring Objek Sederhana
let buku = {
  judul: "Belajar JavaScript",
  harga: 120000,
  penerbit: "TechBooks",
};

let { judul, harga } = buku;
console.log(judul, harga); // Output: Belajar JavaScript 120000

//  Destructuring Objek dengan Nilai Default
let pengguna = {
  username: "janedoe",
  email: "jane@example.com",
};

let { username, usia = 25 } = pengguna;
console.log(username, usia); // Output: janedoe 25

//  Destructuring Objek Bersarang (Nested Object)
let pesanan = {
  idPesanan: 987,
  pelanggan: {
    nama: "John Doe",
    alamat: "123 Oak Street",
  },
  barang: ["item1", "item2"],
};

let {
  idPesanan,
  pelanggan: { nama, alamat },
} = pesanan;
console.log(idPesanan, nama, alamat); // Output: 987 John Doe 123 Oak Street

// Destructuring Objek dalam Parameter Fungsi
let film = {
  judul: "Inception",
  sutradara: "Christopher Nolan",
  tahun: 2010,
};

const tampilkanInfoFilm = ({ judul, sutradara, tahun } = film) =>
  console.log(`Judul: ${judul}, Sutradara: ${sutradara}, Tahun: ${tahun}.`);

tampilkanInfoFilm(); // Output: Judul: Inception, Sutradara: Christopher Nolan, Tahun: 2010.

// BAB. Menstrukturkan Data dengan Array

// Membuat sebuah array dengan method typeof
// Membuat array kendaraan
let kendaraan = ["mobil", "motor", "sepeda"];

// Memeriksa tipe data array
console.log(typeof kendaraan); // Output: object (karena array adalah object di JavaScript)

// Memeriksa tipe data setiap elemen di dalam array
console.log(typeof kendaraan[0]); // Output: string
console.log(typeof kendaraan[1]); // Output: string
console.log(typeof kendaraan[2]); // Output: string

// Menggunakan sintaks Array.from

// sintaks dasar 
Array.from(arrayLikeObject, mapFunction, thisArg);

// Mengonversi array.from ke array lain nya
function buatArray() {
  console.log(arguments); 
  let arr = Array.from(arguments); // Mengubahnya menjadi array
  console.log(arr); // Output: [1, 2, 3, 4]
}

buatArray(1, 2, 3, 4);

//  Mengakses Element Array
let buah = ["apel", "pisang", "jeruk"];

console.log(buah[0]); // Output: apel
console.log(buah[1]); // Output: pisang
console.log(buah[2]); // Output: jeruk

// modif elemen array
let angka = [10, 20, 30];

angka[0] = 100;
console.log(angka); // Output: [100, 20, 30]


// Menghapus Elemen dan Data Array

// Menghapus Elemen di Posisi Tertentu dengan splice()
let hewan = ["kucing", "anjing", "burung", "ikan"];

// Menghapus 1 elemen dari indeks 1 (yaitu "anjing")
hewan.splice(1, 1);

console.log(hewan); // Output: ["kucing", "burung", "ikan"]

// Menghapus Elemen dengan shift()
let negara = ["Indonesia", "Malaysia", "Singapura", "Thailand"];

// Menghapus elemen pertama
negara.shift();

console.log(negara); // Output: ["Malaysia", "Singapura", "Thailand"]

// Menghapus Elemen dengan pop()
let binatang = ["gajah", "harimau", "kuda", "zebra"];

// Menghapus elemen terakhir
binatang.pop();

console.log(binatang); // Output: ["gajah", "harimau", "kuda"]

// Array Destructuring
let hobi = ["berenang", "membaca", "bersepeda"];
let [hobi1, hobi2, hobi3] = hobi;

console.log(hobi1); // Output: berenang
console.log(hobi2); // Output: membaca
console.log(hobi3); // Output: bersepeda

// Reverse
// Menggunakan reverse() untuk Membalik Array

let angka = [1, 2, 3, 4, 5];
angka.reverse();

console.log(angka); // Output: [5, 4, 3, 2, 1]


//  Membalik Array Berisi String

let kota = ["Jakarta", "Bandung", "Surabaya", "Medan"];
kota.reverse();

console.log(kota); // Output: ["Medan", "Surabaya", "Bandung", "Jakarta"]

// reverve pada Array campuran
let dataCampuran = ["apel", 100, true, "pisang"];
dataCampuran.reverse();

console.log(dataCampuran); // Output: ["pisang", true, 100, "apel"]

//  SORT

// Menggunakan sort() untuk Mengurutkan Angka secara Ascending
let angka = [50, 2, 1, 9, 30];
angka.sort((a, b) => a - b);

console.log(angka); // Output: [1, 2, 9, 30, 50]

// Mengurutkan Angka secara Descending
let angka = [50, 2, 1, 9, 30];
angka.sort((a, b) => b - a);

console.log(angka); // Output: [50, 30, 9, 2, 1]

// MAP

// Membuat Map dan Menambahkan Elemen
let map = new Map();
// Membuat Map untuk menyimpan informasi pelanggan
let pelanggan = new Map();

// Menambahkan data pelanggan
pelanggan.set('idPelanggan', 101);
pelanggan.set('nama', 'Arman Pratama');
pelanggan.set('umur', 30);
pelanggan.set('statusMember', true);

console.log(pelanggan); 
// Output: Map(4) {"idPelanggan" => 101, "nama" => "Arman Pratama", "umur" => 30, "statusMember" => true}

// Menyimpan Nilai di Map

let produkElektronik = new Map();

produkElektronik.set('idProduk', 501);
produkElektronik.set('namaProduk', 'Laptop Ultra');
produkElektronik.set('brand', 'TechBrand');
produkElektronik.set('harga', 15000000);

console.log(produkElektronik); 
// Output: Map(4) {"idProduk" => 501, "namaProduk" => "Laptop Ultra", "brand" => "TechBrand", "harga" => 15000000}

// Mengakses Nilai di Map
// Membuat Map untuk menyimpan data kafe
let dataKafe = new Map();

// Menambahkan beberapa data kafe
dataKafe.set('namaKafe', 'Kopi Nusantara');
dataKafe.set('lokasi', 'Jakarta');
dataKafe.set('tahunBerdiri', 2015);
dataKafe.set('rating', 4.7);

console.log(dataKafe.get('namaKafe'));       // Output: Kopi Nusantara
console.log(dataKafe.get('lokasi'));         // Output: Jakarta
console.log(dataKafe.get('tahunBerdiri'));   // Output: 2015
console.log(dataKafe.get('rating'));         // Output: 4.7

// Menghapus Nilai di Map

// Membuat Map untuk menyimpan data konferensi
let dataKonferensi = new Map();

dataKonferensi.set('judulEvent', 'Tech Future 2024');
dataKonferensi.set('lokasi', 'Bali');
dataKonferensi.set('tanggal', '10 November 2024');
dataKonferensi.set('jumlahPeserta', 500);

// Menghapus Nilai dalam Map dengan delete()
// Menghapus elemen berdasarkan kunci 'jumlahPeserta'
dataKonferensi.delete('jumlahPeserta');
console.log(dataKonferensi);  
// Output: Map(3) { 'judulEvent' => 'Tech Future 2024', 'lokasi' => 'Bali', 'tanggal' => '10 November 2024' }

