// Fonksiyon Karşaması


//*****  Function Declarion // Statement *****

function square(num){
    return num*num;
}
console.log(square(3));


//function declaration --> HOISTED

console.log(multiple(3)); //6 oalrak çıktı verir
function multiple(num){
    return num+num;
}

        // ****** Function Expression ********
//Function Expression, function declarion'u bir değişkene aktarıyorsak function expression oluşturulmuş olur
//Fonksiyon ismi opsiyoneldir
const sum = function (num) {
    return (num + num);
}
console.log(sum(2));

//Function expression'u bir değişkene atadığımız için fonksiyona bir değişkene davranır gibi davranabiliriz

//FIRST - CLASS FUNCTIONS, bir fonksiyon bir değişkene atandığı zaman denir.

const myArr = [6, "Deniz", function(){console.log("Element of myArr");}]
myArr[2]();

const myObj = {
    age:"12",
    name:"Deniz",
    func: function() {console.log("Element of Object");}
}
myObj.func();

console.log(20 + (function() { return 10;})()); //fonk sytnax'ı IIFE örneğidir.

/*
    Function Expression is not HOISTED

devide(5); //Error

const devide = function (num) {
    return num - num;
}
*/

//Function Expression HOISTED değildir
//function Expression isimlendirme zorunlu değildir

// ******  FIRST - CLASS FUNCTIONS devam ******

//Bir fonksiyonu başka bir fonksiyona argüman olarak kullanabiliriz
const addFive = function(num, func){
    console.log(num + func()); //argüman olarak verilen fonk ile num parametresinin toplanmasını istiyoruz
}
addFive(10, function() { return 5;}); //num parametresine 10 veririz ve func argümanı için fonk yazdık


//return olarak döndürelecek değer olarak fonkisyon yazılabilir
const myFunc = function (num) {
    return function toDouble() {
        console.log(num*2);
    }
}
myFunc(8)();


const result = myFunc(7);
result();

// ****** IIFE (Ommediately Invocable Function Expression) *******

(function(){
    console.log(5+12)
})(); //fonksyon oluşturulduğu anda çalıştırmak için kullanırız. Fonksiyon çalıştıktan sonra başka bir yerde tekrar çağırıp kullanamayız
