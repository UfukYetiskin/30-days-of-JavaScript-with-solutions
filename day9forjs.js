// Hi Order Function, parametre olarak fonksiyon alırlar ya da geriye fonksiyon döndüren fonksiyonlardır.

//---   Callback Function, parametre olarak geçilen fonksiyonlara denir

const callback = (n) => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) + n
}
console.log(cube(callback, 3));


//--- Returnin Function

const a = sayi1 => {
    const b = sayi2 => {
        const c = sayi3 => {
            return sayi1 + sayi2 + sayi3
        }
        return c
    }
    return b
}
console.log(a(5)(10)(15))

//forEach metodu callback fonksiyonunu kullanır.

const number = [1, 5, 8, 9]

let total = 0;
number.forEach(numbers => total += numbers)
console.log(total)

//Setting time

//setInterval, JS'de belli zaman aralıklarında işlemi devam ettirmek için kullanırız. Bu metod, il parametre olarak callback fonksiyonu alır ve ikinci parametre olarak da duration(zamanı alır ms cinsinden 1sn = 1000ms) alır  

function sayHello() {
    console.log('hello');
}
//setInterval(sayHello, 1000);

//setTımeout, gelecekte bir kod blogunu çalıştırmak için kullanırız

function selam() {
    console.log('hello')
}
//setTimeout(selam, 1000);

//clearInterval, setInterval'i iptal etmek için kullanılır
//clearTimeout, setTimeout'ı iptal etmek için kullanılır.
/*
const interval = setInterval(selam, 1000)
const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log('Interval işlemi iptal edildi.')
}, 5000)

setTimeout(() => {
    clearTimeout(timeout)
    console.log('Timeout işlemi iptal edildi')
}, 3000);
*/

// -------- Functional Programming ------------


// forEach 

const sayilar = [7, 3, 1, 5, 2, 10, 6, 11, 13]
let toplam = 0
let calculate = (sayi, index) => toplam += (sayi + index)
sayilar.forEach(calculate)
console.log(toplam)

const countries = ['Turkey', 'Findland', 'Denmark', 'Sweden', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

//map

const sayilar2 = sayilar.map(sayi => sayi * 3);
console.log(sayilar2)

countries.map((eleman) => console.log(eleman.toLocaleLowerCase()))

let users = [
    {
        id: 1,
        name: 'İris',
        age: 23,
        gender: 'K'
    },
    {
        id: 2,
        name: 'deniz',
        age: 1,
        gender: 'K'
    },
    {
        id: 3,
        name: 'ufuk',
        age: 26,
        gender: 'E'
    }
]
users.map((kisiler) => console.log(kisiler));
users.map((kisiler) => console.log(`${kisiler.name} ${kisiler.age}`));

users = users.map((kisi) => {
    if (kisi.id === 2) {
        kisi.name = 'Artemis';
        kisi.age = 1;
    }
    return kisi
})
console.log(users)

const topla = sayilar.map(eleman => eleman + 2);
console.log('elemanların Toplamı: ', topla);

//filter
console.log(users.filter((cinsiyet) => cinsiyet.gender === 'E'))
const child = users.filter(bebek => bebek.age === 1);
console.log(child);

const filtrele = sayilar.filter(eleman => eleman % 2 == 0)
console.log('Filtreleme denemesi: ', filtrele);



//reduce, metodu, dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır
const reduce = sayilar.reduce((oldValue, currentValue) => {
    return oldValue + currentValue;
}, 0)

console.log(reduce)

//every, her elemanın koşulu sağlayıp sağlamadığını kontrol eder. Eğer bir tanesi bile karşılamıyor ise false döndürür
const control = users.every(eleman => eleman.gender === 'K');
console.log('Control değişkeni: ', control);


//some, elemanlardan bir tanesi bile koşulu sağlıyorsa true döndürür

const control2 = users.some(eleman => eleman.age === 1);
console.log('yaş kontorlü: ', control2);

//Find,koşula ilk uyan elemanı döndürür

const control3 = users.find(eleman => eleman.gender === 'K')
console.log('Find deneme: ', control3);

const control4 = sayilar.find(eleman => eleman > 3)
console.log('Find deneme2: ', control4)

const findID = users.find(eleman => eleman.id === 2);
console.log('find deneme3: ', findID);

//findIndex, elemanı döndürmek yerine index değerini döndürür. Eşleşen ilk değerin indexini döndürür

const tryFındIndex = sayilar.findIndex(eleman => eleman % 7 == 0)
console.log('findIndex Denemesi: ', tryFındIndex)

const found = users.findIndex(eleman => eleman.age > 24)
console.log('findIndex Denemesi2: ', found);

//sort, büyükten küçüğe sıralama için kullanılır. sıralanması istenilen değişken de değişir bu yüzden değişkeni kopyalamakta fayda var. Sıralamadan önce elemanları string değere dönüştürür. Numeric valuesları sıralarken düzgün sıralama yapamaz
//sort, sırlama metodunun numeric sıralamada düzgün çalışmasını istersek
const trySort = sayilar.sort((a, b) => b - a); //şeklinde yazıldığında doğru bir büyükten küçüğe sıralama yapacaktır. a-b ile de küçükten büyüğe sıralama yapacaktır
console.log('sortDeneme: ', trySort);

users.sort((a, b) => b.age - a.age) // users objesini, elemanların yaşlarına göre büyükten küçüğe sıraladık
console.log(users);

const names = ['Iris', 'Artemis', 'Ufuk']
names.sort((a, b) => b.localeCompare(a)); //Bu şekilde isimleri büyükten küçüğe doğru sıraladı.
console.log(names);

names.sort((a, b) => a.localeCompare(b)); //Bu şekilde isimleri küçükten büyüğe doğru sıraladı.
console.log(names);

//----------Exercises

const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: 1 },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 2 },
]
//Use forEach to console.log each country in the countries array.
countries1.forEach(eleman => console.log(eleman));

//Use forEach to console.log each name in the names array.
names1.forEach(eleman => console.log(eleman));

//Use forEach to console.log each number in the numbers array.
numbers.forEach(eleman => console.log(eleman));

//Use map to create a new array by changing each country to uppercase in the countries array.
countries1.map((eleman) => console.log(eleman.toLocaleUpperCase()));

//Use map to create an array of countries length from countries array.
countries1.map((eleman) => console.log(eleman.length));

//Use map to create a new array by changing each number to square in the numbers array
numbers.map((eleman) => console.log(eleman * eleman));

//Use map to change to each name to uppercase in the names array
names1.map((eleman) => console.log(eleman.toLocaleUpperCase()));

//Use map to map the products array to its corresponding prices.
products.map((eleman) => console.log(`${eleman.product}: ${eleman.price}`));

//Use filter to filter out countries containing land.
countries1.filter((eleman) => console.log(eleman.includes('land')));
const filtered = countries1.filter((eleman) => {
    eleman.toLocaleLowerCase();
    if (eleman.includes('land')) {
        return eleman
    } else {
        return false
    }
})
console.log('filtered denemesi', filtered);
//Use filter to filter out countries having six character.
const filteredLength = countries1.filter((eleman) => {
    if (eleman.length == 6) {
        return eleman
    }
})
console.log(filteredLength);

//Use filter to filter out country start with 'E';
countries1.filter((eleman) => console.log(eleman.includes('E')));

//Use filter to filter out only prices with values.
products.filter((eleman) => console.log(eleman.price));

//Use reduce to sum all the numbers in the numbers array.

const reducer = numbers.reduce((nowValue, olduValue) => {
    return olduValue + nowValue
}, 0)
console.log(reducer);

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const reducerCountries = countries1.reduce((firstCountry, secondCountry) => {
    return `${firstCountry}, ` + `${secondCountry}`;
})
console.log(reducerCountries + ' are north European countries');

//Use some to check if some names' length greater than seven in names array
names.some((eleman) => console.log(eleman.length >= 7));

//Use every to check if all the countries contain the word land
countries1.every((eleman) => console.log(eleman.includes(eleman.toLowerCase('land'))));

//Use find to find the first country containing only six letters in the countries array
const find6Letters = countries1.find((eleman) => {
    if (eleman.length == 6)
        return eleman;
});
console.log('find 6 letters: ',
    find6Letters);

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findIndexofNorway = countries1.findIndex((eleman) => {
    if (eleman == 'Norway') {
        return (eleman);
    }

})
console.log(findIndexofNorway);

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findIndexofRussia = countries1.findIndex((eleman) => {
    if (eleman == 'Russia')
        return eleman;
})
console.log(findIndexofRussia);

// ------------ Exercises: Level 2
//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const callBackFunc = products.filter((product) => product.price > 0)
    .map((eleman) => eleman.price )
    .reduce((acc, scroe) => acc + scroe);
console.log(callBackFunc);

// Find the sum of price of products using only reduce reduce(callback)
const totalPricawithReduce = products.reduce((acc, score) => {
    return acc + score.price;
}, 0)
console.log(totalPricawithReduce);

//eclare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
