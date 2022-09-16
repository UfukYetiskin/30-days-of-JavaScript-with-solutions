console.log("--- Template Listerals --- ")

// Interpolating string || enterpolasyon dizeleri


let name = "İris";
const greeting = `Hello my girlfriend's name is ${name}`
console.log(greeting)

//Expression interpolations || ifade enterpolasyonları
let a = 1;
let b = 10;
console.log(`1 * 10 is ${a*b}`)
//1 * 10 is 10

//Create HTML fragments || HTML Parçaları Oluşturun
//ES6'da her şeyi backtick çizgi içine sarmamız gerekiyor, her satırda artık ters eğik çizgi yok.
const content = `hello,
my name is Alberto
how are you?`

console.log(content)

//Nesting templates  || Yetleştirme Şablonları
//Bir şablonu diğerinin içine yerleştirmek çok kolaydır. Şöyle;
const peope = [
    {
        name : "Alberto",
        age : 27
    },
    {
        name: 'Caroline',
        age: 27
    },
    {
        name: 'Josh',
        age: 31
    }
]
const markup = `
<ul>
    ${peope.map((person) => `<li>${person.name}</li>`)}
</ul>
`
console.log(markup)
{/* <ul>
    <li>Alberto</li>,<li>Caroline</li>,<li>Josh</li>
</ul> */}

//Add a ternary operators || Üçlü Öperatör ekle
//Üçlü bir operatör kullnarak şablon dizgimizin içine kolayca bir mantık ekleyebiliriz.

const isDiscounted = false;

function getPrice() {
    console.log(isDiscounted ? "$10" : "$20")
}
getPrice()//$20

// eğer isDiscounted true ise $10 dönecektir eğer false ise $20 dönecektir

//name ve age özelliği verilmiş artist değişkeni yaratıldı
const artist = {
    name : "Bon Jovi",
    age : 56
}

//eğer artist değişkeni song özelliğine sahipse bir cümle ekleyecek değilse boş değer dönecektir
const text = `
<div>
    <p>
        ${artist.name} is ${artist.age} years old. ${artist?.song ? `and wrote the song ${artist.song}` : ""}
    </p>
</div>
`
console.log(text)
{/* <div>
    <p>
        Bon Jovi is 56 years old. 
    </p>
</div> */}


//Pass a function inside a template literal || Bir şablon değişmezi içinde bir işlev iletin

const groceries = {
    meat: "pork chop",
    veggie: "salad",
    fruit: "apple",
    others: ['mushrooms', 'instant noodles', 'instant soup'],
}

//bu fonksiyon gönderilen parametreyi map metodu ile listeleyecek
function groceryList(other){
    return `
        <p>
            ${other.map((item) => `<span>${item}</span>`).join('\n')}
        </p>
    `;
}
const meat = `
    <div>
        <p>${groceries.meat}</p>
        <p>${groceries.veggie}</p>
        <p>${groceries.fruit}</p>
        <p>${groceryList(groceries.others)}</p>
    </div>
`
console.log(meat)
//  <div>
//     <p>pork chop</p>
//     <p>salad</p>
//     <p>apple</p>
//     <p>
//      <p>
//        <span>mushrooms</span>
//        <span>instant noodles</span>
//        <span>instant soup</span>
//     </p>
//     </p>
//   <div>

/* 
Son petiketin içinde, fonksiyonumuzu çağırıyoruz groceryListve tüm 
othersyiyecekleri argüman olarak iletiyoruz. Fonksiyonun içinde, bir 
petiket döndürüyoruz mapve alışveriş listesindeki her bir ürünümüzün 
üzerinden geçmek için kullanıyoruz. spanBu, her bir bakkalı içeren 
bir dizi etiketin döndürülmesini içerir . .join('\n')Daha sonra, bu 
açıklıkların her birinden sonra yeni bir satır eklemek için 
kullanıyoruz .
*/

//Tagged template literals || Etiketli şablon değişmezleri
/* 
Bir işlevi bir şablon değişmezine etiketleyerek, şablonun içindeki her şeyi sağlayarak şablon değişmezini işlev boyunca çalıştırabiliriz.

Çalışma şekli çok basittir: fonksiyonunuzun adını alır ve onu çalıştırmak istediğiniz şablonun önüne koyarsınız.
*/
let person = "Alberto";
let age = 25;

function myTag(strings,personName,personAge){
  let str = strings[1];
  let ageStr;

  personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

  return personName + str + ageStr;
}

let sentence = myTag`${person} is a ${age}`;
console.log(sentence);
// Alberto is a youngster