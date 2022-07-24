// Soal No 1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function (name) {
        return "Hello, " + name;
    }
}

/// EDIT HERE
// ubah field name pada variable person menjadi namamu sendiri
person.name = "Baharudin Fahrul Arif Setya Utomo";

// ubah field favDrinks yang berisi "temulawak" menjadi "tap water"
person.favDrinks[1] = "tap water"

// ubah field greeting menjadi sebuah fungsi, dengan spesifikasi
// memiliki 1 parameter
// name [String] => nama seseorang yang akan disapa
// return value [String] => akan mengembalikan sebuah String dengan format "Hello, $NAME"
person.greeting = (name) => {
    if (typeof name !== 'string' || name.trim().length === 0) {
        return 'Please check your input again'
    } else {
        return `Hello, ${name.trim()}`
    }
}

/// STOP
console.log("------Soal No 1--------")
console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));


// Soal No 2
function getObjectValue(object, path) {
    path = path.split(".");
    let curr = object;

    for (let i = 0; i < path.length; i++) {
        const activeObj = curr[path[i]];
        curr = activeObj;
    }

    if (curr === undefined) {
        return null;
    }

    return curr;
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
            origin: "lampung",
            roastProfile: "medium to dark",
            ratio: 1
        },
        milk: {
            brand: "susu murni",
            isVegan: false,
            ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log("------Soal No 2--------")
console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// Soal No 3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    return items.reduce((tmp, curr) => {
        const btcSum = curr.btc.sell - curr.btc.buy;        // menghitung pendapatan untuk btc
        const dogeSum = curr.doge.sell - curr.doge.buy;     // menghitung pendapatan untuk doge
        const ethSum = curr.eth.sell - curr.eth.buy;        // menghitung pendapatan untuk eth
        return {
            btc: tmp.btc + btcSum,
            doge: tmp.doge + dogeSum,
            eth: tmp.eth + ethSum,
        };
    }, {
        btc: 0,
        doge: 0,
        eth: 0
    });
}

console.log("------Soal No 3--------")
console.log(calculateIncome(items));

