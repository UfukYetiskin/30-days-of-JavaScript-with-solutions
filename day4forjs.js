//                      KOŞULLAR

//Conditionals, koşullu ifadeler farklı koşıllara bağlı olarak kararlar vermek için kullanılır.

//If
/* 
if (condition){
    this part of code runs for truthy condition
}
*/

let num =3;
if(num>0){
    console.log('Numara büyük la')
}else{
    console.log('Sayı büyükmüş laaaaa');
}

//Switch
/*
switch(caseValue){
    case 1:
        //code;
        break;
    case 2:
        //code;
        break;  
    case 3:
        //code;
        break;
    case 4:
        //code;
        break; 
    default:
        //code;
}
*/

let weather = 'cloudy';
switch(weather){
    case 'rainy':
        console.log('You need to take umbrella');
        break;
    case 'sunny':
        console.log('Weather is sunny. Dont worry');
        break
    case 'cloudy':
        console.log('weather is dark!');
        break
    default:
        console.log('I dont know how is weather')
}

//Exercises

let age =  prompt('Write your age:');

age > 18 ? console.log('You are old enough to drive') : console.log(`You are left ${18-age} years to drive`);

let sayi = prompt('Give me a number');

if(sayi % 2 == 0){
    console.log('Damn! This number Awesome ')
}else{
    console.log('Oh Shit! This number is bad ')
}

/* Ay kaç çeker ?? 
var ayKacCekti = new Date(2013, 02, 0).getDate();
alert(ayKacCekti); */