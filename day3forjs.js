//Booleans, ture ya da false veri türünü ifade eder.

let isLightOn = true;


//                  OPERATORS

//Assigment Operators
/*
Operator        Example             Same As             Description
=                x = y               x = y                y is stored in x
+=               x += y              x = x+y             x+y result is stored in x 
-=               x -= y              x = x-y             x-y result is stored in x 
*=               x *= y              x = x*y             x*y result is stored in x 
/=               x /= y              x = x/y             x/y result is stored in x 
%=               x %= y              x = x%y             x%y result is stored in x 
**=              x **= y             x = x**y            x**y result is stored in x 

*/

let isRaining = true
isRaining ? console.log("You need a rain coat.") : console.log("No need for a rain coat"); // Çıktı, You need a rain coat olacaktır.

isRaining = false
isRaining ? console.log("You need a rain coat.") : console.log("No need for a rain coat"); // Çıktı, No need a rain coat olacaktır.


//Window Methods

alert('Selamün Aleyküm');

//Window Promt() Method

prompt('Enter number', 'number goes here');

//Window confirm(), tanımladığımız bir mesaj ile onay kutusu

let isDelete = console.log(confirm('Baaak emin misin laaaa!!'));

isDelete ? ("Enayi kabul etti laa ") : ("vay çakal bilir işi.");

//              Date Objects

let isDate = new Date();

let fullYear = isDate.getFullYear(),
    getDate = isDate.getDate(),
    getDay=  isDate.getDay(),
    getHour = isDate.getHours(),
    getMilSec = isDate.getMilliseconds(),
    getMin = isDate.getMinutes(),
    getMont = isDate.getMonth(),
    getSec = isDate.getSeconds(),
    getTime = isDate.getTime();
    getYear1 = isDate.getYear();

let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]
let days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar'
]

let humanReadableDate = `${getDay} ${months[getMont]} ${fullYear}, ${days[getDay]}:${getHour}:${getMin}`
console.log(humanReadableDate);

let base = prompt("Lütfen Base giriniz.");
let heigt = prompt("Height gir la");

let area = base * heigt * 0.5;
console.log(`Çevrenin uzunluğu:${area} `);

let ad = prompt("Adinizi Giriniz.");

ad.length < 7 ? console.log('Adiniz Kisa') : console.log("Adiniz uzun");