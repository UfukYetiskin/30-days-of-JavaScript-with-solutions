/*                      2.     Gün               */

/*          Primitive Data Types 
Numbers - Integers, Float
Strings- Any data under single quote, double quote or backstick quote
Booleans- true or false value
Undefined- a declared variable without a value
*/

let numOne = 3
let numTwo= 3
console.log(numOne == numTwo) //True

let word1 ="JS"
let word2 = "Pyhton"
console.log(word1 == word2) //False

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) //False

/*          Non-primitive Data Types 
Objects
Functions
Arrays, verilerden oluşan bir listedir. Diziler aynı veya farklı veri türlerini tutabilir.

Non-Primitive veri tiplerini karşılaştıramayız. Referansları aynı olmayacağı için, tuttukları bilgiler aynı olsa da False değerini döndürecektir.
*/

//Array
let nums = [1, true, 'JS']
nums[1] = false; 
console.log(nums)
console.log(nums[1])


let dizi1 = [1, 2, 3]
let dizi2 = [1, 2, 3]
console.log(dizi1 == dizi2) //False çıktısı alınır. Tuttukları değerler aynı olsa da referansları farklı.

let dizi3 = dizi1;
console.log(dizi3 == dizi1) //True çıktısı alır. dizi3, dizi2'nin referansını alır.

//Objects
let userOne = {
    name:'Ümmühan',
    surname:'Gümüş',
    role:'Guardated'
}
let userTwo = {
    name:'Ufuk',
    surname:'Yetişkin',
    role:'Student'
}


//              Numbers

let age =26  // yaş değişebileceği için let
const gravity = 9.81 //yer çekimi kuvveti hep aynı olduğu için Const
let mass = 72
//const PI = 3.14 
const boilingPoint = 100 //Kaynama derecesi
const bodyTemp = 37

//Math Objects

const PI = Math.PI
Math.round(9.18); //en yakın sayıya yuvarlar.
Math.ceil(3.76); //yukarı doğru yuvarlar her zaman
Math.floor(4.51); // Aşağı yuvarlar

Math.min(-5, -1, 1, 2, 3, 5) // en düşük sayıyı bize döndürür
Math.max(-5, -1, 1, 2, 3, 5) // en büyük sayıyı bize döndürür

Math.random() //Rastgele bir sayı üretir bize 0 ile 0.99 arasında.
Math.floor(Math.random() * 11); // 0 ile 10 arasında sayı üretmesini istersek bir üstü ile çarparız yani 11 ile.

Math.abs(-10) // Mutlak değer
Math.sqrt(100) //Karekök
Math.pow(5, 2)// Üstü, 3**2 ile aynı işi görür

//              Strings

let space = ' '
let firstName = "Tayfun"
let surName = `Erbilen`

//String Concatenation, stringleri birleştirme
let fullName = firstName + space +  surName;
console.log(fullName);

// Long Literal Strings
// uzun string değerlerinde alt paragrafa geçmek için ters slash kullanılır. Kullanılmaz ise onu farklı bir değer olarak tanır.

//Template Literals
fullName = `Adı: ${firstName} Soyadı: ${surName}`

//String Methods
let js ="Javascript"
console.log(js.length); // js değişkeninin toplam karakter uzunluğunu verir.

console.log(js[4]); // js string değişkeninin 4. indeksine sahip karakteri bize getirir.
console.log(js.length -1); // son indexi verir
console.log(js.toUpperCase()); //metindeki derğelrin hepsini büyük harfe çeviri.
console.log(js.toLocaleLowerCase());//metinde değerlerin hepsini küçük harfe çevirir.
console.log(js.substr(2,5)); // js string değişkeninin 2 karakterinden sonra gelen 5 karakteri al.
console.log(js.split('')); //split metodu ile metni parçalar ve diziye çeirir.
console.log(js.trim()); //başlangıçtaki ve sondaki gereksiz boşlukları siler.
console.log(js.includes('java')); // includes metodu ile istenilen alt metin değişeknde var ise true döndürür. Yoksa False döndürür. Büyük küçük harf duyarlı.
console.log(js.replace('Javascript', 'Pyhthon'));//Değişkendeki metni istenilen metin ile değiştirir.replaceAll ile bütün aynı kelimeri değiştirir.
console.log(js.charAt(1)); //js değişkenininin 0.indeksini getirir. charAt(lastIndex) ile de son indexi alır.
console.log(js.indexOf('y')); // değişken içerisinde belirtilen değer aranır. Eğer var ise bize bulduğu ilk  indeksi döndürür. lastIndexOf ile de aranan değeriden en son olanın indexsini verir.
console.log(js.startsWith('P'));// istenilen değerin string değerde başlayıp başlamadığına bakar. Bize True ya da False döndürür. Küçük harf büyük harfe duyarlıdır. endsWith benzer şekilde çalışır.
console.log(js.search('P')); // istenilen değeri değişkenin içinde arar bulursa indeksini verir.

let string = ' I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love')); // bize çıktı olarak ilk eşleştiği değerin indeksini döndürür.
console.log(string.match(/love/gi));//bize global olara değişkenin içinde arar. gi ile değişkenin tamamında ara ve küçük büyük harf duyarlı olmaz. Kaç tane eşleştiğini verir.

let txt = 'In 2019, I run 30 Days of Pyhton. Now, in 2020 I super exited to start this challenge'
let regEx = /\d/g // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

console.log(js.repeat(5)); //değişkenin kaç kere tekrarlanacağı belirlenir.

// Checking Data Types and Casting
console.log(typeof js);

//        Changing Data Type
/*String To Int 

parseInt()
Number()
Plus sign(+)
*/
let numara = '10'; //String bir değişkendir numara
let numInt = parseInt(numara);
let numInt2 = Number(numara);
let numInt3 = +numara;

/*String To Float 

parseFloat()
Number()
Plus sign(+)
*/
let numara4 = '10'; //String bir değişkendir numara
let numFloat = parseInt(numara4);
let numInt5 = Number(numara4);
let numInt6 = +numara4;

//Float to Int

let ıntSayi = 9.81;
let numtoFloat = parseInt(ıntSayi);

//              Exercises

let challenge = '30 days of JavaScript'
console.log(challenge)
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2))
console.log(challenge.includes('Script'));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('of'));
console.log(challenge.lastIndexOf('of'));
console.log(challenge.search('of'));
console.log(challenge.trim(' '));
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match('a'));
console.log(challenge.repeat(2));

