// -------30 Days Of JavaScript: Manipulating DOM Object------
console.log('-----30 Days Of JavaScript: Manipulating DOM Object----')

//Creating an Element
/*
Bir HTML öğesi oluşturmak için etiket adını kullanırız. JavaScript kullanarak bir HTML öğesi oluşturmak çok basit ve basittir.
Document.createElement() yöntemini kullanıyoruz . Yöntem, bir dize parametresi olarak bir HTML öğesi etiket adını alır.
*/

//syntax
document.createElement('tagname');

let title = document.createElement('h1');
title.className = 'title'
title.style.fontSize = '24px'
title.innerText = 'Creating HTML Element DOM Day 2';
console.log(title);

//Creating an elements
//Birden çok eleman oluşturmak için döngü kullanmalıyız. Döngü kullanarak istediğimiz kadar HTML öğesi oluşturabiliriz.
//Öğeyi oluşturduktan sonra, HTML nesnesinin farklı özelliklerine değer atayabiliriz.
let  head;
for ( let i = 0; i < 3; i++){
    head = document.createElement('h1')
    head.className = 'title'
    head.style.backgroundColor = 'green'
    head.textContent = `Heading: ${i}`
    console.log(head)
}

//Appending child to a parent element
//Oluşturulan bir öğeyi HTML belgesinde görmek için onu alt öğe olarak üst öğeye eklemeliyiz.
//Document.body kullanarak HTML belge gövdesine erişebiliriz . Document.body , appendChild() yöntemini destekler . Aşağıdaki örneğe bakın.

let baslik ;
for( let i = 0; i < 3; i++){
    baslik = document.createElement('h2')
    if(i === 0){
        baslik.style.backgroundColor = `#${i}0FF00`
    }else if(i === 1){
        baslik.style.backgroundColor = `#${i}E90FF`
    }else{
        baslik.style.backgroundColor  = `#${i}28B22`
    }
    
    baslik.className = 'heading'
    baslik.id = `head${i}`
    baslik.textContent = `Heading ${i}`
    document.body.appendChild(baslik)
    console.log(baslik)
    
}

//Removing a child element from a parent node
//Bir HTML oluşturduktan sonra, öğeyi veya öğeleri kaldırmak isteyebiliriz ve removeChild() yöntemini kullanabiliriz.

// const ul = document.querySelector('ul')
// const lists = document.querySelectorAll('li')
// for(const list of lists){
//     ul.removeChild(list);
// }
//Daha basit b,r yolu var

const ul = document.querySelector('ul')
ul.innerHTML = '';
//Exercises Level 1
for(let i = 0; i <= 100; i++){
    const div = document.createElement('div');
    div.innerText = `${i}`
    div.style.width = '40px'
    div.style.margin = '20px'
    div.style.textAlign = 'center'
    div.style.display = 'flex'
    div.style.flexDirection = 'row'
    div.style.flexWrap = 'wrap'
    document.body.appendChild(div)
    if(i % 2 === 0){
        div.style.backgroundColor = 'green'
    }
    else{
        div.style.backgroundColor = 'yellow'
    }
    if(i >= 2){
        for(let num = 2 ; num < i; num++){
            if(num % i == 0){
                div.style.color= 'red'
            }
        }
    }
}

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andora', 'Argentina', 'Armenia', 'Australia', ' Bahrain', 'Bangladesh', 'Barbados','Benin', 'Bhutan', 'Bolivia', ' Brunei', 'Bulgaria', 'Burkina Faso']
for(let i = 0; i<countries.length; i++){
    const span = document.createElement('span');
    span.innerText =`${countries[i]}`
    span.style.display ='inline-block'
    span.style.border = '2px solid black'
    span.style.padding  = '20px'
    span.style.margin = '10px'
    document.body.appendChild(span);
}