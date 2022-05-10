//30 Days Of JavaScript: Writing Clean Codes
/*
JavaScript bir programlama dilidir ve insan dili gibi sözdizimine sahiptir. JavaScript'in sözdizimi, ikna ve basitlik adına 
belirli bir stil kılavuzuna göre yazılmalıdır.

Neden stil rehberine ihtiyacımız var?

Kendi yönergelerinizi ve sözleşmelerinizi geliştirebilir veya iyi geliştirilmiş yönergeleri de uyarlayabilirsiniz. Bize en yaygın 
bilinen yönergeleri bildirin. En yaygın JavaScript Stil Kılavuzları

Airbnb JavaScript Stil Kılavuzu - https://github.com/airbnb/javascript
JavaScript Standart Stil Kılavuzu - https://standardjs.com/
Google JavaScript Stil Kılavuzu - https://google.github.io/styleguide/jsguide.html

Airbnb JavaScript Stil Kılavuzu
Airbnb, internetteki en popüler JavaScript stil kılavuzlarından birine sahiptir. JavaScript'in neredeyse her yönünü de kapsar ve 
birçok geliştirici ve şirket tarafından benimsenmiştir. Airbnb stil rehberine göz atabilirsiniz . ben de denemenizi tavsiye ederim. 
Stillerinin kullanımı çok kolay ve anlaşılması kolaydır.

Standart JavaScript Stil Kılavuzu
Bu kılavuz Airbnb kadar popüler değil ama buna bakmaya değer. Stil rehberlerindeki noktalı virgülü kaldırdılar .

Google JavaScript Stil Kılavuzu
Google'ın yönergesi hakkında pek bir şey söylemiyorum ve kullanmadım, bunun yerine bu bağlantıdan bir göz atmanızı öneririm .
*/

//Variables
let firstName = 'Ümmühan'
let lastName = 'Yetişkin'
let country = 'Turkey'
let city = 'Aydın'

//Arrays
const names = ['Ümmühan', 'Ufuk', 'Deniz', 'Artemis'];
const numbers = [0, 3.14, 9.81, 98,6 ]
const skills = [ 'HTML', 'CSS', 'JS']


//Functions
// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' '  + lastName;

// function which calculates a square of a number
const square = (n) => n * n;

// a function which generate random hexa colors
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for(let i = 0; 0 < 6; i++){
        index = Math.floor(Math.random() * str.length)
        hexa += str[index];
    }
    return hexa;
}
hexaColor();

// a function which shows date and time
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
const getTime = () => {
    const time = new Date();
    const yeare = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const sn = time.getSeconds();
    if(hour < 10){
        hour = '0' + hour
    }
    if(minute <10){
        minute = '0' + minute
    }
    const dateMotnhYear = date + '.' + month + '.' + yeare
    const now = hour + ':' + minute;
    const fullTime = 'Tarih: ' + dateMotnhYear + 'Saat: ' + now
    return fullTime
}
getTime();


//Loops
for(let i = 0 ; i < 3; i++){
    console.log(i)
}

// declaring an array variable
const namesCoders = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let leng = names.length
for(let i = 0; i <leng; i++){
    console.log(namesCoders[i].toLocaleUpperCase())
}

// iterating an array using for of
for(let name of namesCoders ){
    console.log(name.toLocaleUpperCase());
}

// iterating array using forEach 
namesCoders.forEach((name) => name.toLocaleLowerCase);

//iterating an object using for in
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
    isMarried: true
}
for(const key in person){
    console.log(key)
}


//Objects
// iterating through object keys
for(const key in person){
    console.log(key, person[key]);
}


//Conditional
//syntax
if(condition){
    // this part of code run for truthy condition
}else{
    // this part of code run for false condition
}

//if else
let num = 3;
if(num > 0) {
    console.log(`${num} is  bigger than 0`)
}else{
    console.log(`${num} is not bigger than 0`)
}

// if else if else if else

let a = 0
if (a > 0) {
 console.log(`${a} is a positive number`)
} else if (a < 0) {
 console.log(`${a} is a negative number`)
} else if (a == 0) {
 console.log(`${a} is zero`)
} else {
 console.log(`${a} is not a number`)
}

// Switch More Examples
let dayUserInput = prompt('what day is today?')
let day = dayUserInput.toLocaleLowerCase()

switch(day){
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break 
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day');       
}

// ternary

let isRaining = true
isRaining
 ? console.log('You need a rain coat.')
 : console.log('No need for a rain coat.')

 //Classes
 class Person{
     constructor(firstName, lastName){
        console.log(this) // Check the output from here
        this.firstName = firstName;
        this.lastName = lastName;
     }
 }