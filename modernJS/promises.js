console.log("-- Promise -- ")
/* 
JavaScriot Promise, eşzamansız bir işlemin sonucunu elde etmek için, bu sonuç
anında elde edilemediğinde kullanılabilen bir nesnedir.
JavaScript kodları engellemeyen bir şekilde çalıştığından, kodların
geri kalanının yürütülmesini engellemeden eşzamansız bir işlem beklememiz gerektiğinde
promise nesnesi önemli hale gelir.

JavaScript'teki bir söz, gerçek hayattaki bir söze benzer. Gerçek hayatta bir söz verdiğimizde, 
gelecekte bir şeyler yapacağımızın garantisidir. Çünkü sözler ancak gelecek için verilebilir.

Bir sözün 2 olası sonucu vardır: Ya zaman geldiğinde gerçekleşir ya da olmaz.

Bu, JavaScript'teki promise nesneler için de aynıdır. JavaScript'te bir söz tanımladığımızda, zaamanı geldiğinde gerçekleşecek veya reddedilemez.

JavaScript Promises
Söz(Promise) bir nesnedir. Promise nesnesinin 3 durumu vardır: 

> Pending (beklemede) : Promise başarılı veya başarısız olmadan önceki durum
> Resolved (Gerçekleşti) : Tamamlanmış promise
> Rejected(Reddedildi) : Başarısız promise

*/

//Create your own promise

// const myFirstPromise = new Promise((resolve, reject) =>{
//     code goes here
// })

const firstPromise = new Promise((resolve, reject) => {
    resolve("The value we get from the promise!");
});

firstPromise.then(data => {
    console.log(data);
})
//The value we get from the promise!

//setTimeout() Çözmeden önce belirli bir süre beklemek için a'yı birleştirebiliriz .

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Time outed!")
    }, 2000);
});

secondPromise.then((data) => console.log(data))
//2.seconds after : Time outed!

//Hatalar
const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(Error("Catched errors"));
    }, 2000);
})

thirdPromise.then((data) => {
    console.log(data)
}).catch(err=> console.log(err))

// Error: Catched errors
//     at promises.js:54:16

// .then()Söz çözüldüğünde ve .catch()söz reddedildiğinde değeri almak için kullanırız .

// Hata günlüğümüze baktığınızda, hatanın nerede oluştuğunu bize söylediğini görebilirsiniz. Çünkü biz yazdık reject(Error("this is our error"));ve basitçe reject("this is our error");.

//Chaining Promises

// Sözün çözülmüş veya reddedilmiş olmasına bakılmaksızın, öncekinden iade edilenleri bir sonraki için temel olarak kullanarak birbiri ardına vaatleri zincirleyebiliriz.

// İstediğiniz kadar sözü zincirleyebilirsiniz ve kod yine de yukarıda geri arama cehenneminde gördüklerimizden daha okunaklı ve daha kısa olacaktır .

const fourthPromise = new Promise((resolve, reject) => {
    resolve();
})

fourthPromise
    .then((data) => {
    return "working..."
    })
    .then((data) =>{ 
    console.log(data)
    throw "failed"
    })
    .catch((err) => {
        console.log(err)
    });

//working
//failed

const fifthPromise = new Promise((resolve, reject) => {
    resolve();
  });
  
  fifthPromise
    .then(data => {
      throw new Error("ooops");
      console.log("first value");
    })
    .catch(() => {
      console.log("catch an error");
    })
    .then(data => {
    console.log("second value");
    });
    // catch an error
    // second value

//catch an error
//second value

//Promise.resolve() & Promise.reject();
//Promise.resolve()ve Promise.reject()otomatik olarak çözülen veya reddedilen vaatler oluşturacaktır.

//Promise.resolve()
Promise.resolve("Success").then(function(value){
    console.log();
}, function(value){
    console.log("fail")
})

//Promise.reject()
Promise.reject(new Error("fail")).then(function(value){
    console.log("Success");
},function(error){
    console.log(error)
})

//Promise.all()&Promise.race()
//Promise.all()tüm sözler çözüldüğünde çözülen tek bir Söz döndürür.

const sixthPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "first value");
});
const sixthPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "second value");
});

sixthPromise.then((data) => {
    console.log(data)
})
// after 500 ms
// first value
sixthPromise2.then((data) => {
    console.log(data)
})
// after 1000 ms
// second value

//Birbirlerinden bağımsız olarak çözülecekler, anca Promise.all() kullandığımızda ne olduğuna bakın

const seventhPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "first value")
})

const seventhPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "second value");
});

Promise
    .all([seventhPromise, seventhPromise2])
    .then((data) => {
        const [seventhPromise, seventhPromise2] = data;
        console.log(seventhPromise, seventhPromise2)
    });
// after 1000 ms
// first value second value


// Değerlerimiz 1000 ms sonra ( ikinci sözün zaman aşımı) birlikte döndü. Bu, birincisinin ikincisinin tamamlanmasını beklemesi gerektiği anlamına gelir.

// Boş bir yinelenebiliri iletirsek, o zaman zaten çözülmüş bir söz verir.

// Sözlerden biri reddedilirse, çözülseler bile hepsi bu reddetmenin değeriyle eşzamansız olarak reddederdi.

const eighthPromise =  new Promise((resolve,reject) => {
    resolve("my first value");
  });
  const eighthPromise2 =  new Promise((resolve,reject) => {
    reject(Error("oooops error"));
  });
  
  // one of the two promises will fail, but `.all` will return only a rejection.
  Promise
    .all([eighthPromise, eighthPromise2])
    .then(data => {
      const[eighthPromise, eighthPromise2] = data;
      console.log(eighthPromise, eighthPromise2);
    })
    .catch(err => {
      console.log(err);
    });
    // Error: oot eighthPromise

//Öte yandan yinelenebirlideki sözlerden biri Promise.race() sözden gelen değerle çözülür veya reddedilir çözülmez çözen veya reddeden bir söz döndürür.

const ninethPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "nineth first value");
})
const ninethPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "nineth second value");
})

Promise.race([ninethPromise, ninethPromise2]).then(function(value){
    console.log(value)
})
// expected output: "second value"
// Boş bir yinelemeyi geçersek, yarış sonsuza kadar beklemede olurdu!