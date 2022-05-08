//Functions

//Function Declaration

//declaring a function without a parameter
/*
function functionName() {
    //code goes here
}
functionName(); 
*/

function sumFunc(num){
    let total = num + num;
    console.log(total);
}
sumFunc(3);

function printFullName(){
    let firstName = 'Ümmühan'
    let lastName = 'Gümüş'
    let space = ' ';
    let fullName = firstName + space + lastName
    return fullName;
}
console.log(printFullName);

//Unlimited number of parameters in regular function

//let us access the arguments objects
//arguments özelliği ile sınırsız paramterse özelliğini yazdırırız. 
function sumAl(){
    console.log(arguments)
}
sumAl(1,2,3,4) // [1, 2, 3, 4]

//function declaration

function sumAlNums(){
    let sum = 0
    for(let i =0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumAlNums(2,3,4,5));//14 
console.log(sumAlNums(1,3,5,7));//16

//Anonymous Function or without name
// bir değişkene tanımlanan fonksiyondur. 
const anonymousFun = function(name){
    return `Merhaba ${name}`
}
console.log(anonymousFun('ufuk'))


// Expression Function
const square = function(n){
    return n + n 
}
console.log(square(3));//6

//Self Invoking Functions
(function(){
    console.log('Burası kendi kendini çağıran fonksiyonun içi Örnek: 1')
})();

let sayHello = (function(name){
    console.log(`Hello ${name} Burası kendi kendini çağıran fonksion Örne: 2`);
})('Ümmühan');


//Arrow Function
const hello = name => `hello ${name}`  //tek parametre döndüreceksek bu şekilde kullanılabilir
console.log(hello('Gümüş'));

const toplama = (... numbers) => { //normal fonksiyonda kullanılan arguments operatörü yerine arrow functa rest operatörü (...) kullanılır.
    console.log(numbers)
}
toplama(2,3,4,5,6);

const changeToUpperCase = arr => {
    const newArr = []
    for(const element of arr) {
        newArr.push(element.toUpperCase());
    }
    return newArr;
}
const countries = ['Findland', 'Sweden', 'Norway', 'Denmark']
console.log(changeToUpperCase(countries));

//Function with default parameters

//syntax
//Declaring a function
/*function functionName(para = value){
    //codes
}
//Calling Function
functionName()
functionName(arg)*/

//Examples
function multiply(num1, num2 =2) { //num2 parametrse default 2 olarak tanımlanmıştır. Eğer bir değer girilmez ise 2 olarak döencektr 
    return num1 + num2
}
console.log(multiply(10)); // 12
console.log(multiply(10,5)); //15

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days of JavaScript!`
    return message
}
console.log(greetings()); // Peter, Welcome to 30 Days of JavaScript!
console.log(greetings('Ümmühan')); //Ümmühan, Welcome to 30 Days of JavaScript!


//Exercises
//1- Declare a function fullName and it print out your full name.
function myName(fullName1){
    console.log(`${fullName1}`)
}
myName('Ufuk Yetişkin');

//2- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name

function myFullName(nameofMe, surnameofMe){
    console.log(`${nameofMe} ${surnameofMe}`)
}
myFullName('Ümmühan','Yetişkin');

//3- Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(number1, number2){
    return number1+number2;
}
console.log(addNumbers(3,2));

//4- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width){
    return  area = length * width;
}
console.log(areaOfRectangle(3,6));

//5- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, witdh){
    return perimeter = 2 * (witdh + length);
}
console.log(perimeterOfRectangle(1,6));

//6- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, witdh, height){
    return perimeter = length * witdh * height;
}
console.log(volumeOfRectPrism(1,6,10));


//7- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let pi = Math.PI;
    return area = 2 * pi * r;
}
console.log(areaOfCircle(10));

//8- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function density(mass,volume){
    return  densty = mass / volume;
}
console.log(density(3,1))

//13- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
function BMI(kg, height){
    let bmi;
    bmi = kg / ((height * height));
    if(bmi < 18.5){
        console.log(`Your body mass index is: Underweight` );
    }else if(bmi > 18.5 && bmi < 24.9){
        console.log(`Your body mass index is: Normal weight` );
    }
    else if(bmi > 25 && bmi < 29.9){
        console.log(`Your body mass index is: Overweight` );
    }else if(bmi > 30)
    console.log(`Your body mass index is: Obese` );
}

BMI(20 , 1.80);

//14- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function largestArg(){
    let buyukSayi = 0;
    for(let i = 0 ; i<=arguments.length; i++){
        if(buyukSayi < i){
            buyukSayi=i;
        }
    }
    console.log(buyukSayi);
}
largestArg(1,2,3,4,5);

//Exercises: Level 2

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
let now = new Date();
function showDateTime(){
    let month = now.getMonth();
    let day = now.getDay();
    let year = now.getFullYear();
    let clock = now.getMinutes();
    let hours = now.getHours();
    console.log(`${day}/${month}/${year} ${clock}:${hours}`);
}
showDateTime();

//Declare a function name swapValues. This function swaps value of x to y.

function swapValues(num1,num2){
    let swap = num1;
    num1 = num2;
    num2 = swap;
    console.log(num1 + " " + num2)
}
swapValues(2,1);

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(value1, value2, value3, value4){
    let newArr1 = [];
    newArr1.push(value1,value2,value3,value4);
    let reverse = newArr1.reverse();
    console.log(reverse);
}
reverseArray(3,5,1,2);

//