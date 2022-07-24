// 1. Apa itu synchronous?
// synchronous berarti berada dalam urutan, yaitu setiap pernyataan kode dieksekusi satu per satu. Jadi, pada dasarnya sebuah pernyataan harus menunggu pernyataan sebelumnya untuk dieksekusi


// 2. Apa itu asynchronous?
// Asynchronous adalah proses jalannya program bisa dilakukan secara bersamaan tanpa harus menunggu proses antrian. 

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?

// bisa dengan menggunakan javascript

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/*
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  6
second log:  6
second log:  6
second log:  6
second log:  6
*/

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi?
// karena variable i di deklarasi dengan var yang menjadikannya variabel global dan telah di ubah oleh proses first log karena i memiliki alamat yang sama

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// mengganti var dengan let
// for (var i = 1; i <= 5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }

for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}