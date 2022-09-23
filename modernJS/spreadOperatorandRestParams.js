console.log(" --- Spread operator and rest parameters --- ")

//The Spread Operator
/* 
Spread Operators, sıfır veya daha fazla bağımsız değişkenin (fonksiyon çağrıları için) veya öğelerin (dizi değişmez değerleri için) 
beklendiği yerlerde bir dizi ifadesi veya dize gibi yinelenebilir bir öğenin genişletilmesine veya sıfır veya daha fazla olduğu yerlerde
bir nesne ifadesinin genişletilmesine olanak tanır. 
*/

//Combine Array  || Dizileri birleştir

const veggie = ["tomato", "cucumber", "beans"]
const meat = ["port", "beef", "chicken"]

const food = [...veggie, ...meat]
console.log(food)
//Array [ "tomato", "cucumber", "beans", "pasta", "pork", "beef", "chicken" ]

//... yayılmış söz dizimidir. Sebze ve et dizilerinin tüm bireysel değerlerini almamıza ve bunları dizi menüsüne koymamıza izin verdi. Aynı zamanda aralarına yeni bir öğe de ekleyebiliriz.


//Copy Arrays || Dizileri kopyala
//bir dizinin bir kopyasını oluşturmak istiyorsak, spread operatörü çok yararlıdır.

const veggie1 = ["tomato", "cucumber", "beans"]
const newVeggie = veggie1;

veggie1.push("peas");
console.log(veggie1)
// Array [ "tomato", "cucumber", "beans", "peas" ]

console.log(newVeggie);
// Array [ "tomato", "cucumber", "beans", "peas" ]
//newVeggie dizimiz de değişti. Bunun nedeni veggie dizinin kopyasını oluşturmadık. Bunun yerine yeni dizide eski dizimize başvurduk. Bu nedenle başvurduğumuz dizide yapılan değişiklikler yeni değişkenimizi de etkileyecektir.

//koypalamak için
const fruits = ["apple", "mango", "coconut", "banana"];
//we created array with fruits name

const newFruits = [].concat(veggie);
//or
const newFruits1 = [...fruits];

fruits.push("ananas");
console.log(fruits)
//(5) ['apple', 'mango', 'coconut', 'banana', 'ananas']

console.log(newFruits);
//['tomato', 'cucumber', 'beans']

//Spread operatörünün sözdizimi aşağıdaki gibidir ...YourArray. Değişkenin newVeggiedizinin bir kopyası olmasını istediğimiz için veggieonu bir Array'e atadık. Bunun içinde değişkendeki tüm değerleri şu şekilde yayarız veggie: [...veggie].


//Spread into a function
//spread operatörü sayesinde, bir dizi argümanla bir işlevi çağırmanın daha kolay bir yoluna sahibiz

//old way
function doStuff(x, y, z){
    console.log(x + y + z)
}
let args = [1, 2, 3]
doStuff.apply(null, args);//6

//new way with use the Spread Syntax
doStuff(...args)//6
//Örnekte gördüğümüz gibi doStuff fonksiyonumuz 3 parametre kabul etmektedir. args dizisini spread operatörü ile şu şekilde ... gönderiyoruz. Bu sayede apply() metoduna başvurmaya gerek kalmıyor.

//Başka bir örnek daha 
const iris = ["Iris", "Yetişkin"]

const greet = (first, last) => {
    console.log(`Hello ${first} ${last}`)
}
greet(...iris);
//Hello Iris Yetişkin


//Spread in Object Literals (ES 2018 / ES9)

let person = {
    name : "Deniz",
    surname : "Yetişkin",
    age : 2,
}

let clone = {...person};
console.log(clone)
//{name: 'Deniz', surname: 'Yetişkin', age: 2}

//The Rest parameter
//rest söz dizimi spread gibi ... ile kullanılır. Ama bunun tam tersidir. Spread bir diziyi genişletirken, rest birden çok öğeyi tek bir öğede yoğunlaştırır.

const runners = ["Tom", "Paul", "Mark", "Luke"];
const [ first, second, ...losers] = runners
console.log(...losers);
//Mark Luke

//İlk iki değeri constbirinci ve ikincinin içine kaydettik ve kalanları rest parametresini kullanarak kaybedenlerin içine koyduk.