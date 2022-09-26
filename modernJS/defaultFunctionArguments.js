console.log("---- Default Function Arguments ----- ")

/*
Bir fonksiyonun aldığı parametreler için varsayılan değerler 
girilebilir. Eğer fonksiyon çağırıldığında bu değerler 
girilmezse, varsayılan değerler hesaba katılır.

ES6'dan önce, varsayılan değerleri işlev argümanlarına ayarlamak o kadar kolay değildi. 
Bir örneğe bakalım:



function getLocation(city,country,continent){
  if(typeof country === 'undefined'){
    country = 'Italy'
  }
  if(typeof continent === 'undefined'){
    continent = 'Europe'
  }
  console.log(continent,country,city)
}

getLocation('Milan')
 Europe Italy Milan

getLocation('Paris','France')
 Europe France Paris

Gördüğünüz gibi, fonksiyonumuz üç argüman alıyor: bir şehir, bir ülke ve bir kıta. 
İşlev gövdesinde ülke veya kıta olup olmadığını kontrol ediyoruz undefinedve bu durumda
 onlara varsayılan bir değer veriyoruz .

İkinci ve üçüncü parametreyi çağırırken getLocation('Milan')(ülke ve kıta) tanımsızdır 
ve fonksiyonlarımızın varsayılan değerleri ile değiştirilir.

function getLocation(continent,country,city){
  if(typeof country === 'undefined'){
    country = 'Italy'
  }
  if(typeof continent === 'undefined'){
    continent = 'Europe'
  }
  console.log(continent,country,city)
}

getLocation(undefined, undefined,'Milan')
// Europe Italy Milan

getLocation(undefined,'Paris','France')
// Europe Paris France
İlk argümanlardan herhangi birini varsayılanımızla değiştirmek istiyorsak, onları 
undefineden güzel görünen çözüm olmayan olarak geçirmemiz gerekir. Neyse ki, ES6 varsayılan işlev argümanlarıyla kurtarmaya geldi.
*/

//Default Function Arguments
//ES6'da function arguments

//burada tax ve tip parametreleri fonksiyona bir parametre gönderilmezse varsayılan olarak bu değerleri döndürecek.
function calculatePrice(total, tax = 0.1, tip = 0.06){
    return total + (total * tax) + (total * tip)
}
console.log(calculatePrice(100)) //116
console.log(calculatePrice(100, 0.6)) //166
console.log(calculatePrice(100, undefined , 0.02)) //112

//with Destructuring

function calculateTotal({
    total = 0,
    tax = 0.1,
    tip = 0.05} = {}){
        return total + (total * tax) + (total * tip)
}

console.log(calculateTotal({tip : 0.15, total : 100}))//125
/*
Fonksiyonumuzun argümanını bir Object yaptık. Fonksiyonu çağırırken, anahtarlarına göre
 eşleştirildikleri için parametrelerin sırası hakkında endişelenmemize bile gerek yok.

Yukarıdaki örnekte, bahşiş için varsayılan değer 0,05 idi ve biz bunun üzerine 0,15 ile 
yazdık. Ancak, varsayılan 0.1 olarak kalan vergiye bir değer vermedik.

Yazarak = {}, argümanımızı an olarak varsayılan Objectyaparız ve fonksiyonda hangi argümanı ilettiğimiz önemli değil, bir Object:
*/