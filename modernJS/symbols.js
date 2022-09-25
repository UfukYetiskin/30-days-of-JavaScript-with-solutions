console.log("--- Symbols --- ")

/*
objelerin nitelikleri için (bir çok kaynakta key yerine property 
dendiği için yazı boyunca nitelik kelimesi kullanacağım) 
kullanılan tekil (unique) ve değişmez (immutable) ilkel veri 
tipidir.

Dolayısıyla bu örneklerle tekilliği anlamış olduk. Peki sembollerin 
kullanım amacı nedir? Objelerin nitelikleri sadece string değerler 
alabiliyor. Eğer biz bir obje niteliğine integer, float veya object 
tipinde bir nitelik girersek Javascript bunu string tipine çevirecek 
ve gelen çıktıyı nitelik olarak tanımlayacaktır.
*/

//The unique property of Symbols || Sembollerin benzersiz özelliği
//Semboller her zaman benzersizdir ve bunları nesne özellikleri için tanımlayıcılar olarak kullanabiliriz.

//syntax
const me = Symbol("Alberto");
console.log(me)
//Symbol(Iris)

//Her zaman benzersiz olduklarını söyledik, aynı değerde yeni bir sembol oluşturmaya çalışalım ve ne olacağını görelim:

const clone = Symbol("Alberto");
console.log(clone)

console.log(me == clone) //false
console.log(me === clone) //false

//Her ikisi de aynı değere sahiptir, ancak her zaman benzersiz oldukları için Sembollerle hiçbir zaman adlandırma çakışmalarına sahip olmayacağız.

//Nesne özellikleri için tanımlayıcılar
//Daha önce bahsettiğimiz gibi, bunları nesne özellikleri için tanımlayıcılar oluşturmak için kullanabiliriz, o halde bir örnek görelim:

const office = {
    Tom : "CEO",
    Mark : "CTO",
    Mark : "CTO"
}

for( person in office){
    console.log(person)
}
//Tom
//Mark

//Burada ikisi aynı adı paylaşan üç kişilik ofis nesnemiz var. İsim çakışmalarından kaçınmak için semboller kullanabiliriz.

const ofis = {
    [Symbol("Tom")] : "CEO",
    [Symbol("Mark")] : "CTO",
    [Symbol("Mark")] : "CIO"
};

for(person in ofis){
    console.log(person)
}
//undefined

//Symboller üzerinde döngü yapmaya çalıştığımızda undefined çıktısı alırız. Çünkü onlar numaralandırabilir değillerdir. Bu yüzden onların üzerinde bir ile döngü yapamıyoruz.

//Nesne özelliklerini almak istiyorsak kullanabiliriz.

const office2 = {
    [Symbol("Tom")] : "CEO",
    [Symbol("Mark")] : "CTO",
    [Symbol("Mark")] : "CIO",
}

const symbols = Object.getOwnPropertySymbols(office2);
console.log(symbols)
// (3) [Symbol(Tom), Symbol(Mark), Symbol(Mark)]
// 0:Symbol(Tom)
// 1:Symbol(Mark)
// 2:Symbol(Mark)


//Diziyi aldık, ancak özelliklere erişebilmek için kullanmamız gereken map

const office4 = {
    [Symbol("Tom")] : "CEO",
    [Symbol("Mark")] : "CTO",
    [Symbol("Mark")] : "CIO",
  };
  
  const symbols2 = Object.getOwnPropertySymbols(office4);
  const value = symbols2.map(symbol => office4[symbol]);
  console.log(value);
// (3) ['CEO', 'CTO', 'CIO']
// 0:"CEO"
// 1:"CTO"
// 2:"CIO"