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