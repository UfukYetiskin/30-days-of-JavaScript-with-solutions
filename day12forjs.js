// ---------- Regular Expressions
//Düzenli ifadeler (Regular Expressions) metin arama ve daha gelişmiş metin işleme için kullanılır. Metin aramak, düzenlemek, çıkarmak, değiştirmek ve metni belirli bir desen ile doğrulamak için kullanılabilir.
console.log('----------Regular Expressions--------')

/* RegExp Parameters
2 paramtere alır ve biri pattern bir diğeri ise flag'tır.

Pattern, bir kalıp, bir metin veya bir türk benzerlik içeren herhangi bir kalıp olabilir.
Flag, normal bir ifadede arama türünü belirleyen isteğe bağlı parametrelerdir. 
    g: global metinde bir kalıp aramak için kullanılır.
    i: büyük/küçük harfe duyarsız arama için kullanılır
    m: çok satırlı
*/
//Creating a pattern with RegExp Constructor

//Global flag ve büyük/küçük harf duyarsız bayrak olmadan normal ifade arama
//wihtout flag
let pattern = 'love';
let regEx = new RegExp(pattern);


//Genel flag ve büyük küçük harfe duyarsız bayraklı normal ifade arama
//with flag
let pattern1 = 'love'
let flag = 'gi';
let regEx1 = new RegExp(pattern1, flag);

//RegExp nesnesini kullanarak bir regex kalıbı bildirme. pattern ve flag'ı RegExp yapıcısının içine yazma
let regEx2= new RegExp('love', 'gi');


//Creating a pattern without RegExp Consructor

//Genel, büyük/küçük harfe duyarlı bayraklı arama
let regEx3 = /love/gi //let regEx2= new RegExp('love', 'gi'); bu yapıyla aynıdır.


//RegExp Object Methods

//Testinng for a match
//test(),  kendisine verilen düzenli ifadenin değişken içinde varsa true yoksa false değerini döndürür.
const str = 'I love JavaScript';
const pattern2 = /love/
const result = pattern2.test(str); // pattern2 değişkeninde /love/ ifadesini atarız ve test metodu ile str değişkeninin içersinde bu ifadenin olup olmadığını sorgularız.
console.log(result); //true

//Array containing all of the match
//match():kendisine parametre olarak verilen düzenli ifadenin isteklerini kontrol eder ve istenen değerlerde eşleşen sonucu bize dizi olarak döndürür.
const str1 = 'I love JavaScript';
const pattern3 = /love/;
const result2 = str1.match(pattern);
console.log(result2);//['love', index: 2, input: 'I love JavaScript', groups: undefined]

const pattern4 = /love/g
const result3 = str1.match(pattern4);
console.log(result3);//['love']

//search():  kendisine parametre olarak verilen düzenli ifade değişken içerisinde arar ve ilk eşleşen değerin index değerini döndürür.
const str2 = 'I love JavaScript';
const pattern5 = /love/g
const result4 = str.search(pattern5);
console.log(result4);//2

//Repacing a substring 
//replace(): kendisine parametre olarak verilen düzenli ifade değişken içerisinde arar ve eşleşen değeri istediğimiz deger ile değişimini sağlayarak bize döndürür.
const txt = 'Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language'
const matchReplaced = txt.replace(/Python|python/, 'JavaScript');
console.log(matchReplaced); //JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

const matchReplaced1 = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced1);//JavaScript is the most beautiful language that a human begin has ever created. I recommend JavaScript for a first programming language

const matchReplaced2 = txt.replace(/Python/gi, 'JavaScript');
console.log(matchReplaced2);//JavaScript is the most beautiful language that a human begin has ever created. I recommend JavaScript for a first programming language

const txt1 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
const matchReplaced3 = txt1.replace(/%/g, '')
console.log(matchReplaced3); //I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

/*
[]: Dizi karakteri
    - [a-c], a veya b veya c
    - [a-z], a'dan z'ye kadar
    - [A-Z], A'dan Z'ye kadar
    - [0-3], 1 veya 2 veya 3
    - [0-9], 0'dan 9'a kadar
    - [A-Za-z0-9], a'dan z'ye, A'dan Z'ye, 0'dan 9'a kadar herhangi bir karakter
\: özel karakterlerden kaçınmak için kullanılır.
    - \d, 0'dan 9'a dizenin rakamları içerdiği yerler ile eşleş
    - \D, dizenin rakam içermediği yerde eşleş
.: yeni satır karakteri (\n) dışında herahngi bir karakter
^: ile başlar
    - r'^substring' örneğin r'^love', aşk kelimesiyle başlayan bir cümle
    - r'[^abc], a değil, b değil, c değil anlamına gelir.
$: ile biter
    - r'substring$' örneğin r'love$', cümle aşk kelimesiyle biter
*: sıfır veya daha fazla kez
    - r'[a]*' isteğe bağlı anlamına gelir veya birçok kez ortaya çıkabilir.

*/


//Square Bracket - []

const pattern6 = /[Aa]pple/g
const txt2 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt2.match(pattern6);
console.log(matches); //(2) ['Apple', 'apple']

const pattern7 = /[Aa]pple|[Bb]anana/g;
const matches1 = txt2.match(pattern7);
console.log(matches1); //(4) ['Apple', 'banana', 'apple', 'banana']

// Escape character (\) in RegExp
const  pattern8 =  /\d/g
const txt3 =  'This regular expression example was made in January 12,  2020.'
const matches2 = txt3.match(pattern8);
console.log(matches2); //(6) ['1', '2', '2', '0', '2', '0']

const pattern9 = /\d+/g //d karakteri özeldir ve mtin içerisindeki sayıları almamızı belirtir
const matches3 = txt3.match(pattern9);
console.log(matches3);//['12', '2020']

//Period (.)
const pattern10 = /[a]./g
const txt4 = 'Apple and banana are fruits'
const matches4 = txt4.match(pattern10)
console.log(matches4); //['an', 'an', 'an', 'a ', 'ar']

const pattern11 = /[a].+/g
const matches5 = txt4.match(pattern11);
console.log(matches5); //['and banana are fruits']

//Zero or more times (*)
const pattern12 = /[a].*/g
const matches6 = txt4.match(pattern12);
console.log(matches6); //['and banana are fruits']

//Zero or more times (?)
const txt5 = 'I am not sure if there is a convention how to write the word e-mail. Some people write it email others may write it as Email or E-mail.'
const pattern13 = /[Ee]-?mail/g
const matches7 = txt5.match(pattern13);
console.log(matches7); //(4) ['e-mail', 'email', 'Email', 'E-mail']

//Quantifier in RegExp

const txt6 = 'This regular expression example was made in December 6,  2019'
const pattern14 = /\b\w{4}\b/g  // 4 karaktere sahip kelimeleri alır
const matches8 = txt6.match(pattern14);
console.log(matches8); //(3) ['This', 'made', '2019']

const pattern15 = /\b[a-zA-Z]{4}\b/g //numarasız 4 karaktere sahip olan ifadeleri alır
const matches9 = txt6.match(pattern15);
console.log(matches9) //['This', 'made']

const pattern16 = /\d{4}/g //4 karaktere sahip numaralı ifadeleri seçer
const matches10 = txt6.match(pattern16)
console.log(matches10);//['2019']

const pattern17 = /\d{1,4}/g
const matches11 = txt6.match(pattern17)
console.log(matches11);//(2) ['6', '2019']

//Cart ^
//Starts with
const pattern18 = /^This/ //^ This ifadesi ile başlayan ifadeyi bulur
const matches12 = txt6.match(pattern18);
console.log(matches12); //['This', index: 0, input: 'This regular expression example was made in December 6,  2019', groups: undefined
//Negation
const pattern19 = /[^A-Za-z,. ]+/g //^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches13 = txt6.match(pattern19)
console.log(matches13); // ['6', '2019']

//Exact match
let pattern20 = /^[A-Z][a-z]{3,12}$/;
let name = 'Ummuhan';
let result5 = pattern20.test(name);
console.log(result5); //true

//----- Exercises: Level 1
//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const rule = /\d{4,5}/g
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
const prices = text.match(rule);
console.log(prices);

let sum = 0;
for(let i = 0 ; i< prices.length; i++){
    let price = parseInt(prices[i]);
    sum += price;
}
console.log(sum);

//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const points = [-12, -4, -3, -1, 0, 4, 8]
const firstValue = Math.abs(points[0]);
const lastValue = Math.abs(points[points.length - 1]);
const distance = firstValue + lastValue;
console.log(distance);