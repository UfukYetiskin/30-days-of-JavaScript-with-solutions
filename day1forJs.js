/*
Integers: Integer (negative, zero and positive) numbers. Example; -3, -2, -1, 0, 1, 2, 3
Float-point numbers: Decimal number. Example; -3.4, -.2.25, -1.0, 0.0, 1.1, 2.2, 3.5
String: A collection of one or more characters betwwen two single quotes, double quotes, or backsticks. Example: 'Asabeneh', 'Finland', 'I love Gumus'
Booleans: A boolean value is either True or False
Undefined: in JS, if you dont assign a value to a variable, the value is undefined.
--*/


/*typeof, veri türümüzü öğrenmek için kullandığımız bir fonk. */
console.log(typeof 'gumus');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);


/* Variables(Değişkenler), var, let ya da const anahtar kelimelerini kullaanrak değişken oluştururuz.*/

//Farklı zamanlarda değişebileceğini düşündüğümüz değişkenimiz var ise bunu LET ile tanımlarız.
//Eğer veri hiçbir zaman değişmeyecek ise, sabit ise, CONST ile tanımlarız.


//          Geçerli Değişken Tanımlamaları
// Değişken tanımlarken $ ve _ 'den başka karakter kullanılamaz.

/*
let firstName;
let lastName;
let getSecondName;
let _num_1;
let $num1;

const ID;
const birthDay;
const MARRRIED_Day;
*/

let firstName ="Ümmühan";
let lastName ="Gümüş Yetişkin";
const ID= 24389012321;

console.log(ID);