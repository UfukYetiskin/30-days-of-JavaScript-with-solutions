console.log("******** Arrow Functions ********")

/*
 Arrow Function, ES6 ile sunulan özelliklerden biridir. Arrow Function özelliğinin temel amacı JavaScript'te kullanılan fonksiyon tanımlama yöntemini kısaltmak ve prartik bir kullanım sağlamaktır.

 Oklu fonksiyon ifadeleri, JavaScript'te fonksiyon oluşturmanın
 yeni bir yönetimidir. En önemli ve sık kullanılan özelliklerden
 bir tanesi implicit (üst kapalı) return özelliğidir. Dikakt edilmesi
 gereken bir başka farklılık ise, oklu fonksiyon ifadeleri hoist edilmezler,
yani bir değişkene atadığınız oklu fonksiyonları, function ifadesiyle oluşturduğunuz fonksiyonlar gibi, oluşturmadan önce çağıramazsınız.

 */
//Example of ES5 type arrow function

 const greeting = function(name){
    return "hello " + name
 }

 //arrow function ES6

 const greeting1 = (name) => {
    return "hello " + name
 }

 //sadece bir parametre var ise paranteze gerek yok
 
 const greeting2 = name => {
    return "hello " + name
 }


 //parametre döndürlmeyeceks

 const greeting3 = () => {
    return "hello";
 }

 //-- Implicitly return

 //return kullanamdan da yazılabilir
 const greeting4 = name => "hello" + name;


//arrow function with map method
const race = "100m dash"
const runners = ["Usain Bolt", "Justin Gatlin", "Asafa Powell"]

const results = runners.map((runner, i)=> ({name : runner, race, place:i+1}))
console.log(results)
// [{name: "Usain Bolt", race: "100m dash", place: 1}
// {name: "Justin Gatlin", race: "100m dash", place: 2}
// {name: "Asafa Powell", race: "100m dash", place: 3}]

//Bu örnekte runners dizisi üzerinde bir işlem yapmak (yineleme) için map metodunu kullandık.
//ilk argüman dizideki geçerli öğedir ve i onun indeksidir.

//JavaScript'e kıvrımlı parantezlerin içinde ne olduğunu söylemek, örtük olarak döndürmek istediğimiz bir nesnedir, bu yüzdewn her şeyi parantez içine almamız gerekir.


//Arrow functions are anonymous || Ok fonksiyonları anonimdir
//Onlara referans verecek bir isme sahip olmak istiyorsak, onları bir değişkene bağlayabiliriz:

//Arrow function and the this keyword
/*
thisNormal işlevlerden farklı davrandıkları için, anahtar sözcükle birlikte ok işlevlerini kullanırken dikkatli olmanız gerekir .
Bir ok işlevi kullandığınızda, thisanahtar sözcük üst kapsamdan devralınır.



const box = document.querySelector(".box");

box.addEventListener("click", function() {
  this.classList.toggle("opening");
  setTimeout(function(){ //burada function ile bir fonksiyon oluşturulduğu için window'a this bağlantısı olacaktır bu nedenle hata alırız. Bunu engellemek ve üst katmandakini bağlamak için arrow function ile oluşturmamız gerekmektedir.
    this.classList.toggle("opening");
    },500);
});
Bu durumda sorun, ilkinin kutuya thisbağlı olması, constancak içindeki ikincisinin nesneye setTimeoutayarlanması ve Windowbu hatayı vermesidir:
Uncaught TypeError: cannot read property "toggle" of undefined


Ok işlevlerinin üst kapsamdan değerini miras aldığını bildiğimiz için, işlevimizi thisşu şekilde yeniden yazabiliriz:

const box = document.querySelector(".box");

box.addEventListener("click", function() {
  this.classList.toggle("opening");
  setTimeout(()=>{
    this.classList.toggle("opening");
    },500);
});
Burada ikincisi thisebeveyninden miras alacak ve constkutuya ayarlanacaktır.

divÖrnek kodu çalıştırdığınızda, sadece yarım saniye kırmızıya döndüğümüzü görmelisiniz .

*/




/*
     --- When you should avoid arrow functions ||Ok işlevlerinden ne zaman kaçınmalısınız? 
Anahtar kelimenin kalıtımı hakkında bildiklerimizi kullanarak, ok işlevlerini kullanmamanız gerekenthis bazı durumlar tanımlayabiliriz .
örnek 1
const button = document.querySelector("btn");
button.addEventListener("click", () => {
  // error: *this* refers to the `Window` Object
  this.classList.toggle("on");
})


örnek 2

const person1 = {
  age: 10,
  grow: function() {
    this.age++;
    console.log(this.age);
  }
}

person1.grow();
// 11

const person2 = {
  age: 10,
  grow: () => {
    // error: *this* refers to the `Window` Object
    this.age++;
    console.log(this.age);
  }
}

person2.grow();

Ok işlevleri ile normal işlevler arasındaki diğer bir fark, arguments object. arguments objectFonksiyonların içinden erişebildiğimiz dizi benzeri bir nesnedir ve o fonksiyona iletilen argümanların değerlerini içerir .

Hızlı bir örnek:

function example(){
  console.log(arguments[0])
}

example(1,2,3);
// 1
Gördüğünüz gibi ilk argümana bir dizi notasyonu kullanarak eriştik arguments[0].

Anahtar kelimeyle gördüğümüze benzer şekilde , ok işlevleri , üst kapsamlarından thisdeğerini devralır .arguments object

Bu örneğe önceki koşucu listemizle bir göz atalım:

const showWinner = () => {
  const winner = arguments[0];
  console.log(`${winner} was the winner`)
}

showWinner( "Usain Bolt", "Justin Gatlin", "Asafa Powell" )
Bu kod dönecektir:

ReferenceError: arguments is not defined
İşleve iletilen tüm argümanlara erişmek için ya eski işlev notasyonunu ya da yayılma sözdizimini kullanabiliriz (ki bunu Bölüm 9'da daha fazla tartışacağız)

argumentsBunun sadece bir anahtar kelime olduğunu, bir değişken adı olmadığını unutmayın .

Ok işlevli örnek :

const showWinner = (...args) => {
  const winner = args[0];
  console.log(`${winner} was the winner`)
}
showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell" )
 "Usain Bolt was the winner"
Fonksiyonlu örnek :

const showWinner = function() {
  const winner = arguments[0];
  console.log(`${winner} was the winner`)
}
showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell")
 "Usain Bolt was the winner"




*/