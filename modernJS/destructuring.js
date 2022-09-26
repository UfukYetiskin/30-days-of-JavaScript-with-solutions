console.log("-- Destructuring --")
//Destructuring (yıkıcı), dizilerdeki değerleri veya nesnelerden gelen özellikleri farklı değişkenlere açmayı mümkün kılan bir ifadedir.

//Destructuring Objects
//Objelerde destructring yaparken obje anahtarları ile değişkenin ismi aynı olmak zorundadır.

//Spread operatörüyle oluşturulan kalanlar değeri, Rest element olarak adlandırılır. Bu eleman. her zaman objenin veya dizinin son elemanı olarak gelmek zorundadır. Örneğin şöyle bir kullanım geçerli değildir.


const names = {
    first : "İris",
    last : "Yetişkin",
}
//destructuring

const {first, last} = names;

const person = {
    name : "alberto",
    last : "montalesi",
    links : {
        social : {
            facebook : "https://www.facebook.com/alberto.montalesi",
        },
        website : "http://albertomontalesi.github.io/",
    }
}

const {facebook} = person.links.social.facebook;
//Değişkenlerimizi nesnenin özelliğiyle aynı şekilde adlandırmakla sınırlı değiliz. Ayrıca aşağıdaki gibi yeniden adlandırabiliriz:
const {facebook :fb} = person.links.social.facebook;
const { facebook:fb1 = "https://www.facebook.com"} = person.links.social;
// we renamed the variable to *fb* and we also set a default value to it

const {alberto, ...infos} = person
console.log(infos);
//{last : montalesi, links : {social : { facebook : "https:/"}}, website : "https://"}

//React örneği

//Normalde KullaniciYasGoster(props)yapabilirdik, ama props içerisinde isim ve yas özellikleri olduğunu biliyoruz.
function KullaniciYasGoster({isim, yas}){
    return `${isim} isimli kullanıcı ${yas} yaşındadır.`
}




//Destructuring Arrays
//Dizilerde destructuring yaparken ise elemanların sırası önemlidir. İlk eleman, ilk girilen değişkene atanır.


const iris = ["İris", "Yetişkin", "2"];
const [name, surname, age] = iris

//Ya oluşturduğumuz değişkenlerin sayısı dizideki öğelerden daha azsa?
//burada yaş değeri okunmaz
const  [name1, surname1] = iris;
console.log(name1, surname1)//İris Yetişkin

//Diyelim ki kalan diğer tüm değerleri almak istiyoruz. Bunun için dinlenme operatörünü kullanabiliriz :
const deniz = ["Deniz", "Yetişkin", "pizza", "ice cream", "cheese cake"];

//rest operatörü ile değişken ismi atamadığımız bütün elemanları almış oluruz
const [ad, soyad, ...food] = deniz
//dizinin ilk iki değeri ve öğesi bağlanırken, geri kalanı rest operatörü ile atanır
//dinleme öperatörünün söz dizimi : ...'dir 

//Swapping variables with destructuring || Değişkenleri yok etme ile değiştirme
//destructuring, değişkenleri değiştirmeyi son derece kolaylaştırır.

let hungry = "yes";
let full = "no"
[hungry, full] = [full, hungry]
console.log(hungry, full)
//no yes
//Değerleri değiştirmek bundan daha kolay olamaz.
