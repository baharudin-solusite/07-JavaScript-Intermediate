// soal no 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {

    return arr.slice().reverse()
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// soal no 2
const array1 = [1, 3, 4, 1, 2, 8];
const array2 = [5, 6, 7, 8, 1, 3];


const getAverage = (arr) => {
    const avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    const result = arr.reduce((acc, curr) => (curr > avg) ? acc + 1 : acc, 0)
    return result
}

console.log(getAverage(array1))
console.log(getAverage(array2))

// soal no 3

const arr3 = [
    [10],
    [9, 7, 1],
    [2, 8],
];

const searchInArray = (arr3, num) => {
    const oneDArray = arr3.reduce((acc, curr) => [...acc, ...curr], []);
    const result = oneDArray.findIndex(x => x == num)

    return result < 0 ? null : result
}


console.log(searchInArray(arr3, 3));
console.log(searchInArray(arr3, 2));
console.log(searchInArray(arr3, 4));
console.log(searchInArray(arr3, 8));

