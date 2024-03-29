
// Soal no 1

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
    fun1: function () {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();
// Jawaban
// 1. fun1 akan mengembalikan objek sedangkan fun2 tidak akan mengembalikan apa-apa
// 2. Berbeda
// 3. Karena this pada fun1 akan merujuk pada function (fun1 adalah function) sedangkan fun2 tidak akan merujuk pada apa-apa


// Soal No 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

// Jawaban
// 1. Encapsulation adalah pembatasan akses langsung ke beberapa komponen objek. Kita membutuhkannya untuk menjaga data aplikasi kita agar tidak bisa sembarang diakses oleh orang lain.
// 2. Abstraction adalah suatu cara untuk melihat suatu object dalam bentuk yang lebih sederhana. Kita membutuhkan abstraction untuk menyederhanakan suatu sistem yang kompleks.
// 3. Mengapa kita membutuhkannya? Inheritance merupakan konsep mewariskan attribute dan method yang dimiliki oleh sebuah class kepada class turunannya. Kita membutuhkan konsep ini agar kelas yang kita buat hanya memiliki method dan atribut yang spesifik di dalamnya.
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya? Polymorphism merupakan konsep yang memungkinkan digunakannya suatu interface yang sama untuk memerintah suatu object agar melakukan suatu tindakan yang mungkin secara prinsip sama tetapi secara proses berbeda. Dengan polymorphism kita dapat memberikan obyek dari subclass ke obyek superclass dapat dilakukan tanpa perlu melakukan konversi




// Soal no 3
class Phone {
    constructor(brand, storage, ram) {
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }
    // mendapatkan isi dari field brand
    getBrandName() {
        return this.brand;
    }
    // mengubah nilai dari field brand
    setBrandName(newName) {
        this.brand = newName;
    }
    // mencetak spesifikasi dari ponsel
    printSpecification() {
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    }
    // mengubah nilai dari field storage dan ram
    setSpecification(storage, ram) {
        this.storage = storage;
        this.ram = ram;
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// Soal no 4
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courseOfferings = [];
    }

    getCourseIndex(course) {
        let index = -1;
        for (let i = 0; i < this.courseOfferings.length; i++) {
            if (this.courseOfferings[i].course.getSubject() === course.getSubject()) {
                index = i;
                break;
            }
        }
        return index;
    }

    // fungsi untuk memproses pengambilan course oleh student
    takeNewCourse(course) {
        this.courseOfferings.push(new CourseOffering(course));
        course.decreaseQuota();
    }

    // fungsi untuk menambahkan grade pada course
    takeATest(course) {
        const index = this.getCourseIndex(course);
        if (this.courseOfferings[index].attendance >= course.getAttendance()) {
            this.courseOfferings[index].grade = Math.floor(Math.random() * 100);
        } else {
            console.log("please fill your absent");
        }
    }

    // fungsi untuk menambahkan attandance pada course
    courseAttendance(course) {
        const index = this.getCourseIndex(course);
        this.courseOfferings[index].attendance++;
    }
}

class CourseOffering {
    constructor(course) {
        this.course = course;
        this.attendance = 0;
        this.grade = 0;
    }
}

class Course {
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    }
    getSubject() {
        return this.subject;
    }
    getAttendance() {
        return this.attendance;
    }
    decreaseQuota() {
        this.quota--;
    }
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);