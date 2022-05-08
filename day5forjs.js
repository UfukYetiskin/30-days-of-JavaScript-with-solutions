// DİZİLER (Arrays)

//Değişkenlerin aksine bir dizi birden fazla değişken atanabilir.

//syntax
const arr = Array()


const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number)
console.log(number[2]);
console.log(number.length);
console.log(number.length - 1 );



const info = ['Ufuk', 'Ümmühan', '2017', 'den sonsuza kadar'];


let gumus = 'Ümmühan Gümüş'
const charGumus = gumus.split(''); //['Ü','m','m','ü','h','a','n',' ','G','ü','m','ü','ş']

const words = ['a','b','c','d','e','f','g'];

words[3]= 13;
words[words.length - 1] = 'sonuncu';
console.log(words);

//Methods to manipulate Array
const arr2 = Array(); //creates an empty array

const eightEmptyValues = Array(8); //it creates eight empty values 


//Creating static values with fill, oluşturduğumuz boş diziyi fill metodu ile istediğimiz karakterlerle doldurabiliriz.

const eightXValues = Array(8).fill('X'); //it creates eight element values filled with 'X'
console.log(eightEmptyValues); //['X','X','X','X','X','X','X','X']


//Concatenating array using concat, Arrayleri birleştirmek istersek concat() metodunu kullanırız.
const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = [7,8,9]

let totalList = firstList.concat(secondList,thirdList)
console.log(totalList);

//Getting index an element in array, indexof metodu ile dizideki istediğimiz elemanın indeksini bize döndürür. Eğer dizide o eleman yoksa -1 döndürür

const number3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number3.indexOf(4)); //5
console.log(number3.indexOf(9)); //10
console.log(number3.indexOf(10)); //-1

//Check an element if it exist in an array, dizimizde bulunan elemanı kontrol etmek için bu yöntemi kullanabiliriz.

const fruits = ['banana','orange','mango','lemon']
let index = fruits.indexOf('lemon') //3

if(index != -1){
    console.log('his fruit does exist in the array');
}else{
    console.log('This fruit does not exist in the array');
}

//index != -1 ? console.log('his fruit does exist in the array') : console.log('This fruit does not exist in the array');

//Getting last index of an element in array, tekrar eden elemanların sonuncusunu bulmak için kullanılabilir.

const number4 = [0, 1, 2, 1, 2, 3, 6, 5, 8, 9];
console.log(number4.lastIndexOf(2)); //4
console.log(number4.lastIndexOf(1)); //3
console.log(number4.lastIndexOf(10)); // -1

//includes: To check if an item exist in an array. If it exist it returns the true else it returns false
//Dizinin içerisinde istenilen elemanın olup olmadıgını sorgular ve true ya da false döndürür

console.log(number4.includes(2)); //true
console.log(number4.includes(1)); //true
console.log(number4.includes(10)); //false

//Checking array, değişkenin array olup olmadıgını anlamak için kullanılır.
let names = ['Ümmühan','Ufuk','Deniz']
let names2 = 'Artemis'

console.log(Array.isArray(names)); //true döndürür.
console.log(Array.isArray(names2)); //false döndürür

//Converting array to string, bir diziyi stringe çevirmek istediğimiz zaman toString metodunu kullanırız.

console.log(names.toString()); //Ümmühan,Ufuk,Deniz

//Joining array elements, dizi elemanlarını verdiğimiz karaktere göre ayırıp string olarak elemanları geri dödnrür. Varsayılan olarak virgül ile ayırır.

console.log(names.join());//Ümmühan,Ufuk,Deniz
console.log(names.join(' $ ')); //Ümmühan $ Ufuk $ Deniz
console.log(names.join(''));//ÜmmühanUfukDeniz

//Slice array elements,  belli bir aralıkta birden fazla değeri kesmek istersek slice() metodunu kullanırız

let names3 = ['Ümmühan','Ufuk','Deniz','Artemis','Mete'];

console.log(names3.slice()); //it copies all item
console.log(names3.slice(1,3)); //['Ufuk','Deniz','Artemis'];

//Splice method in array, 3 parametre alır. Başlangıç konumu, silinecekelrin sayısı ve eklenenlerin sayısı.

let number5 = [0, 1, 2, 1, 2, 3, 6, 5, 8, 9];

console.log(number5.splice()); // remove all items
console.log(number5.splice(0,1)); //remove the first item
console.log(number5.splice(3,4,11,12,13,14)); //[0,1,2,11,12,13,14,5,8,9] //it removes four items and replace 4 items


//Adding item to an array using push, dizinin sonuna eleman eklemek için push() metodunu kullanırız.

number5.push('sona eleman ekledim');
console.log(number5);

//Removing the end element using pop, dizideki elemanı pop metodu ile kaldırırz.
number5.pop();
console.log(number5);

//Removing an element form the beginning, dizimim ilk elemanını silmek için shift() metodunu kullanırız
number5.shift();//remove one item from the beginning
console.log(number5);

//Add an element from the beginning

number5.unshift('birinci index');
console.log(number5);//['birinci index', 2, 1, 11, 12, 13, 14, 8, 9]

//Reversing array order, dizinin elemanlarını ters çevirir.
number5.reverse(); //[9,8,14,13,12,11,1,2,'birinci index']
console.log(number5);

//Sorting elements in array, sıralama metodu alfabeye göre ya da sayısal
number5.sort();
console.log(number5); //[1, 11, 12, 13, 14, 2, 8, 9, 'birinci index']

//Array of arrays
const secondArr = [4, 2, [1, 2, 3], 3];
console.log(secondArr[2][1]);//2
