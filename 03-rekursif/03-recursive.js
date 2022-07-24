// Soal No 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}
console.log("-----soal no 1-------")
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));
// Soal no 2
const avg1 = countAvg(arr1);
const avg2 = countAvg(arr2);

function countAvg(arr) {
    sum = sumOfArray(arr);
    length = arr.length;

    return sum / length;
}

function countAboveAvg(arr, avg) {
    let checkArr = arr[0] > avg;
    if (arr.length === 1) {
        return checkArr;
    }
    arr.shift();
    return checkArr + countAboveAvg(arr, avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);
console.log("-----soal no 2-------")
console.log(totalAboveAvg1);
console.log(totalAboveAvg2);
// Soal No 3
const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
    if (arr[arr.length - 1] === num) {
        return "angka ditemukan pada index: " + (arr.length - 1);
    }
    if (arr.length === 1) {
        return "angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), num);
}
console.log("-----soal no 3-------")
console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));
// Soal No 4
function trianglePattern(x, y) {
    if (x === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (y - x + (i - x) + 2));
        }
    }
    console.log(space);
    trianglePattern(x - 1, y);
}
console.log("-----soal no 4-------")
// FIRST
trianglePattern(5, 5);
// SECOND
trianglePattern(5, 3);
// THRID
trianglePattern(5, 4);