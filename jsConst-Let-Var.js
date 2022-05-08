//JavaScript Değişken Karmaşası

//let, değişen ve değişebilir ifadeler için kullanılır.
//const, değişmeyen sabitler için kullanılır


let age = 26
console.log(age);
age = 28;
console.log(age);
//let, özel olarak değiştirlemk istenen ifadeler için kullanırız

//let özelliği ile i değeri sürekli olarak değişebilir. Eğer const kullanılsaydı bir döngüye girmeden ilk çıktıdan sonra hata verecektir.
let str = "";
for(let i=0; i<10; i++)
{
    str = str.concat(i)
    console.log(str);
}
/*
Let                 Const

0       ya da         0
01                  Error
012
0123
01234
012345
0123456
01234567
012345678
0123456789
*/


const PI= 3.14;
console.log(PI);
//PI = 3.15; const'a yeni değer atanamaz.
//const, null değer oluşturamayız. Başlangıç değeri vermek zorundayız
//const olarak tanımlanan diziler ve nesneler (dizi de bir nesnedir), referans olarak bir yer tuttuğu için içerisinde bulunan propertyleri değiştirebiliriz.

const myArr = [1, 2, 3]
console.log(myArr)
myArr.pop();
console.log(myArr);
//Hata vermeden silecektir. Çünkü referans olarak değiştirilmiyor.
//[1, 2, 3]
//[1, 2]

const student = {
    name:"Ümmühan",
    age:23
}
Object.freeze(student)
console.log(student)
student.name ="İris";
console.log(student)

//{name: 'Ümmühan', age: 23}
//{name: 'İris', age: 23}
//Burada nesnenin kendisi değişmediği için bir hata almayacağız. Bunun yerine tuttuğu değerler değiştiğinde sıkıntı olmayacaktır
//freeze metodu ile nesnenin değerleri değişmez
/*student = {
    name : "Deniz",
    age : 0
*/
//burada student adında farklı bir referans yarattığı için hata alacağızs

//var, fonksiyonel ya da  global scope olarak çalışır

var x = 1;
console.log(x)
if ( x === 1)
{
    var x = 10;
    console.log(x);
}
console.log(x);
//burada x son sahip olduğu (10) değeri korur. 


//Let --> block scope

let y = 1;
console.log(y);

if(y === 1 )
{
    let y = 10;
    console.log(y);
}
console.log(y);
//if döngüsü içersinde y değişkeninin değeri 10 iken, koşuldan çıktığı anda 1 olarak çıktı verecektir.

//HOISTING, yukarı çekme yükseltme anlamına gelir. Kodu okumaya değikenleri okumayla bakar ve 
//değerlerini daha sonra okuduğu için değişkeni sıralamaya göre aşağıda tanımlasak bile undefined çıktısı alırız

console.log(x);
var x = 10;
//undefined çıktısı alınır

console.log(z);
let z = 20;
//hata alınır. let'teki hoisting yapısı var'daki hoisting yapısı ile aynı çalışmaz
