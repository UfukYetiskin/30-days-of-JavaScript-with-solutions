//30 Days Of JavaScript: Closures
/*
Closure bir fonksiyonun, başka bir lexical scope tarafından çağırılsa bile kendi lexical scope’unu hatırlamasıdır.

Başka bir değişle; bir fonksiyon kendi kapsamı dışındaki bir değişkeni kullanıyorsa ve bu fonksiyon başka bir kapsamdan çalıştırılsa bile o değişkene hala erişimi vardır.

JavaScript, bir dış işlevin içine yazma işlevine izin verir. İstediğimiz kadar iç fonksiyon yazabiliriz. İç fonksiyon, dış fonksiyonun değişkenlerine erişiyorsa, buna Closure denir.
*/

function outerFunction(){
    let count= 0;
    function innerFunction(){
        count ++;
        return count;
    }
    return innerFunction
}
const innerFunc = outerFunction();
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
//1
//2
//3

function disFonk() {
    let count = 0;
    function plusOne(){
        count++
        return count
    }
    function minusOne(){
        count --
        return count;
    }
    return{
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = disFonk();
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
//1
//0

//Exercises Level 1
class personAccount {
    constructor(firstName, lastName, incomes = [8000,2000,1000], expenses = [4000,2000,3000])
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses
    }
}
const gumus = new personAccount('Ümmühan', 'Gümüş')
function infoPerson(){
    function kisiBilgi(){
        return gumus.firstName + " " + gumus.lastName;
    }
    function money(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return gumus.incomes.reduce(reducer);
    }
    return{
        kisiBilgi: kisiBilgi(),
        money : money()
    }
}
const info = infoPerson();
console.log("Ad soyad: "+ info.kisiBilgi + " Nakit tutar: " + info.money);

